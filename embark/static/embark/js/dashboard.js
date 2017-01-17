function getCookie(name) {
   var cookieValue = null;
   if (document.cookie && document.cookie !== '') {
       var cookies = document.cookie.split(';');
       for (var i = 0; i < cookies.length; i++) {
           var cookie = jQuery.trim(cookies[i]);
           if (cookie.substring(0, name.length + 1) === (name + '=')) {
               cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
               break;
           }
       }
   }
   return cookieValue;
}


var csrftoken = getCookie('csrftoken');
function csrfSafeMethod(method) {
   return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}


$.ajaxSetup({
    beforeSend: function(xhr, settings) {
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
    }
});


locationList = []
function get_locations(){
    var id = document.getElementById('userId').value
    $.ajax({
        url: '/api/GetEmbarker/' + id + '/',
        type: 'GET',
        datatype: 'json',
    }).done(function(results){
    locationList.push(results.locationPrefs.split(','))
    $('#button1').append(locationList[0][0] + ', ' + locationList[0][1]);
    $('#button2').append(locationList[0][2] + ', ' + locationList[0][3]);
    $('#button3').append(locationList[0][4] + ', ' + locationList[0][5]);
})}

get_locations()

function filter_headers1(e){
    var id = document.getElementById('userId').value
    $.ajax({
        url: '/api/GetEmbarker/' + id + '/',
        type: 'GET',
        datatype: 'json',
    }).done(function(results){
        var industryList = results.industryPrefs.split(',');
        var jobid = industryList[0]
        $.ajax({
            url: '/api/Industry/' + jobid + '/',
            type: 'GET',
            datatype: 'json',
        }).done(function(results){
            var source = $('#post-template1').html();
            var template = Handlebars.compile(source);
            var html = template(results);
            $('#col1').append(html);
        })})}

function filter_headers2(){
    var id = document.getElementById('userId').value
    $.ajax({
        url: '/api/GetEmbarker/' + id + '/',
        type: 'GET',
        datatype: 'json',
    }).done(function(results){
        var industryList = results.industryPrefs.split(',');
        var jobid = industryList[1]
        $.ajax({
            url: '/api/Industry/' + jobid + '/',
            type: 'GET',
            datatype: 'json',
        }).done(function(results){
            var source = $('#post-template1').html();
            var template = Handlebars.compile(source);
            var html = template(results);
            $('#col2').append(html);
        })})}

function filter_headers3(){
    var id = document.getElementById('userId').value
    $.ajax({
        url: '/api/GetEmbarker/' + id + '/',
        type: 'GET',
        datatype: 'json',
    }).done(function(results){
        var industryList = results.industryPrefs.split(',');
        var jobid = industryList[2]
        $.ajax({
            url: '/api/Industry/' + jobid + '/',
            type: 'GET',
            datatype: 'json',
        }).done(function(results){
            var source = $('#post-template1').html();
            var template = Handlebars.compile(source);
            var html = template(results);
            $('#col3').append(html);
        })})}

