function getCookie(name) {
   var cookieValue = null;
   if (document.cookie && document.cookie !== '') {
       var cookies = document.cookie.split(';');
       for (var i = 0; i < cookies.length; i++) {
           var cookie = jQuery.trim(cookies[i]);
           if (cookie.substring(0, name.length + 1) === (name + '=')) {
               cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
               break;
           }
       }
   }
   return cookieValue;
}


var csrftoken = getCookie('csrftoken');
function csrfSafeMethod(method) {
   return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}


$.ajaxSetup({
    beforeSend: function(xhr, settings) {
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
    }
});


// LIMIT THE QUIZ SELECTION TO 3
$(document).ready(function() {
  var last_valid_selection = null;
  $('#industrySelection').change(function(event) {
    if ($(this).val().length > 3) {
      $(this).val(last_valid_selection);
    } else {
      last_valid_selection = $(this).val();
    }
  });
});

var manualIndustry = document.getElementById('manualIndustry');
var industries = []
manualIndustry.onclick = function() {
    id = document.getElementById('userId').value
    var url = '/api/GetEmbarker/' + id + '/'
    $.ajax({
        url: url,
        type: 'GET',
    }).done(function(results){
    var industries = []
    industries.push($('#industrySelection').val());
    var jobTitle = results.jobTitle
    var ajaxdata = {
        url: '/api/PostEmbarker/' + id + '/',
        data: { "user": id, "industryPrefs": industries, "jobTitle": jobTitle},
        dataType: 'json',
        traditional: true,
        type: 'PUT'
    }
    $.ajax(ajaxdata).done(function(results){
        quizredirect()
    })
})}

