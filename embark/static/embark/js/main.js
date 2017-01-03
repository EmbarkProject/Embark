function list_jobs(){
    var url = 'https://api.glassdoor.com/api/api.htm?v=1&format=json&t.p=112563&t.k=fKBkymF6I8W&action=employers&q=it&userip=192.168.43.42&useragent=Chrome/%2F4.0'
    $.getJSON(url, function (jobs) {
        console.log(jobs.response.employers)
        var source = $('#post-template').html();
        var template = Handlebars.compile(source);
        var html = template(jobs.response.employers);
        console.log(html)
        $('#handlebars').append(html)
   })
}
list_jobs()


http://api.glassdoor.com/api/api.htm?t.p=5317&t.k=n07aR34Lk3Y&userip=0.0.0.0&useragent=&format=json&v=1&action=jobs-prog&countryId=1&jobTitle=cashier
