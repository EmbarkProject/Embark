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
  $( "#button1" ).click(function() {
    $( "#titleLinkToggle1" ).slideToggle( "slow", function() {
    });
  });
  $( "#button2" ).click(function() {
    $( "#titleLinkToggle2" ).slideToggle( "slow", function() {
    });
  });
  $( "#button3" ).click(function() {
    $( "#titleLinkToggle3" ).slideToggle( "slow", function() {
    });
  });
});
