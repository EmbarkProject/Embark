// industry1 heat map
function get_button(industry){
    var id = document.getElementById('userId').value
    $.ajax({
        url: '/api/GetEmbarker/' + id + '/',
        type: 'GET',
        datatype: 'json',
    }).done(function(results){
        var industryList = results.industryPrefs.split(',');
        var jobid = industryList[industry]
        $.ajax({
            url: '/api/Industry/' + jobid + '/',
            type: 'GET',
            datatype: 'json',
        }).done(function(results){
            var source = $('#post-template' + industry).html();
            var template = Handlebars.compile(source);
            var html = template(results);
            $('#industry' + industry).append(html);
        })})}

get_button(0)
get_button(1)
get_button(2)

function draw_maps(map, max, step) {
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
        var jobid = industryList[map]
        var url = 'http://api.glassdoor.com/api/api.htm?t.p=112563&t.k=fKBkymF6I8W&userip=0.0.0.0&useragent=&format=json&v=1&action=jobs-stats&returnStates=true&admLevelRequested=1&jc=' + jobid
        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'jsonp',
        }).done(function(results){
            state = results.response.states
        Highcharts.mapChart('container' + map, {
            chart: {
                backgroundColor: '#ededed',
                borderWidth: 0
            },
            title: {
                text: 'JOB RATIOS'
            },
            subtitle: {
                text: 'Ratio of Jobs in Industry to Total Jobs in Each State'
            },
            legend: {
                layout: 'horizontal',
                borderWidth: 0,
                backgroundColor: '#ededed',
                floating: true,
                verticalAlign: 'top',
                y: 40
            },

            mapNavigation: {
                enabled: false
            },

            colorAxis: {
                min: 0.1,
                max: 1.5,
                minColor: '#ffffff',
                maxColor: max,
                stops: [
                    [0, '#ffffff'],
                    [0.50, step],
                    [1.5, max]
                ]
            },

            series: [{
                animation: {
                    duration: 1000
                },
                data: [{code: "AL", value:(((state["Alabama"].numJobs)/122122)*100).toFixed(2)},
                       {code: "AK", value:(((state["Alaska"].numJobs)/17288)*100).toFixed(2)},
                       {code: "AZ", value:(((state["Arizona"].numJobs)/171051)*100).toFixed(2)},
                       {code: "AR", value:(((state["Arkansas"].numJobs)/77408)*100).toFixed(2)},
                       {code: "CA", value:(((state["California"].numJobs)/1084336)*100).toFixed(2)},
                       {code: "CO", value:(((state["Colorado"].numJobs)/199493)*100).toFixed(2)},
                       {code: "CT", value:(((state["Connecticut"].numJobs)/96333)*100).toFixed(2)},
                       {code: "DE", value:(((state["Delaware"].numJobs)/27981)*100).toFixed(2)},
                       {code: "FL", value:(((state["Florida"].numJobs)/467044)*100).toFixed(2)},
                       {code: "GA", value:(((state["Georgia"].numJobs)/332733)*100).toFixed(2)},
                       {code: "HI", value:(((state["Hawaii"].numJobs)/24160)*100).toFixed(2)},
                       {code: "ID", value:(((state["Idaho"].numJobs)/34423)*100).toFixed(2)},
                       {code: "IL", value:(((state["Illinois"].numJobs)/396218)*100).toFixed(2)},
                       {code: "IN", value:(((state["Indiana"].numJobs)/208510)*100).toFixed(2)},
                       {code: "IA", value:(((state["Iowa"].numJobs)/104466)*100).toFixed(2)},
                       {code: "KS", value:(((state["Kansas"].numJobs)/89006)*100).toFixed(2)},
                       {code: "KY", value:(((state["Kentucky"].numJobs)/118243)*100).toFixed(2)},
                       {code: "LA", value:(((state["Louisiana"].numJobs)/101586)*100).toFixed(2)},
                       {code: "ME", value:(((state["Maine"].numJobs)/33455)*100).toFixed(2)},
                       {code: "MD", value:(((state["Maryland"].numJobs)/200772)*100).toFixed(2)},
                       {code: "MA", value:(((state["Massachusetts"].numJobs)/265012)*100).toFixed(2)},
                       {code: "MI", value:(((state["Michigan"].numJobs)/226374)*100).toFixed(2)},
                       {code: "MN", value:(((state["Minnesota"].numJobs)/182113)*100).toFixed(2)},
                       {code: "MS", value:(((state["Mississippi"].numJobs)/60534)*100).toFixed(2)},
                       {code: "MO", value:(((state["Missouri"].numJobs)/191127)*100).toFixed(2)},
                       {code: "MT", value:(((state["Montana"].numJobs)/21849)*100).toFixed(2)},
                       {code: "NE", value:(((state["Nebraska"].numJobs)/57464)*100).toFixed(2)},
                       {code: "NV", value:(((state["Nevada"].numJobs)/91192)*100).toFixed(2)},
                       {code: "NH", value:(((state["New Hampshire"].numJobs)/43748)*100).toFixed(2)},
                       {code: "NJ", value:(((state["New Jersey"].numJobs)/228018)*100).toFixed(2)},
                       {code: "NM", value:(((state["New Mexico"].numJobs)/54813)*100).toFixed(2)},
                       {code: "NY", value:(((state["New York"].numJobs)/429657)*100).toFixed(2)},
                       {code: "NC", value:(((state["North Carolina"].numJobs)/266274)*100).toFixed(2)},
                       {code: "ND", value:(((state["North Dakota"].numJobs)/24784)*100).toFixed(2)},
                       {code: "OH", value:(((state["Ohio"].numJobs)/348061)*100).toFixed(2)},
                       {code: "OK", value:(((state["Oklahoma"].numJobs)/94583)*100).toFixed(2)},
                       {code: "OR", value:(((state["Oregon"].numJobs)/109514)*100).toFixed(2)},
                       {code: "PA", value:(((state["Pennsylvania"].numJobs)/363335)*100).toFixed(2)},
                       {code: "RI", value:(((state["Rhode Island"].numJobs)/30567)*100).toFixed(2)},
                       {code: "SC", value:(((state["South Carolina"].numJobs)/125695)*100).toFixed(2)},
                       {code: "SD", value:(((state["South Dakota"].numJobs)/23642)*100).toFixed(2)},
                       {code: "TN", value:(((state["Tennessee"].numJobs)/186745)*100).toFixed(2)},
                       {code: "TX", value:(((state["Texas"].numJobs)/678009)*100).toFixed(2)},
                       {code: "UT", value:(((state["Utah"].numJobs)/77336)*100).toFixed(2)},
                       {code: "VT", value:(((state["Vermont"].numJobs)/16424)*100).toFixed(2)},
                       {code: "VA", value:(((state["Virginia"].numJobs)/300845)*100).toFixed(2)},
                       {code: "WA", value:(((state["Washington"].numJobs)/226845)*100).toFixed(2)},
                       {code: "WV", value:(((state["West Virginia"].numJobs)/47005)*100).toFixed(2)},
                       {code: "WI", value:(((state["Wisconsin"].numJobs)/157936)*100).toFixed(2)},
                       {code: "WY", value:(((state["Wyoming"].numJobs)/18141)*100).toFixed(2)}
                ],
                mapData: Highcharts.maps['countries/us/us-all'],
                joinBy: ['postal-code', 'code'],
                dataLabels: {
                    enabled: true,
                    color: '#FFFFFF',
                    format: '{point.code}'
                },
                name: 'State',
                tooltip: {
                    pointFormat: '{point.code}: {point.value}%'
                }
            }]
        });
    })});
})};

draw_maps(0, '#3d1517', '#ff5a5f')
draw_maps(1, '#01141E', '#5299D3')
draw_maps(2, '#0d0f11', '#767676')

$(document).ready(function(event){
  $("#container1").hide();
  $("#container2").hide();
  $(".industryButtonCoral").click(function() {
    $("#container0").show();
    $("#container1").hide();
    $("#container2").hide();
});

$(".industryButtonSky").click(function() {
    $("#container1").show();
    $("#container0").hide();
    $("#container2").hide();
  });
  $(".industryButtonCharcoal").click(function() {
    $("#container2").show();
    $("#container0").hide();
    $("#container1").hide();

  });
});
