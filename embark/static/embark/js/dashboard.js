
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
            Highcharts.chart('chartContainer1', {
                chart: {
                    backgroundColor: '#2B303A',
                    plotBackgroundColor: null,
                    plotBorderWidth: 0,
                    plotShadow: false,
                    spacingTop: 10,
                },
                exporting: { enabled: false },
                title: {
                    text: jobTitle.toUpperCase().bold(),
                    align: 'center',
                    verticalAlign: 'top',
                    y: 50,
                    style: {
                        color: '#5299d3',
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
                            distance: -12,
                            style: {
                                fontWeight: 'bold',
                                color: 'white',
                                fontFamily: '$font',
                                fontSize: 10
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
                    size: 375,
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

$(function () {
    $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=us-population-density.json&callback=?', function (data) {
        $.each(data, function () {
            this.code = this.code.toUpperCase();
        });
        id = document.getElementById('userId').value
        var url = '/api/GetEmbarker/' + id + '/'
        $.ajax({
            url: url,
            type: 'GET',
        }).done(function(results){
        var industryList = results.industryPrefs.split(',')
        var jobid = industryList[0]
        var url = 'http://api.glassdoor.com/api/api.htm?t.p=112563&t.k=fKBkymF6I8W&userip=0.0.0.0&useragent=&format=json&v=1&action=jobs-stats&returnStates=true&admLevelRequested=1&jc=' + jobid
        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'jsonp',
        }).done(function(results){
            state = results.response.states
            console.log(state)
        Highcharts.mapChart('dashboardmap', {
            chart: {
                spacingTop: -170,
                verticalAlign: 'top',
                backgroundColor: '#2B303A',
                borderWidth: 0,
            },
            title: {
                style: {
                    color: '#5299d3',
                    fontSize:'25px'
                },
                text: 'US INDUSTRY JOB NONO',
                y: 210
            },

            legend: {
                layout: 'horizontal',
                borderWidth: 0,
                backgroundColor: '#2B303A',
                floating: true,
                verticalAlign: 'top',
                y: 220
            },

            mapNavigation: {
                enabled: true
            },

            colorAxis: {
                min: 1,
                type: 'logarithmic',
                minColor: '#ffffff',
                maxColor: '#3d1517',
                stops: [
                    [0, '#ffffff'],
                    [0.50, '#ff5a5f'],
                    [1, '#3d1517']
                ]
            },

            series: [{
                animation: {
                    duration: 1000
                },
                data: [{code: "AL", value:state["Alabama"].score},
                       {code: "AK", value:state["Alaska"].score},
                       {code: "AZ", value:state["Arizona"].score},
                       {code: "AR", value:state["Arkansas"].score},
                       {code: "CA", value:state["California"].score},
                       {code: "CO", value:state["Colorado"].score},
                       {code: "CT", value:state["Connecticut"].score},
                       {code: "DE", value:state["Delaware"].score},
                       {code: "FL", value:state["Florida"].score},
                       {code: "GA", value:state["Georgia"].score},
                       {code: "HI", value:state["Hawaii"].score},
                       {code: "ID", value:state["Idaho"].score},
                       {code: "IL", value:state["Illinois"].score},
                       {code: "IN", value:state["Indiana"].score},
                       {code: "IA", value:state["Iowa"].score},
                       {code: "KS", value:state["Kansas"].score},
                       {code: "KY", value:state["Kentucky"].score},
                       {code: "LA", value:state["Louisiana"].score},
                       {code: "ME", value:state["Maine"].score},
                       {code: "MD", value:state["Maryland"].score},
                       {code: "MA", value:state["Massachusetts"].score},
                       {code: "MI", value:state["Michigan"].score},
                       {code: "MN", value:state["Minnesota"].score},
                       {code: "MS", value:state["Mississippi"].score},
                       {code: "MO", value:state["Missouri"].score},
                       {code: "MT", value:state["Montana"].score},
                       {code: "NE", value:state["Nebraska"].score},
                       {code: "NV", value:state["Nevada"].score},
                       {code: "NH", value:state["New Hampshire"].score},
                       {code: "NJ", value:state["New Jersey"].score},
                       {code: "NM", value:state["New Mexico"].score},
                       {code: "NY", value:state["New York"].score},
                       {code: "NC", value:state["North Carolina"].score},
                       {code: "ND", value:state["North Dakota"].score},
                       {code: "OH", value:state["Ohio"].score},
                       {code: "OK", value:state["Oklahoma"].score},
                       {code: "OR", value:state["Oregon"].score},
                       {code: "PA", value:state["Pennsylvania"].score},
                       {code: "RI", value:state["Rhode Island"].score},
                       {code: "SC", value:state["South Carolina"].score},
                       {code: "SD", value:state["South Dakota"].score},
                       {code: "TN", value:state["Tennessee"].score},
                       {code: "TX", value:state["Texas"].score},
                       {code: "UT", value:state["Utah"].score},
                       {code: "VT", value:state["Vermont"].score},
                       {code: "VA", value:state["Virginia"].score},
                       {code: "WA", value:state["Virginia"].score},
                       {code: "WV", value:state["West Virginia"].score},
                       {code: "WI", value:state["Wisconsin"].score},
                       {code: "WY", value:state["Wyoming"].score}
                ],
                mapData: Highcharts.maps['countries/us/us-all'],
                joinBy: ['postal-code', 'code'],
                dataLabels: {
                    enabled: true,
                    color: '#FFFFFF',
                    format: '{point.code}'
                },
                name: 'Job Distribution',
                tooltip: {
                    pointFormat: '{point.code}: {point.value}'
                }
            }]
        });
    })});
})});
