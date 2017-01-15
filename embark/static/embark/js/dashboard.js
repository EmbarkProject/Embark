
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
            Highcharts.chart('chartContainer', {
                chart: {
                    backgroundColor: '#ededed',
                    plotBackgroundColor: null,
                    plotBorderWidth: 0,
                    plotShadow: false
                },
                exporting: { enabled: false },
                title: {
                    text: jobTitle.toUpperCase().bold(),
                    align: 'center',
                    verticalAlign: 'top',
                    y: 300,
                    style: {
                        color: '#2B303A',
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
                            distance: 0,
                            style: {
                                fontWeight: 'bold',
                                color: '#2B303A',
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
                    name: 'Distribution',
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



function js_test() {
    console.log("JS is linked correctly!")
}
js_test()
