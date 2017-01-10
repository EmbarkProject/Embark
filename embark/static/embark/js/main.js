$(document).ready(function(event){
  $(".landingRegister").hide();
  $(".registerClick").click(function() {
    $(".landingRegister").show();
    $(".landingLogin").hide();
  });
});
