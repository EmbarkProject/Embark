// industry1 heat map
function get_button1(){
    var id = document.getElementById('userId').value
    $.ajax({
        url: '/api/GetEmbarker/' + id + '/',
        type: 'GET',
        datatype: 'json',
    }).done(function(results){
        var industryList = results.industryPrefs.split(',');
        var jobid = industryList[0]
        console.log(results)
        $.ajax({
            url: '/api/Industry/' + jobid + '/',
            type: 'GET',
            datatype: 'json',
        }).done(function(results){
            var source = $('#post-template1').html();
            var template = Handlebars.compile(source);
            var html = template(results);
            $('#industry1').append(html);
            console.log(html)
        })})}
function get_button2(){
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
            var source = $('#post-template2').html();
            var template = Handlebars.compile(source);
            var html = template(results);
            $('#industry2').append(html);
        })})}
function get_button3(){
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
            var source = $('#post-template3').html();
            var template = Handlebars.compile(source);
            var html = template(results);
            $('#industry3').append(html);
        })})}



get_button1()
get_button2()
get_button3()
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
        Highcharts.mapChart('container1', {
            chart: {
                backgroundColor: '#ededed',
                borderWidth: 0
            },
            title: {
                text: 'US industry job density (/km²)'
            },

            legend: {
                layout: 'horizontal',
                borderWidth: 0,
                backgroundColor: '#ededed',
                floating: true,
                verticalAlign: 'top',
                y: 25
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
                    [0.60, '#ff5a5f'],
                    [1, '#3d1517']
                ]
            },

            series: [{
                animation: {
                    duration: 1000
                },
                data: [{code: "AL", value:state["Alabama"].numJobs},
                       {code: "AK", value:state["Alaska"].numJobs},
                       {code: "AZ", value:state["Arizona"].numJobs},
                       {code: "AR", value:state["Arkansas"].numJobs},
                       {code: "CA", value:state["California"].numJobs},
                       {code: "CO", value:state["Colorado"].numJobs},
                       {code: "CT", value:state["Connecticut"].numJobs},
                       {code: "DE", value:state["Delaware"].numJobs},
                       {code: "FL", value:state["Florida"].numJobs},
                       {code: "GA", value:state["Georgia"].numJobs},
                       {code: "HI", value:state["Hawaii"].numJobs},
                       {code: "ID", value:state["Idaho"].numJobs},
                       {code: "IL", value:state["Illinois"].numJobs},
                       {code: "IN", value:state["Indiana"].numJobs},
                       {code: "IA", value:state["Iowa"].numJobs},
                       {code: "KS", value:state["Kansas"].numJobs},
                       {code: "KY", value:state["Kentucky"].numJobs},
                       {code: "LA", value:state["Louisiana"].numJobs},
                       {code: "ME", value:state["Maine"].numJobs},
                       {code: "MD", value:state["Maryland"].numJobs},
                       {code: "MA", value:state["Massachusetts"].numJobs},
                       {code: "MI", value:state["Michigan"].numJobs},
                       {code: "MN", value:state["Minnesota"].numJobs},
                       {code: "MS", value:state["Mississippi"].numJobs},
                       {code: "MO", value:state["Missouri"].numJobs},
                       {code: "MT", value:state["Montana"].numJobs},
                       {code: "NE", value:state["Nebraska"].numJobs},
                       {code: "NV", value:state["Nevada"].numJobs},
                       {code: "NH", value:state["New Hampshire"].numJobs},
                       {code: "NJ", value:state["New Jersey"].numJobs},
                       {code: "NM", value:state["New Mexico"].numJobs},
                       {code: "NY", value:state["New York"].numJobs},
                       {code: "NC", value:state["North Carolina"].numJobs},
                       {code: "ND", value:state["North Dakota"].numJobs},
                       {code: "OH", value:state["Ohio"].numJobs},
                       {code: "OK", value:state["Oklahoma"].numJobs},
                       {code: "OR", value:state["Oregon"].numJobs},
                       {code: "PA", value:state["Pennsylvania"].numJobs},
                       {code: "RI", value:state["Rhode Island"].numJobs},
                       {code: "SC", value:state["South Carolina"].numJobs},
                       {code: "SD", value:state["South Dakota"].numJobs},
                       {code: "TN", value:state["Tennessee"].numJobs},
                       {code: "TX", value:state["Texas"].numJobs},
                       {code: "UT", value:state["Utah"].numJobs},
                       {code: "VT", value:state["Vermont"].numJobs},
                       {code: "VA", value:state["Virginia"].numJobs},
                       {code: "WA", value:state["Virginia"].numJobs},
                       {code: "WV", value:state["West Virginia"].numJobs},
                       {code: "WI", value:state["Wisconsin"].numJobs},
                       {code: "WY", value:state["Wyoming"].numJobs}
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
                    pointFormat: '{point.code}: {point.value}/km²'
                }
            }]
        });
    })});
})});

