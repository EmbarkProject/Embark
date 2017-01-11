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

function print_selections() {
    console.log($('#industrySelection').val())
}

var manualIndustry = document.getElementById('manualIndustry');
var industries = []
manualIndustry.onclick = function() {
    id = document.getElementById('userId').value
    var url = '/api/GetEmbarker/' + id + '/'
    $.ajax({
        url: url,
        type: 'GET',
    }).done(function(results){
    console.log(results)
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
    console.log(ajaxdata)
    $.ajax(ajaxdata).done(function(results){
        quizredirect()
    })
})}

function quizredirect(){
    url = '/embark/industries'
    window.location = url;
}