function filter_jobs1(city, state){
    var id = document.getElementById('userId').value
    $.ajax({
        url: '/api/GetEmbarker/' + id + '/',
        type: 'GET',
        datatype: 'json',
    }).done(function(results){
    var embarker = results
    var industryList = results.industryPrefs.split(',');
    var job = industry[industryList[0]]
    var glassurl = 'https://api.glassdoor.com/api/api.htm?t.p=112563&t.k=fKBkymF6I8W&userip=0.0.0.0&useragent=&format=json&v=1&ps=100&action=employers&q=' + job
    $.ajax({
    crossOrigin: true,
    url: glassurl,
    type: 'GET',
    dataType: 'jsonp',
    }).done(function(results){
        var cultureList = embarker.culturePrefs.split(',');
        for (var j = 0; j < results.response.employers.length; j++){
            var ratingParse = results.response.employers[j]
            var careerRating = ratingParse.careerOpportunitiesRating
            var careerInput = 0
            var cultureRating = ratingParse.cultureAndValuesRating
            var cultureInput = 0
            var leadershipRating = ratingParse.seniorLeadershipRating
            var leadershipInput = 0
            var payRating = ratingParse.compensationAndBenefitsRating
            var payInput = 0
            var workLifeRating = ratingParse.workLifeBalanceRating
            var workLifeInput = 0
            if (careerRating >= careerInput &&
                cultureRating >= cultureInput &&
                leadershipRating >= leadershipInput &&
                payRating >= payInput &&
                workLifeRating >= workLifeInput){
                    var company = ratingParse.name
                    searchcity = locationList[0][city]
                    searchstate = locationList[0][state]
                    var indeedurl = 'https://api.indeed.com/ads/apisearch?publisher=291337585868709&q=' + company + '&l=' + searchcity + '%2C+'+ searchstate + '&sort=&radius=&format=json&st=&jt=&start=&limit=5&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Chrome&v=2'
                    $.ajax({
                        async: true,
                        crossDomain: true,
                        crossOrigin: true,
                        url: indeedurl,
                        type: 'GET',
                        dataType: 'jsonp',
                    }).done(function(results){
                        var source = $('#post-template').html();
                        var template = Handlebars.compile(source);
                        var html = template(results.results);
                        $('#col1').append(html)
                    })
                }
        }
    })
})
}
function filter_jobs2(city, state){
    var id = document.getElementById('userId').value
    $.ajax({
        url: '/api/GetEmbarker/' + id + '/',
        type: 'GET',
        datatype: 'json',
    }).done(function(results){
    var embarker = results
    var industryList = results.industryPrefs.split(',');
    var job = industry[industryList[1]]
    var glassurl = 'https://api.glassdoor.com/api/api.htm?t.p=112563&t.k=fKBkymF6I8W&userip=0.0.0.0&useragent=&format=json&v=1&ps=100&action=employers&q=' + job
    $.ajax({
    crossOrigin: true,
    url: glassurl,
    type: 'GET',
    dataType: 'jsonp',
    }).done(function(results){
        var cultureList = embarker.culturePrefs.split(',');
        for (var j = 0; j < results.response.employers.length; j++){
            var ratingParse = results.response.employers[j]
            var careerRating = ratingParse.careerOpportunitiesRating
            var careerInput = 0
            var cultureRating = ratingParse.cultureAndValuesRating
            var cultureInput = 0
            var leadershipRating = ratingParse.seniorLeadershipRating
            var leadershipInput = 0
            var payRating = ratingParse.compensationAndBenefitsRating
            var payInput = 0
            var workLifeRating = ratingParse.workLifeBalanceRating
            var workLifeInput = 0
            if (careerRating >= careerInput &&
                cultureRating >= cultureInput &&
                leadershipRating >= leadershipInput &&
                payRating >= payInput &&
                workLifeRating >= workLifeInput){
                    var company = ratingParse.name
                    var industry = results.response.employers[j].industry
                    var searchcity = locationList[0][city];
                    var searchstate = locationList[0][state];
                    var indeedurl = 'https://api.indeed.com/ads/apisearch?publisher=291337585868709&as_and=' + '"'  + company + '"' + '+' + '"' + industry + '"' + '&l=' + searchcity + '%2C+'+ searchstate + '&sort=&radius=&format=json&st=&jt=&start=&limit=5&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Chrome&v=2'
                    console.log(indeedurl)
                    $.ajax({
                        crossOrigin: true,
                        url: indeedurl,
                        type: 'GET',
                        dataType: 'jsonp',
                    }).done(function(results){
                        var source = $('#post-template').html();
                        var template = Handlebars.compile(source);
                        var html = template(results.results);
                        $('#col2').append(html)
                    })
                }
        }
    })
})
}
function filter_jobs3(city, state){
    var id = document.getElementById('userId').value
    $.ajax({
        url: '/api/GetEmbarker/' + id + '/',
        type: 'GET',
        datatype: 'json',
    }).done(function(results){
    var embarker = results
    var industryList = results.industryPrefs.split(',');
    var job = industry[industryList[2]]
    console.log(job)
    var glassurl = 'https://api.glassdoor.com/api/api.htm?t.p=112563&t.k=fKBkymF6I8W&userip=0.0.0.0&useragent=&format=json&v=1&ps=100&action=employers&q=' + job
    $.ajax({
    url: glassurl,
    type: 'GET',
    dataType: 'jsonp',
    }).done(function(results){
        var cultureList = embarker.culturePrefs.split(',');
        for (var j = 0; j < results.response.employers.length; j++){
            var ratingParse = results.response.employers[j]
            var careerRating = ratingParse.careerOpportunitiesRating
            var careerInput = 0
            var cultureRating = ratingParse.cultureAndValuesRating
            var cultureInput = 0
            var leadershipRating = ratingParse.seniorLeadershipRating
            var leadershipInput = 0
            var payRating = ratingParse.compensationAndBenefitsRating
            var payInput = 0
            var workLifeRating = ratingParse.workLifeBalanceRating
            var workLifeInput = 0
            if (careerRating >= careerInput &&
                cultureRating >= cultureInput &&
                leadershipRating >= leadershipInput &&
                payRating >= payInput &&
                workLifeRating >= workLifeInput){
                    var company = ratingParse.name
                    var industry = results.response.employers[j].industry
                    var searchcity = locationList[0][city];
                    var searchstate = locationList[0][state];
                    console.log(company)
                    var indeedurl = 'https://api.indeed.com/ads/apisearch?publisher=291337585868709&q=' + company + '&l=' + searchcity + '%2C+'+ searchstate + '&sort=&radius=&format=json&st=&jt=&start=&limit=5&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Chrome&v=2'
                    $.ajax({
                        crossOrigin: true,
                        url: indeedurl,
                        type: 'GET',
                        dataType: 'jsonp',
                    }).done(function(results){
                        var source = $('#post-template').html();
                        var template = Handlebars.compile(source);
                        var html = template(results.results);
                        $('#col3').append(html)
                    })
                }
        }
    })
})
}

