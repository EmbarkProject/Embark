function list_jobs(){
    var url = 'https://api.glassdoor.com/api/api.htm?v=1&format=json&t.p=112563&t.k=fKBkymF6I8W&action=employers&q=it&userip=192.168.43.42&useragent=Chrome/%2F4.0'
    $.getJSON(url, function (jobs) {
        console.log('things')
        var source = $('#post-template').html();
        var template = Handlebars.compile(source);
        var html = template(jobs.results);
        console.log(jobs)
        $('body').append(html)
   })
}
list_jobs()
