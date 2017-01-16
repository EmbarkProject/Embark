function filter_headers1(){
    var id = document.getElementById('userId').value
    $.ajax({
        url: '/api/GetEmbarker/' + id + '/',
        type: 'GET',
        datatype: 'json',
    }).done(function(results){
        var industryList = results.industryPrefs.split(',');
        var jobid = industryList[0]
        console.log(jobid)
        $.ajax({
            url: '/api/Industry/' + jobid + '/',
            type: 'GET',
            datatype: 'json',
        }).done(function(results){
            var resourceList = results.resources.split(',');
            console.log(results)
            var source = $('#post-template1').html();
            var template = Handlebars.compile(source);
            var html = template(results);
            console.log(resourceList[1])
            $('#resource1').append(html)
            $('#link1').html('<a href="' + resourceList[0] + '"target="_blank"><p>' + resourceList[1] + '</p></a>')
            $('#link2').html('<a href="' + resourceList[2] + '"target="_blank"><p>' + resourceList[3] + '</p></a>')
            $('#link3').html('<a href="' + resourceList[4] + '"target="_blank"><p>' + resourceList[5] + '</p></a>')
            $("#button1").click(function(){$("#titleLinkToggle1").slideToggle("slow")});
        })
    })
}

filter_headers1()

function filter_headers2(){
    var id = document.getElementById('userId').value
    $.ajax({
        url: '/api/GetEmbarker/' + id + '/',
        type: 'GET',
        datatype: 'json',
    }).done(function(results){
        var industryList = results.industryPrefs.split(',');
        var jobid = industryList[1]
        $.ajax({
            url: '/api/Industry/' + jobid + '/',
            type: 'GET',
            datatype: 'json',
        }).done(function(results){
            var resourceList = results.resources.split(',');
            console.log(resourceList)
            var source = $('#post-template2').html();
            var template = Handlebars.compile(source);
            var html = template(results);
            console.log(resourceList[1])
            $('#resource2').prepend(html)
            $('#link4').html('<a href="' + resourceList[0] + '"target="_blank"><p>' + resourceList[1] + '</p></a>')
            $('#link5').html('<a href="' + resourceList[2] + '"target="_blank"><p>' + resourceList[3] + '</p></a>')
            $('#link6').html('<a href="' + resourceList[4] + '"target="_blank"><p>' + resourceList[5] + '</p></a>')
            $("#button2").click(function(){$("#titleLinkToggle2").slideToggle("slow")});
        })
    })
}

filter_headers2()

function filter_headers3(){
    var id = document.getElementById('userId').value
    $.ajax({
        url: '/api/GetEmbarker/' + id + '/',
        type: 'GET',
        datatype: 'json',
    }).done(function(results){
        var industryList = results.industryPrefs.split(',');
        var jobid = industryList[2]
        $.ajax({
            url: '/api/Industry/' + jobid + '/',
            type: 'GET',
            datatype: 'json',
        }).done(function(results){
            var resourceList = results.resources.split(',');
            console.log(resourceList)
            var source = $('#post-template3').html();
            var template = Handlebars.compile(source);
            var html = template(results);
            console.log(resourceList[1])
            $('#resource3').append(html)
            $('#link7').prepend('<a href="' + resourceList[0] + '"target="_blank"><p>' + resourceList[1] + '</p></a>')
            $('#link8').prepend('<a href="' + resourceList[2] + '"target="_blank"><p>' + resourceList[3] + '</p></a>')
            $('#link9').prepend('<a href="' + resourceList[4] + '"target="_blank"><p>' + resourceList[5] + '</p></a>')
            $("#button3").click(function(){$("#titleLinkToggle3").slideToggle("slow")});
        })
    })
}

filter_headers3()

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
