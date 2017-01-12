
function list_jobs(){
    var search = document.getElementById("searchInput").value
    var url = 'http://api.glassdoor.com/api/api.htm?t.p=112563&t.k=fKBkymF6I8W&userip=0.0.0.0&useragent=&format=jsonp&v=1&action=jobs-prog&countryId=1&jobTitle=' + search
    $.getJSON(url, function (jobs) {
        console.log(jobs.response.results)
        var source = $('#post-template').html();
        var template = Handlebars.compile(source);
        var html = template(jobs.response.results);
        console.log(html)
        $('#handlebars').append(html)
   })
}

$(function () {
    id = document.getElementById('userId').value
    var url = '/api/GetEmbarker/' + id + '/'
    $.ajax({
        url: url,
        type: 'GET',
    }).done(function(results){
        console.log(results)
        var jobTitle = results.jobTitle
        var glassurl = 'http://api.glassdoor.com/api/api.htm?t.p=112563&t.k=fKBkymF6I8W&userip=0.0.0.0&useragent=&format=json&v=1&action=jobs-prog&countryId=1&jobTitle=' + jobTitle
        $.getJSON(glassurl, function (jobs) {
            var jobs = jobs.response.results
            Highcharts.chart('chartContainer', {
                chart: {
                    backgroundColor: '#ededed',
                    plotBackgroundColor: null,
                    plotBorderWidth: 0,
                    plotShadow: false
                },
                title: {
                    text: '',
                    align: 'center',
                    verticalAlign: 'middle',
                    y: 40
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                    pie: {
                        dataLabels: {
                            borderWidth: 0,
                            enabled: true,
                            distance: 0,
                            style: {
                                fontWeight: 'bold',
                                color: '$charcoal',
                                fontFamily: '$font',
                                fontSize: 15
                            }
                        },
                        startAngle: -90,
                        endAngle: 90,
                        center: ['50%', '75%']
                    }
                },
                series: [{
                    type: 'pie',
                    name: 'Browser share',
                    innerSize: '50%',
                    data: [
                        [jobs[0].nextJobTitle, jobs[0].frequencyPercent],
                        [jobs[1].nextJobTitle, jobs[1].frequencyPercent],
                        [jobs[2].nextJobTitle, jobs[2].frequencyPercent],
                        [jobs[3].nextJobTitle, jobs[3].frequencyPercent],
                        [jobs[4].nextJobTitle, jobs[4].frequencyPercent],
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



$(document).ready(function() {
  $('input[name=titleIndustry]').change(function(){
    $('#titleArtResources').toggle(this.value == '1');
    $('#titleBeautyResources').toggle(this.value == '2');
    $('#titleIndustryResources').toggle(this.value == '3');
    $('#titleEducationResources').toggle(this.value == '3');
    $('#titleEducationResources').toggle(this.value == '3');
    $('#titleEducationResources').toggle(this.value == '3');
    $('#titleEducationResources').toggle(this.value == '3');
    $('#titleEducationResources').toggle(this.value == '3');
    $('#titleEducationResources').toggle(this.value == '3');
    $('#titleEducationResources').toggle(this.value == '3');
    $('#titleEducationResources').toggle(this.value == '3');
    $('#titleEducationResources').toggle(this.value == '3');
    $('#titleEducationResources').toggle(this.value == '3');
    $('#titleEducationResources').toggle(this.value == '3');
    $('#titleEducationResources').toggle(this.value == '3');
    $('#titleEducationResources').toggle(this.value == '3');
    $('#titleEducationResources').toggle(this.value == '3');
    $('#titleEducationResources').toggle(this.value == '3');
    $('#titleEducationResources').toggle(this.value == '3');
    $('#titleEducationResources').toggle(this.value == '3');
    $('#titleEducationResources').toggle(this.value == '3');
    $('#titleEducationResources').toggle(this.value == '3');
    $('#titleEducationResources').toggle(this.value == '3');
    $('#titleEducationResources').toggle(this.value == '3');
    $('#titleEducationResources').toggle(this.value == '3');
    $('#titleEducationResources').toggle(this.value == '3');
    $('#titleEducationResources').toggle(this.value == '3');
    $('#titleEducationResources').toggle(this.value == '3');
    $('#titleEducationResources').toggle(this.value == '3');
    $('#titleEducationResources').toggle(this.value == '3');
    $('#titleEducationResources').toggle(this.value == '3');
    $('#titleEducationResources').toggle(this.value == '3');
  });
});





function js_test() {
    console.log("JS is linked correctly!")
}
js_test()

$("#submit").click(list_jobs)
