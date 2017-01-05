function list_jobs(){
    var indeedurl = 'http://api.indeed.com/ads/apisearch?publisher=291337585868709&q=programmer&l=raleigh%2C+nc&sort=&radius=&format=json&st=&jt=&start=&limit=20&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Chrome&v=2'
    $.ajax({
    url: indeedurl,
    type: 'GET',
    }).done(function(results){
        var jobs = results
        for (var j = 0; j < (jobs.results.length); j++){
            var company = jobs.results[j].company
            var glassurl = 'http://api.glassdoor.com/api/api.htm?t.p=112563&t.k=fKBkymF6I8W&userip=0.0.0.0&useragent=&format=json&v=1&action=employers&q="' + company + '"'
            $.ajax({
            url: glassurl,
            type: 'GET',
        }).done(function(results){})}
    var source = $('#post-template').html();
    var template = Handlebars.compile(source);
    var html = template(jobs.results);
    $('#handlebars').append(html)
    })
}

list_jobs()



Handlebars.registerHelper('displayLink', function(title, url) {
    newtitle = this.jobtitle
    url = this.url
    return '<a href=' + url + '>' + newtitle + '</a>';
})
