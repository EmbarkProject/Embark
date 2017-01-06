

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

$("#manualIndustry").click(print_selections())
