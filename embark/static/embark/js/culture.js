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

// company culture slider
$( function() {
  $( "#slider-range-max" ).slider({
    range: "max",
    min: 1,
    max: 5,
    step: 0.25,
    value: 3,
    slide: function( event, ui ) {
      $( "#amount" ).val( ui.value );
    }
  });
  $( "#amount" ).val( $( "#slider-range-max" ).slider( "value" ) );
} );

  $( function() {
  $( "#slider-range-2" ).slider({
    range: "max",
    min: 1,
    max: 5,
    step: 0.25,
    value: 3,
    slide: function( event, ui ) {
      $( "#amount2" ).val( ui.value );
    }
  });
  $( "#amount2" ).val( $( "#slider-range-2" ).slider( "value" ) );
} );

$( function() {
$( "#slider-range-3" ).slider({
  range: "max",
  min: 1,
  max: 5,
  step: 0.25,
  value: 3,
  slide: function( event, ui ) {
    $( "#amount3" ).val( ui.value );
  }
});
$( "#amount3" ).val( $( "#slider-range-3" ).slider( "value" ) );
} );

$( function() {
$( "#slider-range-4" ).slider({
  range: "max",
  min: 1,
  max: 5,
  step: 0.25,
  value: 3,
  slide: function( event, ui ) {
    $( "#amount4" ).val( ui.value );
  }
});
$( "#amount4" ).val( $( "#slider-range-4" ).slider( "value" ) );
} );

$( function() {
$( "#slider-range-5" ).slider({
  range: "max",
  min: 1,
  max: 5,
  step: 0.25,
  value: 3,
  slide: function( event, ui ) {
    $( "#amount5" ).val( ui.value );
  }
});
$( "#amount5" ).val( $( "#slider-range-5" ).slider( "value" ) );
} );

var slidervalues = []
var culturePrefs = document.getElementById('culturePrefs');
culturePrefs.onclick = function(e) {
    e.preventDefault()
    id = document.getElementById('userId').value
    var url = '/api/GetEmbarker/' + id + '/'
    $.ajax({
        url: url,
        type: 'GET',
    }).done(function(results){
    var jobTitle = results.jobTitle
    var slidervalues = []
    slidervalues.push($("#slider-range-max").slider("value"))
    slidervalues.push($("#slider-range-2").slider("value"))
    slidervalues.push($("#slider-range-3").slider("value"))
    slidervalues.push($("#slider-range-4").slider("value"))
    slidervalues.push($("#slider-range-5").slider("value"))
    var values = slidervalues.toString();
    console.log(values)
    var ajaxdata = {
        url: '/api/PostEmbarker/' + id + '/',
        data: { "user": id, "culturePrefs": values, "jobTitle": jobTitle},
        dataType: 'json',
        traditional: true,
        type: 'PUT'
    }
    $.ajax(ajaxdata).done(function(results){
        reviewredirect()
    })
})}

function reviewredirect(){
    id = document.getElementById('userId').value
    var url = '/api/GetEmbarker/' + id + '/'
    $.ajax({
        url: url,
        type: 'GET',
    }).done(function(results){
    var locations  = []
    locations.push(document.getElementById('location1').value)
    locations.push(document.getElementById('location2').value)
    locations.push(document.getElementById('location3').value)
    var locationPrefs = locations.toString();
    var jobTitle = results.jobTitle
    id = document.getElementById('userId').value
    var newAjax = {
        url: '/api/PostEmbarker/' + id + '/',
        data: { "user": id, "locationPrefs": locationPrefs, "jobTitle": jobTitle},
        dataType: 'json',
        traditional: true,
        type: 'PUT'
    }
    $.ajax(newAjax).done(function(results){
    url = '/embark/review'
    window.location = url;
})})
}
