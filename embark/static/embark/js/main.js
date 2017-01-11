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

function createUser(e){
    e.preventDefault()
    var userName = $("#username").val()
    var userPassword = $("#password").val()
    var firstname = $("#firstname").val()
    var lastname = $("#lastname").val()
    var emailAddress = $("#email").val()
    var context = {
        username: userName,
        password: userPassword,
        first_name: firstname,
        last_name: lastname,
        email: emailAddress,
    }
    $.ajax({
        url: '/api/User/',
        type: 'POST',
        data: context
    }).done(function(results){
        console.log(results)
        createEmbarker(results.id)
    })
}
$("#createUser").click(createUser)


function createEmbarker(id){
    var jobTitle = $("#jobtitle").val()
    var userId = id
    var context = {
        jobTitle: jobTitle,
        user: userId,
    }
    console.log(context)
    $.ajax({
        url: '/api/PostEmbarker/',
        type: 'POST',
        data: context
    }).done(function(results){
        linkLogin()
    })
}

function linkLogin(){
    url = '/embark/quiz/'
    window.location = url;
}

$(document).ready(function(event){
  $(".landingRegister").hide();
  $(".registerClick").click(function() {
    $(".landingRegister").show();
    $(".landingLogin").hide();
  });
  $(".loginClick").click(function() {
    $(".landingLogin").show();
    $(".landingRegister").hide();
  });
});
