function list_jobs(){
    var search = document.getElementById("searchInput").value
    var url = 'http://api.glassdoor.com/api/api.htm?t.p=112563&t.k=fKBkymF6I8W&userip=0.0.0.0&useragent=&format=json&v=1&action=jobs-prog&countryId=1&jobTitle=' + search
    $.getJSON(url, function (jobs) {
        console.log(jobs.response.results)
        var source = $('#post-template').html();
        var template = Handlebars.compile(source);
        var html = template(jobs.response.results);
        console.log(html)
        $('#handlebars').append(html)
   })
}


function js_test() {
    console.log("JS is linked correctly!")
}
js_test()

$("#submit").click(list_jobs)
