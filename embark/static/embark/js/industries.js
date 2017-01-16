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
            console.log(state)
        Highcharts.mapChart('container1', {
            chart: {
                backgroundColor: '#ededed',
                borderWidth: 0
            },
            title: {
                text: 'US industry job density'
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
                text: 'US industry job density'
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
                name: 'Population density',
                tooltip: {
                    pointFormat: '{point.code}: {point.value}'
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

$(".industryButtonSky").click(function() {
    console.log('Button 2')
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
  $(".industryButtonCharcoal").click(function() {
      console.log("b")
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