// industry2 heat map
$(function () {

    $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=us-population-density.json&callback=?', function (data) {

        // Make codes uppercase to match the map data
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
        var jobid = industryList[1]
        var url = 'http://api.glassdoor.com/api/api.htm?t.p=112563&t.k=fKBkymF6I8W&userip=0.0.0.0&useragent=&format=json&v=1&action=jobs-stats&returnStates=true&admLevelRequested=1&jc=' + jobid
        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'jsonp',
        }).done(function(results){
            state = results.response.states
        // Instanciate the map
        Highcharts.mapChart('container2', {

            chart: {
                backgroundColor: '#ededed',
                borderWidth: 0
            },

            title: {
                text: 'US industry job density (/km²)'
            },

            legend: {
                layout: 'horizontal',
                borderWidth: 0,
                backgroundColor: '#ededed',
                floating: true,
                verticalAlign: 'top',
                y: 25
            },

            mapNavigation: {
                enabled: true
            },

            colorAxis: {
                min: 1,
                type: 'logarithmic',
                minColor: '#ffffff',
                maxColor: '#01141E',
                stops: [
                    [0, '#ffffff'],
                    [0.67, '#5299D3'],
                    [1, '#01141E']
                ]
            },

            series: [{
                animation: {
                    duration: 1000
                },
                data: [{code: "AL", value:state["Alabama"].numJobs},
                       {code: "AK", value:state["Alaska"].numJobs},
                       {code: "AZ", value:state["Arizona"].numJobs},
                       {code: "AR", value:state["Arkansas"].numJobs},
                       {code: "CA", value:state["California"].numJobs},
                       {code: "CO", value:state["Colorado"].numJobs},
                       {code: "CT", value:state["Connecticut"].numJobs},
                       {code: "DE", value:state["Delaware"].numJobs},
                       {code: "FL", value:state["Florida"].numJobs},
                       {code: "GA", value:state["Georgia"].numJobs},
                       {code: "HI", value:state["Hawaii"].numJobs},
                       {code: "ID", value:state["Idaho"].numJobs},
                       {code: "IL", value:state["Illinois"].numJobs},
                       {code: "IN", value:state["Indiana"].numJobs},
                       {code: "IA", value:state["Iowa"].numJobs},
                       {code: "KS", value:state["Kansas"].numJobs},
                       {code: "KY", value:state["Kentucky"].numJobs},
                       {code: "LA", value:state["Louisiana"].numJobs},
                       {code: "ME", value:state["Maine"].numJobs},
                       {code: "MD", value:state["Maryland"].numJobs},
                       {code: "MA", value:state["Massachusetts"].numJobs},
                       {code: "MI", value:state["Michigan"].numJobs},
                       {code: "MN", value:state["Minnesota"].numJobs},
                       {code: "MS", value:state["Mississippi"].numJobs},
                       {code: "MO", value:state["Missouri"].numJobs},
                       {code: "MT", value:state["Montana"].numJobs},
                       {code: "NE", value:state["Nebraska"].numJobs},
                       {code: "NV", value:state["Nevada"].numJobs},
                       {code: "NH", value:state["New Hampshire"].numJobs},
                       {code: "NJ", value:state["New Jersey"].numJobs},
                       {code: "NM", value:state["New Mexico"].numJobs},
                       {code: "NY", value:state["New York"].numJobs},
                       {code: "NC", value:state["North Carolina"].numJobs},
                       {code: "ND", value:state["North Dakota"].numJobs},
                       {code: "OH", value:state["Ohio"].numJobs},
                       {code: "OK", value:state["Oklahoma"].numJobs},
                       {code: "OR", value:state["Oregon"].numJobs},
                       {code: "PA", value:state["Pennsylvania"].numJobs},
                       {code: "RI", value:state["Rhode Island"].numJobs},
                       {code: "SC", value:state["South Carolina"].numJobs},
                       {code: "SD", value:state["South Dakota"].numJobs},
                       {code: "TN", value:state["Tennessee"].numJobs},
                       {code: "TX", value:state["Texas"].numJobs},
                       {code: "UT", value:state["Utah"].numJobs},
                       {code: "VT", value:state["Vermont"].numJobs},
                       {code: "VA", value:state["Virginia"].numJobs},
                       {code: "WA", value:state["Virginia"].numJobs},
                       {code: "WV", value:state["West Virginia"].numJobs},
                       {code: "WI", value:state["Wisconsin"].numJobs},
                       {code: "WY", value:state["Wyoming"].numJobs}
                ],
                mapData: Highcharts.maps['countries/us/us-all'],
                joinBy: ['postal-code', 'code'],
                dataLabels: {
                    enabled: true,
                    color: '#FFFFFF',
                    format: '{point.code}'

                },
                name: 'Population density',
                tooltip: {
                    pointFormat: '{point.code}: {point.value}/km²'
                }
            }]
        });
    })});
})});

