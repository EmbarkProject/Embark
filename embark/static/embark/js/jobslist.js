function filter_jobs1(){
    var job = 'programmer'
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
                    var indeedurl = 'http://api.indeed.com/ads/apisearch?publisher=291337585868709&q=' + company + '&l=raleigh%2C+nc&sort=&radius=&format=json&st=&jt=&start=&limit=10&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Chrome&v=2'
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
                    var indeedurl = 'http://api.indeed.com/ads/apisearch?publisher=291337585868709&q=' + company + '&l=raleigh%2C+nc&sort=&radius=&format=json&st=&jt=&start=&limit=10&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Chrome&v=2'
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
                    var indeedurl = 'http://api.indeed.com/ads/apisearch?publisher=291337585868709&q=' + company + '&l=raleigh%2C+nc&sort=&radius=&format=json&st=&jt=&start=&limit=10&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Chrome&v=2'
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
