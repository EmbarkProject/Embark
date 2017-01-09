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

$(function () {
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
                ['title1',   10.38],
                ['title2',       56.33],
                ['title3', 24.03],
                ['title4',    4.77],
                ['title5',     0.91],
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
});



function js_test() {
    console.log("JS is linked correctly!")
}
js_test()

$("#submit").click(list_jobs)