// industry3 heat map
$(function () {

    $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=us-population-density.json&callback=?', function (data) {

        // Make codes uppercase to match the map data
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
        var jobid = industryList[2]
        var url = 'http://api.glassdoor.com/api/api.htm?t.p=112563&t.k=fKBkymF6I8W&userip=0.0.0.0&useragent=&format=json&v=1&action=jobs-stats&returnStates=true&admLevelRequested=1&jc=' + jobid
        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'jsonp',
        }).done(function(results){
            state = results.response.states
        // Instanciate the map
        Highcharts.mapChart('container3', {

            chart: {
                backgroundColor: '#ededed',
                borderWidth: 0
            },

            title: {
                text: 'US industry job density (/km²)'
            },

            legend: {
                layout: 'horizontal',
                borderWidth: 0,
                backgroundColor: '#ededed',
                floating: true,
                verticalAlign: 'top',
                y: 25
            },

            mapNavigation: {
                enabled: true
            },

            colorAxis: {
                min: 1,
                type: 'logarithmic',
                minColor: '#ffffff',
                maxColor: '#2B303A',
                stops: [
                    [0, '#ffffff'],
                    [0.67, '#767676'],
                    [1, '#2B303A']
                ]
            },

            series: [{
                animation: {
                    duration: 1000
                },
                data: [{code: "AL", value:state["Alabama"].numJobs},
                       {code: "AK", value:state["Alaska"].numJobs},
                       {code: "AZ", value:state["Arizona"].numJobs},
                       {code: "AR", value:state["Arkansas"].numJobs},
                       {code: "CA", value:state["California"].numJobs},
                       {code: "CO", value:state["Colorado"].numJobs},
                       {code: "CT", value:state["Connecticut"].numJobs},
                       {code: "DE", value:state["Delaware"].numJobs},
                       {code: "FL", value:state["Florida"].numJobs},
                       {code: "GA", value:state["Georgia"].numJobs},
                       {code: "HI", value:state["Hawaii"].numJobs},
                       {code: "ID", value:state["Idaho"].numJobs},
                       {code: "IL", value:state["Illinois"].numJobs},
                       {code: "IN", value:state["Indiana"].numJobs},
                       {code: "IA", value:state["Iowa"].numJobs},
                       {code: "KS", value:state["Kansas"].numJobs},
                       {code: "KY", value:state["Kentucky"].numJobs},
                       {code: "LA", value:state["Louisiana"].numJobs},
                       {code: "ME", value:state["Maine"].numJobs},
                       {code: "MD", value:state["Maryland"].numJobs},
                       {code: "MA", value:state["Massachusetts"].numJobs},
                       {code: "MI", value:state["Michigan"].numJobs},
                       {code: "MN", value:state["Minnesota"].numJobs},
                       {code: "MS", value:state["Mississippi"].numJobs},
                       {code: "MO", value:state["Missouri"].numJobs},
                       {code: "MT", value:state["Montana"].numJobs},
                       {code: "NE", value:state["Nebraska"].numJobs},
                       {code: "NV", value:state["Nevada"].numJobs},
                       {code: "NH", value:state["New Hampshire"].numJobs},
                       {code: "NJ", value:state["New Jersey"].numJobs},
                       {code: "NM", value:state["New Mexico"].numJobs},
                       {code: "NY", value:state["New York"].numJobs},
                       {code: "NC", value:state["North Carolina"].numJobs},
                       {code: "ND", value:state["North Dakota"].numJobs},
                       {code: "OH", value:state["Ohio"].numJobs},
                       {code: "OK", value:state["Oklahoma"].numJobs},
                       {code: "OR", value:state["Oregon"].numJobs},
                       {code: "PA", value:state["Pennsylvania"].numJobs},
                       {code: "RI", value:state["Rhode Island"].numJobs},
                       {code: "SC", value:state["South Carolina"].numJobs},
                       {code: "SD", value:state["South Dakota"].numJobs},
                       {code: "TN", value:state["Tennessee"].numJobs},
                       {code: "TX", value:state["Texas"].numJobs},
                       {code: "UT", value:state["Utah"].numJobs},
                       {code: "VT", value:state["Vermont"].numJobs},
                       {code: "VA", value:state["Virginia"].numJobs},
                       {code: "WA", value:state["Virginia"].numJobs},
                       {code: "WV", value:state["West Virginia"].numJobs},
                       {code: "WI", value:state["Wisconsin"].numJobs},
                       {code: "WY", value:state["Wyoming"].numJobs}
                ],
                mapData: Highcharts.maps['countries/us/us-all'],
                joinBy: ['postal-code', 'code'],
                dataLabels: {
                    enabled: true,
                    color: '#FFFFFF',
                    format: '{point.code}'
                },
                name: 'Population density',
                tooltip: {
                    pointFormat: '{point.code}: {point.value}/km²'
                }
            }]
        });
    })});
})});

