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

function filter_headers(column){
    var id = document.getElementById('userId').value
    $.ajax({
        url: '/api/GetEmbarker/' + id + '/',
        type: 'GET',
        datatype: 'json',
    }).done(function(results){
        var industryList = results.industryPrefs.split(',');
        var jobid = industryList[column]
        $.ajax({
            url: '/api/Industry/' + jobid + '/',
            type: 'GET',
            datatype: 'json',
        }).done(function(results){
            var source = $('#post-template1').html();
            var template = Handlebars.compile(source);
            var html = template(results);
            $('#col' + column).append(html);
        })})}

filter_headers(0)
filter_headers(1)
filter_headers(2)

function filter_jobs(city, state, column){
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
                        $('#col' + column).append(html)
                    })
                }
        }
    })
})
}

filter_jobs(0,1,0)
filter_jobs(0,1,1)
filter_jobs(0,1,2)

$(function () {
    id = document.getElementById('userId').value
    var url = '/api/GetEmbarker/' + id + '/'
    $.ajax({
        url: url,
        type: 'GET',
    }).done(function(results){
        var jobTitle = results.jobTitle
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
        Highcharts.mapChart('dashboardmap', {
            chart: {
                spacingTop: -350,
                spacingLeft: 20,
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
                text: 'WRITING / EDITING / PUBLISHING',
                y: 375,
                x: 20
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
                min: 0.1,
                max: 1.5,
                minColor: '#ffffff',
                maxColor: '#3d1517',
                stops: [
                    [0, '#ffffff'],
                    [0.50, '#ff5a5f'],
                    [1.5, '#3d1517']
                ]
            },

            series: [{
                animation: {
                    duration: 1000
                },
                data: [{code: "AL", value:(((state["Alabama"].numJobs)/122122)*100).toFixed(2)},
                       {code: "AK", value:(((state["Alaska"].numJobs)/17288)*100).toFixed(2)},
                       {code: "AZ", value:(((state["Arizona"].numJobs)/171051)*100).toFixed(2)},
                       {code: "AR", value:(((state["Arkansas"].numJobs)/77408)*100).toFixed(2)},
                       {code: "CA", value:(((state["California"].numJobs)/1084336)*100).toFixed(2)},
                       {code: "CO", value:(((state["Colorado"].numJobs)/199493)*100).toFixed(2)},
                       {code: "CT", value:(((state["Connecticut"].numJobs)/96333)*100).toFixed(2)},
                       {code: "DE", value:(((state["Delaware"].numJobs)/27981)*100).toFixed(2)},
                       {code: "FL", value:(((state["Florida"].numJobs)/467044)*100).toFixed(2)},
                       {code: "GA", value:(((state["Georgia"].numJobs)/332733)*100).toFixed(2)},
                       {code: "HI", value:(((state["Hawaii"].numJobs)/24160)*100).toFixed(2)},
                       {code: "ID", value:(((state["Idaho"].numJobs)/34423)*100).toFixed(2)},
                       {code: "IL", value:(((state["Illinois"].numJobs)/396218)*100).toFixed(2)},
                       {code: "IN", value:(((state["Indiana"].numJobs)/208510)*100).toFixed(2)},
                       {code: "IA", value:(((state["Iowa"].numJobs)/104466)*100).toFixed(2)},
                       {code: "KS", value:(((state["Kansas"].numJobs)/89006)*100).toFixed(2)},
                       {code: "KY", value:(((state["Kentucky"].numJobs)/118243)*100).toFixed(2)},
                       {code: "LA", value:(((state["Louisiana"].numJobs)/101586)*100).toFixed(2)},
                       {code: "ME", value:(((state["Maine"].numJobs)/33455)*100).toFixed(2)},
                       {code: "MD", value:(((state["Maryland"].numJobs)/200772)*100).toFixed(2)},
                       {code: "MA", value:(((state["Massachusetts"].numJobs)/265012)*100).toFixed(2)},
                       {code: "MI", value:(((state["Michigan"].numJobs)/226374)*100).toFixed(2)},
                       {code: "MN", value:(((state["Minnesota"].numJobs)/182113)*100).toFixed(2)},
                       {code: "MS", value:(((state["Mississippi"].numJobs)/60534)*100).toFixed(2)},
                       {code: "MO", value:(((state["Missouri"].numJobs)/191127)*100).toFixed(2)},
                       {code: "MT", value:(((state["Montana"].numJobs)/21849)*100).toFixed(2)},
                       {code: "NE", value:(((state["Nebraska"].numJobs)/57464)*100).toFixed(2)},
                       {code: "NV", value:(((state["Nevada"].numJobs)/91192)*100).toFixed(2)},
                       {code: "NH", value:(((state["New Hampshire"].numJobs)/43748)*100).toFixed(2)},
                       {code: "NJ", value:(((state["New Jersey"].numJobs)/228018)*100).toFixed(2)},
                       {code: "NM", value:(((state["New Mexico"].numJobs)/54813)*100).toFixed(2)},
                       {code: "NY", value:(((state["New York"].numJobs)/429657)*100).toFixed(2)},
                       {code: "NC", value:(((state["North Carolina"].numJobs)/266274)*100).toFixed(2)},
                       {code: "ND", value:(((state["North Dakota"].numJobs)/24784)*100).toFixed(2)},
                       {code: "OH", value:(((state["Ohio"].numJobs)/348061)*100).toFixed(2)},
                       {code: "OK", value:(((state["Oklahoma"].numJobs)/94583)*100).toFixed(2)},
                       {code: "OR", value:(((state["Oregon"].numJobs)/109514)*100).toFixed(2)},
                       {code: "PA", value:(((state["Pennsylvania"].numJobs)/363335)*100).toFixed(2)},
                       {code: "RI", value:(((state["Rhode Island"].numJobs)/30567)*100).toFixed(2)},
                       {code: "SC", value:(((state["South Carolina"].numJobs)/125695)*100).toFixed(2)},
                       {code: "SD", value:(((state["South Dakota"].numJobs)/23642)*100).toFixed(2)},
                       {code: "TN", value:(((state["Tennessee"].numJobs)/186745)*100).toFixed(2)},
                       {code: "TX", value:(((state["Texas"].numJobs)/678009)*100).toFixed(2)},
                       {code: "UT", value:(((state["Utah"].numJobs)/77336)*100).toFixed(2)},
                       {code: "VT", value:(((state["Vermont"].numJobs)/16424)*100).toFixed(2)},
                       {code: "VA", value:(((state["Virginia"].numJobs)/300845)*100).toFixed(2)},
                       {code: "WA", value:(((state["Washington"].numJobs)/226845)*100).toFixed(2)},
                       {code: "WV", value:(((state["West Virginia"].numJobs)/47005)*100).toFixed(2)},
                       {code: "WI", value:(((state["Wisconsin"].numJobs)/157936)*100).toFixed(2)},
                       {code: "WY", value:(((state["Wyoming"].numJobs)/18141)*100).toFixed(2)}
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
