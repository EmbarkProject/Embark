function filter_jobs1(){
    var userid = 2
    $.ajax({
        url: '/api/Embarker',
        type: 'GET',
        datatype: 'jsonp',
    }).done(function(results){
    var embarker = results.results[userid-1]
    var job = industry[results.results[userid-1].industryPrefs[0]-1]
    console.log(embarker)
    var glassurl = 'http://api.glassdoor.com/api/api.htm?t.p=112563&t.k=fKBkymF6I8W&userip=0.0.0.0&useragent=&format=json&v=1&ps=100&action=employers&q=' + job
    $.ajax({
    url: glassurl,
    type: 'GET',
    datatype: 'jsonp',
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
                    var indeedurl = 'http://api.indeed.com/ads/apisearch?publisher=291337585868709&q=' + company + '&l=raleigh%2C+nc&sort=&radius=&callback=?&format=json&st=&jt=&start=&limit=10&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Chrome&v=2'
                    $.ajax({
                        url: indeedurl,
                        type: 'GET',
                        datatype: 'jsonp',
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
function filter_jobs2(){
    var job = 'teacher'
    var glassurl = 'http://api.glassdoor.com/api/api.htm?t.p=112563&t.k=fKBkymF6I8W&userip=0.0.0.0&useragent=&format=json&v=1&ps=100&action=employers&q=' + job
    $.ajax({
    url: glassurl,
    type: 'GET',
    datatype: 'jsonp',
    }).done(function(results){
        for (var j = 0; j < results.response.employers.length; j++){
            var ratingParse = results.response.employers[j]
            var careerRating = ratingParse.careerOpportunitiesRating
            var careerInput = 3.0
            var cultureRating = ratingParse.cultureAndValuesRating
            var cultureInput = 3.0
            var leadershipRating = ratingParse.seniorLeadershipRating
            var leadershipInput = 3.0
            var payRating = ratingParse.compensationAndBenefitsRating
            var payInput = 3.0
            var workLifeRating = ratingParse.workLifeBalanceRating
            var workLifeInput = 3.0
            if (careerRating >= careerInput &&
                cultureRating >= cultureInput &&
                leadershipRating >= leadershipInput &&
                payRating >= payInput &&
                workLifeRating >= workLifeInput){
                    var company = ratingParse.name
                    var indeedurl = 'http://api.indeed.com/ads/apisearch?publisher=291337585868709&q=' + company + '&l=raleigh%2C+nc&sort=&radius=&format=json&st=&jt=&start=&limit=10&fromage=&callback=?&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Chrome&v=2'
                    $.ajax({
                        url: indeedurl,
                        type: 'GET',
                        datatype: 'jsonp',
                    }).done(function(results){
                        var source = $('#post-template').html();
                        var template = Handlebars.compile(source);
                        var html = template(results.results);
                        $('#col2').append(html)
                    })
                }
        }
    })
}

function filter_jobs3(){
    var job = 'dentist'
    var glassurl = 'http://api.glassdoor.com/api/api.htm?t.p=112563&t.k=fKBkymF6I8W&userip=0.0.0.0&useragent=&format=json&v=1&ps=100&action=employers&q=' + job
    $.ajax({
    url: glassurl,
    type: 'GET',
    datatype: 'jsonp',
    }).done(function(results){
        for (var j = 0; j < results.response.employers.length; j++){
            var ratingParse = results.response.employers[j]
            var careerRating = ratingParse.careerOpportunitiesRating
            var careerInput = 3.0
            var cultureRating = ratingParse.cultureAndValuesRating
            var cultureInput = 3.0
            var leadershipRating = ratingParse.seniorLeadershipRating
            var leadershipInput = 3.0
            var payRating = ratingParse.compensationAndBenefitsRating
            var payInput = 3.0
            var workLifeRating = ratingParse.workLifeBalanceRating
            var workLifeInput = 3.0
            if (careerRating >= careerInput &&
                cultureRating >= cultureInput &&
                leadershipRating >= leadershipInput &&
                payRating >= payInput &&
                workLifeRating >= workLifeInput){
                    var company = ratingParse.name
                    var indeedurl = 'http://api.indeed.com/ads/apisearch?publisher=291337585868709&q=' + company + '&l=raleigh%2C+nc&sort=&radius=&callback=?&format=json&st=&jt=&start=&limit=10&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Chrome&v=2'
                    $.ajax({
                        url: indeedurl,
                        type: 'GET',
                        datatype: 'jsonp',
                    }).done(function(results){
                        var source = $('#post-template').html();
                        var template = Handlebars.compile(source);
                        var html = template(results.results);
                        $('#col3').append(html)
                    })
                }
        }
    })
}


filter_jobs1()
filter_jobs2()
filter_jobs3()

Handlebars.registerHelper('displayLink', function(title, url) {
    newtitle = this.jobtitle
    url = this.url
    return '<a href=' + url + '>' + newtitle + '</a>';
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