$(function () {
    id = document.getElementById('userId').value
    var url = '/api/GetEmbarker/' + id + '/'
    $.ajax({
        url: url,
        type: 'GET',
    }).done(function(results){
        var jobTitle = results.jobTitle
        console.log(jobTitle)
        var glassurl = 'https://api.glassdoor.com/api/api.htm?t.p=112563&t.k=fKBkymF6I8W&userip=0.0.0.0&useragent=&format=json&v=1&action=jobs-prog&countryId=1&jobTitle=' + jobTitle
        $.ajax({
            url: glassurl,
            type: 'GET',
            dataType: 'jsonp'
        }).done(function(jobs){
            var jobs = jobs.response.results
            Highcharts.chart('chartContainer1', {
                chart: {
                    backgroundColor: '#2B303A',
                    plotBackgroundColor: null,
                    plotBorderWidth: 0,
                    plotShadow: false,
                    spacingTop: 10
                },
                exporting: { enabled: false },
                title: {
                    text: jobTitle.toUpperCase().bold(),
                    align: 'center',
                    verticalAlign: 'top',
                    y: 50,
                    style: {
                        color: '#5299d3',
                        fontSize:'25px'
                    }
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                    pie: {
                        dataLabels: {
                            borderWidth: 0,
                            enabled: true,
                            distance: -12,
                            style: {
                                fontWeight: 'bold',
                                color: 'white',
                                fontFamily: '$font',
                                fontSize: 10
                            }
                        },
                        startAngle: -90,
                        endAngle: 90,
                        center: ['50%', '75%']
                    }
                },
                series: [{
                    type: 'pie',
                    name: 'Distribution',
                    size: 375,
                    innerSize: '50%',
                    data: [
                        [jobs[0].nextJobTitle.toUpperCase(), jobs[0].frequencyPercent],
                        [jobs[1].nextJobTitle.toUpperCase(), jobs[1].frequencyPercent],
                        [jobs[2].nextJobTitle.toUpperCase(), jobs[2].frequencyPercent],
                        [jobs[3].nextJobTitle.toUpperCase(), jobs[3].frequencyPercent],
                        [jobs[4].nextJobTitle.toUpperCase(), jobs[4].frequencyPercent],
                        {
                            name: 'Proprietary or Undetectable',
                            y: 0.2,
                            dataLabels: {
                                enabled: false
                            }
                        }
                    ]
                }]
            });
        })
    })
});