function quizredirect(){
    url = '/embark/industries'
    window.location = url;
}
$("#ques9").hide();
// Quiz flow - industry results selection
$(document).ready(function(event) {
$("#quizButton1").click(function() {
    if ($("input[id=q1a]:checked").val()){
    $("#ques2").show();
    $("#ques1").hide();
    } else if ($("input[id=q1b]:checked").val()){
    $("#ques3").show();
    $("#ques1").hide();
    }
});

$("#quizButton2").click(function() {
    if ($("input[id=q2a]:checked").val()) {
    $("#ques6").hide();
    $("#ques1").hide();
    $("#ques2").hide();
    $("#ques3").hide();
    $("#ques3").hide();
    $("#ques4").hide();
    $("#ques5").hide();
    $("#ques7").show();
    $("#ques8").hide();
    $("#ques9").hide();
    } else if ($("input[id=q2b]:checked").val())  {
    $("#ques9").show();
    $("#ques1").hide();
    $("#ques2").hide();
    $("#ques3").hide();
    $("#ques4").hide();
    $("#ques5").hide();
    $("#ques6").hide();
    $("#ques7").hide();
    $("#ques8").hide();
    }
});

$("#quizButton3").click(function() {
    if ($("input[id=q3a]:checked").val()) {
    $("#ques4").show();
    $("#ques1").hide();
    $("#ques2").hide();
    $("#ques3").hide();
    $("#ques5").hide();
    $("#ques6").hide();
    $("#ques7").hide();
    $("#ques8").hide();
    $("#ques9").hide();
    } else if ($("input[id=q3b]:checked").val())  {
    $("#ques6").show();
    $("#ques1").hide();
    $("#ques2").hide();
    $("#ques3").hide();
    $("#ques4").hide();
    $("#ques5").hide();
    $("#ques7").hide();
    $("#ques8").hide();
    $("#ques9").hide();
    }
});

$("#quizButton4").click(function() {
    if ($("input[id=q4a]:checked").val()) {
    $("#ques4").hide();
    $("#ques1").hide();
    $("#ques2").hide();
    $("#ques3").hide();
    $("#ques5").show();
    $("#ques6").hide();
    $("#ques7").hide();
    $("#ques8").hide();
    $("#ques9").hide();
    } else if ($("input[id=q4b]:checked").val()){
        id = document.getElementById('userId').value
        var url = '/api/GetEmbarker/' + id + '/'
        $.ajax({
            url: url,
            type: 'GET',
        }).done(function(results){
        var jobTitle = results.jobTitle
        var ajaxdata = {
            url: '/api/PostEmbarker/' + id + '/',
            data: { "user": id, "industryPrefs": ['14,3,13'], "jobTitle": jobTitle},
            dataType: 'json',
            traditional: true,
            type: 'PUT'
        }
        $.ajax(ajaxdata).done(function(results){
            quizredirect()
        })})
    }
});

$("#quizButton5").click(function() {
    if ($("input[id=q5a]:checked").val()) {
        id = document.getElementById('userId').value
        var url = '/api/GetEmbarker/' + id + '/'
        $.ajax({
            url: url,
            type: 'GET',
        }).done(function(results){
        var jobTitle = results.jobTitle
        var ajaxdata = {
            url: '/api/PostEmbarker/' + id + '/',
            data: { "user": id, "industryPrefs": ['8,9,10'], "jobTitle": jobTitle},
            dataType: 'json',
            traditional: true,
            type: 'PUT'
        }
        $.ajax(ajaxdata).done(function(results){
            quizredirect()
        })})
    } else if ($("input[id=q5b]:checked").val())  {
        id = document.getElementById('userId').value
        var url = '/api/GetEmbarker/' + id + '/'
        $.ajax({
            url: url,
            type: 'GET',
        }).done(function(results){
        var jobTitle = results.jobTitle
        var ajaxdata = {
            url: '/api/PostEmbarker/' + id + '/',
            data: { "user": id, "industryPrefs": ['2,5,7'], "jobTitle": jobTitle},
            dataType: 'json',
            traditional: true,
            type: 'PUT'
        }
        $.ajax(ajaxdata).done(function(results){
            quizredirect()
        })})
    }
});

$("#quizButton6").click(function() {
    if ($("input[id=q6a]:checked").val()) {
        id = document.getElementById('userId').value
        var url = '/api/GetEmbarker/' + id + '/'
        $.ajax({
            url: url,
            type: 'GET',
        }).done(function(results){
        var jobTitle = results.jobTitle
        var ajaxdata = {
            url: '/api/PostEmbarker/' + id + '/',
            data: { "user": id, "industryPrefs": ['1,12,24'], "jobTitle": jobTitle},
            dataType: 'json',
            traditional: true,
            type: 'PUT'
        }
        $.ajax(ajaxdata).done(function(results){
            quizredirect()
        })})
    } else if ($("input[id=q6b]:checked").val())  {
        id = document.getElementById('userId').value
        var url = '/api/GetEmbarker/' + id + '/'
        $.ajax({
            url: url,
            type: 'GET',
        }).done(function(results){
        var jobTitle = results.jobTitle
        var ajaxdata = {
            url: '/api/PostEmbarker/' + id + '/',
            data: { "user": id, "industryPrefs": ['4,6,11'], "jobTitle": jobTitle},
            dataType: 'json',
            traditional: true,
            type: 'PUT'
        }
        $.ajax(ajaxdata).done(function(results){
            quizredirect()
        })})
    }
});

$("#quizButton7").click(function(){
    if ($("input[id=q7a]:checked").val()){
    $("#ques4").hide();
    $("#ques1").hide();
    $("#ques2").hide();
    $("#ques3").hide();
    $("#ques5").hide();
    $("#ques6").hide();
    $("#ques7").hide();
    $("#ques8").show();
    $("#ques9").hide();
    } else if ($("input[id=q7b]:checked").val()){
        id = document.getElementById('userId').value
        var url = '/api/GetEmbarker/' + id + '/'
        $.ajax({
            url: url,
            type: 'GET',
        }).done(function(results){
        var jobTitle = results.jobTitle
        var ajaxdata = {
            url: '/api/PostEmbarker/' + id + '/',
            data: { "user": id, "industryPrefs": ['26,15,19'], "jobTitle": jobTitle},
            dataType: 'json',
            traditional: true,
            type: 'PUT'
        }
        $.ajax(ajaxdata).done(function(results){
            quizredirect()
        })})
    }
});

$("#quizButton8").click(function() {
    if ($("input[id=q8a]:checked").val()) {
        id = document.getElementById('userId').value
        var url = '/api/GetEmbarker/' + id + '/'
        $.ajax({
            url: url,
            type: 'GET',
        }).done(function(results){
        var jobTitle = results.jobTitle
        var ajaxdata = {
            url: '/api/PostEmbarker/' + id + '/',
            data: { "user": id, "industryPrefs": ['20,23,28'], "jobTitle": jobTitle},
            dataType: 'json',
            traditional: true,
            type: 'PUT'
        }
        $.ajax(ajaxdata).done(function(results){
            quizredirect()
        })})
    } else if ($("input[id=q8b]:checked").val())  {
        id = document.getElementById('userId').value
        var url = '/api/GetEmbarker/' + id + '/'
        $.ajax({
            url: url,
            type: 'GET',
        }).done(function(results){
        var jobTitle = results.jobTitle
        var ajaxdata = {
            url: '/api/PostEmbarker/' + id + '/',
            data: { "user": id, "industryPrefs": ['22,27,30'], "jobTitle": jobTitle},
            dataType: 'json',
            traditional: true,
            type: 'PUT'
        }
        $.ajax(ajaxdata).done(function(results){
            quizredirect()
        })})
    }
});

$("#quizButton9").click(function() {
    if ($("input[id=q9a]:checked").val()) {
        id = document.getElementById('userId').value
        var url = '/api/GetEmbarker/' + id + '/'
        $.ajax({
            url: url,
            type: 'GET',
        }).done(function(results){
        var jobTitle = results.jobTitle
        var ajaxdata = {
            url: '/api/PostEmbarker/' + id + '/',
            data: { "user": id, "industryPrefs": ['32,25,17'], "jobTitle": jobTitle},
            dataType: 'json',
            traditional: true,
            type: 'PUT'
        }
        $.ajax(ajaxdata).done(function(results){
            quizredirect()
        })})
    } else if ($("input[id=q9b]:checked").val())  {
        id = document.getElementById('userId').value
        var url = '/api/GetEmbarker/' + id + '/'
        $.ajax({
            url: url,
            type: 'GET',
        }).done(function(results){
        var jobTitle = results.jobTitle
        var ajaxdata = {
            url: '/api/PostEmbarker/' + id + '/',
            data: { "user": id, "industryPrefs": ['16,31,21'], "jobTitle": jobTitle},
            dataType: 'json',
            traditional: true,
            type: 'PUT'
        }
        $.ajax(ajaxdata).done(function(results){
            quizredirect()
        })})
    }
});

    // else if ($("input[id=q2b]:checked").val()) {
    //   console.log('q2b')
    //   $("#ques5").show();
    //   $("#ques1").hide();
    //   $("#ques2").hide();
    //   $("#ques3").hide();
    //   $("#ques4").hide();
    //   $("#ques6").hide();
    //   $("#ques7").hide();
    //   $("#ques8").hide();
    // } else if ($("input[id=q5a]:checked").val()) {
    //     console.log('q5a')
    //     // var results = 1,2,3
    //     // art/design/entertainment
    //     // skilled trade
    //     // manufact/prod/contruct
    // } else if ($("input[id=q5b]:checked").val()) {
    //   console.log('q5b')
    //     // facilities/general labor
    //     // isullation/maintenance repair
    //     // security/law enforcement
    // } else if ($("input[id=q3a]:checked").val()) {
    //   console.log('q3a')
    //   $("#ques4").show();
    //   $("#ques1").hide();
    //   $("#ques2").hide();
    //   $("#ques3").hide();
    //   $("#ques5").hide();
    //   $("#ques6").hide();
    //   $("#ques7").hide();
    //   $("#ques8").hide();
    // } else if ($("input[id=q3b]:checked").val()) {
    //   console.log('q3b')
    //   // travel/transt
    //   // education
    //   // sports/fitness
    // } else if ($("input[id=q4a]:checked").val()) {
    //   console.log('q4a')
    //   // rest/food services
    //   // retail
    //   // sales/cust care
    // } else if ($("input[id=q4b]:checked").val()) {
    //   console.log('q4b')
    //   // beauty/wellness
    //   // hospitality
    //   // medical/health care
    // }

  // });
});




    // else if (ques2Val == 'k') {
    //
    // } else if (ques2Val == 'l') {
    //
    // } else if (ques2Val == 'm') {
    //
    // } else if (ques2Val == 'n') {
    //
    // } else if (ques2Val == 'o') {
    //
    // } else if (ques2Val == 'p') {
    //
    // }
