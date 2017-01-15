function industries(){
    var id = document.getElementById('userId').value
    $.ajax({
        url: '/api/GetEmbarker/' + id + '/',
        type: 'GET',
        datatype: 'json',
    }).done(function(results){
        var cultureList = results.culturePrefs.split(',');
        $('#culture1').html("Career Opportunities : " + cultureList[0]) +
        $('#culture2').html("Culture and Values: " + cultureList[1]) +
        $('#culture3').html("Senior Leadership: " + cultureList[2]) +
        $('#culture4').html("Compensation & Benefits: " + cultureList[3]) +
        $('#culture5').html("Work/Life Balance: " + cultureList[4])
        var locationList = results.locationPrefs.split(',');
        $('#location1').html(locationList[0] + ',' + locationList[1]) + $('#location2').html(locationList[2] + ',' + locationList[3]) + $('#location3').html(locationList[4] + ',' + locationList[5])
        var industryList = results.industryPrefs.split(',');
        var jobid = industryList[0]
        $.ajax({
            url: '/api/Industry/' + jobid + '/',
            type: 'GET',
            datatype: 'json',
        }).done(function(results){
        $('#industry1').html(results.title)
        })
        var industryList = results.industryPrefs.split(',');
        var jobid = industryList[1]
        $.ajax({
            url: '/api/Industry/' + jobid + '/',
            type: 'GET',
            datatype: 'json',
        }).done(function(results){
        $('#industry2').html(results.title)
        })
        var industryList = results.industryPrefs.split(',');
        var jobid = industryList[2]
        $.ajax({
            url: '/api/Industry/' + jobid + '/',
            type: 'GET',
            datatype: 'json',
        }).done(function(results){
        $('#industry3').html(results.title)
        })

})}
industries()