$(function () {
    $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=us-population-density.json&callback=?', function (data) {
        $.each(data, function () {
            this.code = this.code.toUpperCase();
        });
        id = document.getElementById('userId').value
        var url = '/api/GetEmbarker/' + id + '/'
        $.ajax({
            url: url,
            type: 'GET',
        }).done(function(results){
        var industryList = results.industryPrefs.split(',')
        var jobid = industryList[0]
        var url = 'http://api.glassdoor.com/api/api.htm?t.p=112563&t.k=fKBkymF6I8W&userip=0.0.0.0&useragent=&format=json&v=1&action=jobs-stats&returnStates=true&admLevelRequested=1&jc=' + jobid
        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'jsonp',
        }).done(function(results){
            state = results.response.states
            console.log(state)
        Highcharts.mapChart('dashboardmap', {
            chart: {
                spacingTop: -170,
                verticalAlign: 'top',
                backgroundColor: '#2B303A',
                borderWidth: 0
            },
            title: {
                style: {
                    color: '#5299d3',
                    fontSize:'25px',
                    fontWeight: 'bold'
                },
                text: 'Writing / Editing / Publishing',
                y: 220
            },

            legend: {
                enabled: false,
                layout: 'horizontal',
                borderWidth: 0,
                backgroundColor: '#2B303A',
                floating: true,
                verticalAlign: 'top',
                y: 250
            },

            mapNavigation: {
                enabled: false
            },

            colorAxis: {
                min: 1,
                type: 'logarithmic',
                minColor: '#ffffff',
                maxColor: '#3d1517',
                stops: [
                    [0, '#ffffff'],
                    [0.50, '#ff5a5f'],
                    [1, '#3d1517']
                ]
            },

            series: [{
                animation: {
                    duration: 1000
                },
                data: [{code: "AL", value:state["Alabama"].score},
                       {code: "AK", value:state["Alaska"].score},
                       {code: "AZ", value:state["Arizona"].score},
                       {code: "AR", value:state["Arkansas"].score},
                       {code: "CA", value:state["California"].score},
                       {code: "CO", value:state["Colorado"].score},
                       {code: "CT", value:state["Connecticut"].score},
                       {code: "DE", value:state["Delaware"].score},
                       {code: "FL", value:state["Florida"].score},
                       {code: "GA", value:state["Georgia"].score},
                       {code: "HI", value:state["Hawaii"].score},
                       {code: "ID", value:state["Idaho"].score},
                       {code: "IL", value:state["Illinois"].score},
                       {code: "IN", value:state["Indiana"].score},
                       {code: "IA", value:state["Iowa"].score},
                       {code: "KS", value:state["Kansas"].score},
                       {code: "KY", value:state["Kentucky"].score},
                       {code: "LA", value:state["Louisiana"].score},
                       {code: "ME", value:state["Maine"].score},
                       {code: "MD", value:state["Maryland"].score},
                       {code: "MA", value:state["Massachusetts"].score},
                       {code: "MI", value:state["Michigan"].score},
                       {code: "MN", value:state["Minnesota"].score},
                       {code: "MS", value:state["Mississippi"].score},
                       {code: "MO", value:state["Missouri"].score},
                       {code: "MT", value:state["Montana"].score},
                       {code: "NE", value:state["Nebraska"].score},
                       {code: "NV", value:state["Nevada"].score},
                       {code: "NH", value:state["New Hampshire"].score},
                       {code: "NJ", value:state["New Jersey"].score},
                       {code: "NM", value:state["New Mexico"].score},
                       {code: "NY", value:state["New York"].score},
                       {code: "NC", value:state["North Carolina"].score},
                       {code: "ND", value:state["North Dakota"].score},
                       {code: "OH", value:state["Ohio"].score},
                       {code: "OK", value:state["Oklahoma"].score},
                       {code: "OR", value:state["Oregon"].score},
                       {code: "PA", value:state["Pennsylvania"].score},
                       {code: "RI", value:state["Rhode Island"].score},
                       {code: "SC", value:state["South Carolina"].score},
                       {code: "SD", value:state["South Dakota"].score},
                       {code: "TN", value:state["Tennessee"].score},
                       {code: "TX", value:state["Texas"].score},
                       {code: "UT", value:state["Utah"].score},
                       {code: "VT", value:state["Vermont"].score},
                       {code: "VA", value:state["Virginia"].score},
                       {code: "WA", value:state["Virginia"].score},
                       {code: "WV", value:state["West Virginia"].score},
                       {code: "WI", value:state["Wisconsin"].score},
                       {code: "WY", value:state["Wyoming"].score}
                ],
                mapData: Highcharts.maps['countries/us/us-all'],
                joinBy: ['postal-code', 'code'],
                dataLabels: {
                    enabled: true,
                    color: '#FFFFFF',
                    format: '{point.code}'
                },
                name: 'Job Distribution',
                tooltip: {
                    pointFormat: '{point.code}: {point.value}'
                }
            }]
        });
    })});
})});

