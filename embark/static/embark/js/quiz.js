

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

function js_test() {
    console.log("JS is linked correctly!")
}
js_test()
