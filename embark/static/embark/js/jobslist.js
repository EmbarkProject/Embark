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
            var careerInput = cultureList[0]
            var cultureRating = ratingParse.cultureAndValuesRating
            var cultureInput = cultureList[1]
            var leadershipRating = ratingParse.seniorLeadershipRating
            var leadershipInput = cultureList[2]
            var payRating = ratingParse.compensationAndBenefitsRating
            var payInput = cultureList[3]
            var workLifeRating = ratingParse.workLifeBalanceRating
            var workLifeInput = cultureList[4]
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
        for (var j = 0; j < results.response.employers.length; j++){
            var ratingParse = results.response.employers[j]
            var careerRating = ratingParse.careerOpportunitiesRating
            var careerInput = embarker.culturePrefs[0]
            var cultureRating = ratingParse.cultureAndValuesRating
            var cultureInput = embarker.culturePrefs[1]
            var leadershipRating = ratingParse.seniorLeadershipRating
            var leadershipInput = embarker.culturePrefs[2]
            var payRating = ratingParse.compensationAndBenefitsRating
            var payInput = embarker.culturePrefs[3]
            var workLifeRating = ratingParse.workLifeBalanceRating
            var workLifeInput = embarker.culturePrefs[4]
            if (careerRating >= careerInput &&
                cultureRating >= cultureInput &&
                leadershipRating >= leadershipInput &&
                payRating >= payInput &&
                workLifeRating >= workLifeInput){
                    var company = ratingParse.name
                    var searchcity = locationList[0][city];
                    var searchstate = locationList[0][state];
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
    var glassurl = 'https://api.glassdoor.com/api/api.htm?t.p=112563&t.k=fKBkymF6I8W&userip=0.0.0.0&useragent=&format=json&v=1&ps=100&action=employers&q=' + job
    $.ajax({
    url: glassurl,
    type: 'GET',
    dataType: 'jsonp',
    }).done(function(results){
        for (var j = 0; j < results.response.employers.length; j++){
            var ratingParse = results.response.employers[j]
            var careerRating = ratingParse.careerOpportunitiesRating
            var careerInput = embarker.culturePrefs[0]
            var cultureRating = ratingParse.cultureAndValuesRating
            var cultureInput = embarker.culturePrefs[1]
            var leadershipRating = ratingParse.seniorLeadershipRating
            var leadershipInput = embarker.culturePrefs[2]
            var payRating = ratingParse.compensationAndBenefitsRating
            var payInput = embarker.culturePrefs[3]
            var workLifeRating = ratingParse.workLifeBalanceRating
            var workLifeInput = embarker.culturePrefs[4]
            if (careerRating >= careerInput &&
                cultureRating >= cultureInput &&
                leadershipRating >= leadershipInput &&
                payRating >= payInput &&
                workLifeRating >= workLifeInput){
                    var company = ratingParse.name
                    var searchcity = locationList[0][city];
                    var searchstate = locationList[0][state];
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

$("#location1").click(function() {
    console.log('location1')
    $("#col1").html("");
    $("#col2").html("");
    $("#col3").html("");
    filter_headers1()
    filter_headers2()
    filter_headers3()
    filter_jobs1(0,1)
    filter_jobs2(0,1)
    filter_jobs3(0,1)
})

$("#location2").click(function() {
    console.log('location2')
    $("#col1").html("");
    $("#col2").html("");
    $("#col3").html("");
    filter_headers1()
    filter_headers2()
    filter_headers3()
    filter_jobs1(2,3)
    filter_jobs2(2,3)
    filter_jobs3(2,3)
})

$("#location3").click(function() {
    console.log('location3')
    $("#col1").html("");
    $("#col2").html("");
    $("#col3").html("");
    filter_headers1()
    filter_headers2()
    filter_headers3()
    filter_jobs1(4,5)
    filter_jobs2(4,5)
    filter_jobs3(4,5)
})

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
