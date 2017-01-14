// industry1 heat map
$(function () {

    $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=us-population-density.json&callback=?', function (data) {

        // Make codes uppercase to match the map data
        $.each(data, function () {
            this.code = this.code.toUpperCase();
        });

        // Instanciate the map
        var url = 'https://api.glassdoor.com/api/api.htm?t.p=112563&t.k=fKBkymF6I8W&userip=0.0.0.0&useragent=&format=json&v=1&action=jobs-stats&returnStates=true&admLevelRequested=1'
        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'jsonp',
        }).done(function(results){
            console.log(results)
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
                    [0.67, '#ff5a5f'],
                    [1, '#3d1517']
                ]
            },

            series: [{
                animation: {
                    duration: 1000
                },
                data: data,
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
});

// industry2 heat map
$(function () {

    $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=us-population-density.json&callback=?', function (data) {

        // Make codes uppercase to match the map data
        $.each(data, function () {
            this.code = this.code.toUpperCase();
        });

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
                data: data,
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
    });
});

// industry3 heat map
$(function () {

    $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=us-population-density.json&callback=?', function (data) {

        // Make codes uppercase to match the map data
        $.each(data, function () {
            this.code = this.code.toUpperCase();
        });

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
                data: data,
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
    });
});

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