filter_headers1()
filter_headers2()
filter_headers3()
filter_jobs1(0,1)
filter_jobs2(0,1)
filter_jobs3(0,1)

Handlebars.registerHelper('displayLink', function(title, url) {
    newtitle = this.jobtitle
    url = this.url
    return '<a href=' + url + ' target="_blank"' + '>' + newtitle + '</a>';
})

var industry = {
    "1" : "Art,Entertainment",
    "2" : "Beauty,Wellness",
    "3" : "Education",
    "4" : "General Labor",
    "5" : "Hospitality",
    "6" : "Maintenance,Repair",
    "7" : "Medical,Healthcare",
    "8" : "Restaurant",
    "9" : "Retail",
    "10" : "Sales,Customer Service",
    "11" : "Security",
    "12" : "Skilled Trade",
    "13" : "Fitness",
    "14" : "Transportation",
    "15" : "Administrative",
    "16" : "Accounting",
    "17" : "Analyst",
    "18" : "Architecture",
    "19" : "Insurance",
    "20" : "Business Development",
    "21" : "Engineering",
    "22" : "Human Resources",
    "23" : "Legal",
    "24" : "Construction",
    "25" : "Advertising",
    "26" : "Non-Profit",
    "27" : "Management",
    "28" : "Real Estate",
    "29" : "Science",
    "30" : "Senior Management",
    "31" : "IT",
    "32" : "Writing"
}

function industries(){
    var id = document.getElementById('userId').value
    $.ajax({
        url: '/api/GetEmbarker/' + id + '/',
        type: 'GET',
        datatype: 'json',
    }).done(function(results){
        var cultureList = results.culturePrefs.split(',');
        $('#culture1').html("Career Opportunities : " + cultureList[0]) +
        $('#culture2').html("Culture and Values: " + cultureList[1]) +
        $('#culture3').html("Senior Leadership: " + cultureList[2]) +
        $('#culture4').html("Compensation & Benefits: " + cultureList[3]) +
        $('#culture5').html("Work/Life Balance: " + cultureList[4])
        var locationList = results.locationPrefs.split(',');
        $('#location1').html(locationList[0] + ',' + locationList[1]) + $('#location2').html(locationList[2] + ',' + locationList[3]) + $('#location3').html(locationList[4] + ',' + locationList[5])
        var industryList = results.industryPrefs.split(',');
        var jobid = industryList[0]
        $.ajax({
            url: '/api/Industry/' + jobid + '/',
            type: 'GET',
            datatype: 'json',
        }).done(function(results){
        $('#industry1').html(results.title)
        })
        var industryList = results.industryPrefs.split(',');
        var jobid = industryList[1]
        $.ajax({
            url: '/api/Industry/' + jobid + '/',
            type: 'GET',
            datatype: 'json',
        }).done(function(results){
        $('#industry2').html(results.title)
        })
        var industryList = results.industryPrefs.split(',');
        var jobid = industryList[2]
        $.ajax({
            url: '/api/Industry/' + jobid + '/',
            type: 'GET',
            datatype: 'json',
        }).done(function(results){
        $('#industry3').html(results.title)
        })

})}
industries()