// selecting an industry makes the corresponding map show
$(document).ready(function(event){
  $("#container2").hide();
  $("#container3").hide();
  $(".industryItemCoral").click(function() {
    $("#container1").show();
    $("#container2").hide();
    $("#container3").hide();
    $(".industryItemCoral").css("background-color", "#ff5A5F");
    $(".iconCoral").css("color", "white");
    $(".industryTextCoral").css("color", "white");

    $(".industryItemSky").css("background-color", "white");
    $(".iconSky").css("color", "#5299D3");
    $(".industryTextSky").css("color", "#5299D3");

    $(".industryItemCharcoal").css("background-color", "white");
    $(".iconCharcoal").css("color", "#2B303A");
    $(".industryTextCharcoal").css("color", "#2B303A");
});

$(".industryItemSky").click(function() {
    $("#container2").show();
    $("#container1").hide();
    $("#container3").hide();
    $(".industryItemSky").css("background-color", "#5299D3");
    $(".iconSky").css("color", "white");
    $(".industryTextSky").css("color", "white");
    $(".industryItemCoral").css("background-color", "white");
    $(".iconCoral").css("color", "#ff5A5F");
    $(".industryTextCoral").css("color", "#ff5A5F");
    $(".industryItemCharcoal").css("background-color", "white");
    $(".iconCharcoal").css("color", "#2B303A");
    $(".industryTextCharcoal").css("color", "#2B303A");
  });
  $(".industryItemCharcoal").click(function() {
    $("#container3").show();
    $("#container1").hide();
    $("#container2").hide();
    $(".industryItemCharcoal").css("background-color", "#2B303A");
    $(".iconCharcoal").css("color", "white");
    $(".industryTextCharcoal").css("color", "white");

    $(".industryItemCoral").css("background-color", "white");
    $(".iconCoral").css("color", "#ff5A5F");
    $(".industryTextCoral").css("color", "#ff5A5F");

    $(".industryItemSky").css("background-color", "white");
    $(".iconSky").css("color", "#5299D3");
    $(".industryTextSky").css("color", "#5299D3");
  });
});
