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
