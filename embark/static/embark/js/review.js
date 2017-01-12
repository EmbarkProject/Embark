function industries(){
    id = document.getElementById('userId').value
    var url = '/api/GetEmbarker/' + id + '/'
    $.ajax({
        url: url,
        type: 'GET',
    }).done(function(results){
        var industryList = results.industryPrefs.split(',');
        $('#industry1').html(industry[industryList[0]]) + $('#industry2').html(industry[industryList[1]]) + $('#industry3').html(industry[industryList[2]])
        var cultureList = results.culturePrefs.split(',');
        $('#culture1').html("Career Opportunities : " + cultureList[0]) +
        $('#culture2').html("Culture and Values: " + cultureList[1]) +
        $('#culture3').html("Senior Leadership: " + cultureList[2]) +
        $('#culture4').html("Compensation & Benefits: " + cultureList[3]) +
        $('#culture5').html("Work/Life Balance: " + cultureList[4])
        var locationList = results.locationPrefs.split(',');
        $('#location1').html(locationList[0] + ',' + locationList[1]) + $('#location2').html(locationList[2] + ',' + locationList[3]) + $('#location3').html(locationList[4] + ',' + locationList[5])
    })
}
// var ratingParse = results.response.employers[j]
// var careerRating = ratingParse.careerOpportunitiesRating
// var careerInput = embarker.culturePrefs[0]
// var cultureRating = ratingParse.cultureAndValuesRating
// var cultureInput = embarker.culturePrefs[1]
// var leadershipRating = ratingParse.seniorLeadershipRating
// var leadershipInput = embarker.culturePrefs[2]
// var payRating = ratingParse.compensationAndBenefitsRating
// var payInput = embarker.culturePrefs[3]
// var workLifeRating = ratingParse.workLifeBalanceRating
// var workLifeInput = embarker.culturePrefs[4]
industries()

var industry = {
    "1" : "Art, Entertainment",
    "2" : "Beauty, Wellness",
    "3" : "Education",
    "4" : "General Labor",
    "5" : "Hospitality",
    "6" : "Maintenance, Repair",
    "7" : "Medical, Healthcare",
    "8" : "Restaurant",
    "9" : "Retail",
    "10" : "Sales, Customer Service",
    "11" : "Security",
    "12" : "Skilled Trade",
    "13" : "Fitness",
    "14" : "Transportation",
    "15" : "Administrative",
    "16" : "Accounting",
    "17" : "Analyst",
    "18" : "Architecture",
    "19" : "Insurance",
    "20" : "Business Development",
    "21" : "Engineering",
    "22" : "Human Resources",
    "23" : "Legal",
    "24" : "Construction",
    "25" : "Advertising",
    "26" : "Non-Profit",
    "27" : "Management",
    "28" : "Real Estate",
    "29" : "Science",
    "30" : "Senior Management",
    "31" : "IT",
    "32" : "Writing"
}
