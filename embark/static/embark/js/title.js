function filter_headers1(){
    var id = document.getElementById('userId').value
    $.ajax({
        url: '/api/GetEmbarker/' + id + '/',
        type: 'GET',
        datatype: 'json',
    }).done(function(results){
        var industryList = results.industryPrefs.split(',');
        var jobid = industryList[0]
        $.ajax({
            url: '/api/Industry/1/',
            type: 'GET',
            datatype: 'json',
        }).done(function(results){
            console.log(results)
            var source = $('#post-template').html();
            var template = Handlebars.compile(source);
            var html = template(results);
            console.log(html)
            $('#resource1').append(html)
        })})}

filter_headers1()



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
  $('input[name=titleIndustry]').change(function(){
    $('#titleArtResources').toggle(this.value == '1');
    $('#titleBeautyResources').toggle(this.value == '2');
    $('#titleEducationResources').toggle(this.value == '3');
    $('#titleFacilitiesResources').toggle(this.value == '4');
    $('#titleHospitalityResources').toggle(this.value == '5');
    $('#titleInstallationResources').toggle(this.value == '6');
    $('#titleMedicalResources').toggle(this.value == '7');
    $('#titleRestaurantResources').toggle(this.value == '8');
    $('#titleRetailResources').toggle(this.value == '9');
    $('#titleSalesResources').toggle(this.value == '10');
    $('#titleSecurityResources').toggle(this.value == '11');
    $('#titleSkilledResources').toggle(this.value == '12');
    $('#titleSportsResources').toggle(this.value == '13');
    $('#titleTravelResources').toggle(this.value == '14');
    $('#titleAccountingResources').toggle(this.value == '15');
    $('#titleAdministrativeResources').toggle(this.value == '16');
    $('#titleAnalystResources').toggle(this.value == '17');
    $('#titleArchitectureResources').toggle(this.value == '18');
    $('#titleBankingResources').toggle(this.value == '19');
    $('#titleBusinessResources').toggle(this.value == '20');
    $('#titleEngineeringResources').toggle(this.value == '21');
    $('#titleHumanResources').toggle(this.value == '22');
    $('#titleLegalResources').toggle(this.value == '23');
    $('#titleManufacturingResources').toggle(this.value == '24');
    $('#titleMarketingResources').toggle(this.value == '25');
    $('#titleNonprofitResources').toggle(this.value == '26');
    $('#titleProductResources').toggle(this.value == '27');
    $('#titleRealestateResources').toggle(this.value == '28');
    $('#titleScienceResources').toggle(this.value == '29');
    $('#titleSeniorResources').toggle(this.value == '30');
    $('#titleSoftwareResources').toggle(this.value == '31');
    $('#titleWritingResources').toggle(this.value == '32');
  });
});
