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

// Quiz flow - industry results selection
$(document).ready(function(event) {

$("#quizButton1").click(function() {
    if ($("input[id=q1a]:checked").val()) {
      console.log('q1a')
      $("#ques2a").show();
      $("#ques1").hide();
      $("#ques2b").hide();
      $("#ques3").hide();
      $("#ques4").hide();
      $("#ques5").hide();
      $("#ques6").hide();
      $("#ques7").hide();
      $("#ques8").hide();
    } else if ($("input[id=q1b]:checked").val())  {
      console.log('q1b')
      $("#ques2b").show();
      $("#ques1").hide();
      $("#ques2a").hide();
      $("#ques3").hide();
      $("#ques4").hide();
      $("#ques5").hide();
      $("#ques6").hide();
      $("#ques7").hide();
      $("#ques8").hide();
    }
  });

  $("#quizButton2a").click(function() {
      if ($("input[id=q2a1]:checked").val()) {
        console.log('q2a1')
        $("#ques6").show();
        $("#ques1").hide();
        $("#ques2a").hide();
        $("#ques2b").hide();
        $("#ques3").hide();
        $("#ques4").hide();
        $("#ques5").hide();
        $("#ques7").hide();
        $("#ques8").hide();
      } else if ($("input[id=q2a2]:checked").val())  {
        console.log('q2a2')
        $("#ques8").show();
        $("#ques1").hide();
        $("#ques2a").hide();
        $("#ques2b").hide();
        $("#ques3").hide();
        $("#ques4").hide();
        $("#ques5").hide();
        $("#ques6").hide();
        $("#ques7").hide();
      }
    });

    $("#quizButton2b").click(function() {
        if ($("input[id=q2b1]:checked").val()) {
          console.log('q2b1')
          $("#ques3").show();
          $("#ques1").hide();
          $("#ques2a").hide();
          $("#ques2b").hide();
          $("#ques4").hide();
          $("#ques5").hide();
          $("#ques6").hide();
          $("#ques7").hide();
          $("#ques8").hide();
        } else if ($("input[id=q2b2]:checked").val())  {
          console.log('q2b2')
          $("#ques5").show();
          $("#ques1").hide();
          $("#ques2a").hide();
          $("#ques2b").hide();
          $("#ques3").hide();
          $("#ques4").hide();
          $("#ques6").hide();
          $("#ques7").hide();
          $("#ques8").hide();
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
