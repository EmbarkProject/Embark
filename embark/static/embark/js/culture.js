// setting up the industry values
var industry = {
    "1" : "Art,Entertainment",
    "2" : "Beauty,Wellness",
    "3" : "Education",
    "4" : "General Labor",
    "5" : "Hospitality",
    "6" : "Maintenance,Repair",
    "7" : "Medical,Healthcare",
    "8" : "Restaurant",
    "9" : "Retail",
    "10" : "Sales,Customer Service",
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
console.log(industry[15])
// <option value="1">Art/Design/Entertainment</option>
// <option value="2">Beauty/Wellness </option>
// <option value="3">Education</option>
// <option value="4">Facilities/General Labor</option>
// <option value="5">Hospitality </option>
// <option value="6">Installation/Maintenance/Repair</option>
// <option value="7">Medical/Healthcare</option>
// <option value="8">Restaurant / Food Services </option>
// <option value="9">Retail</option>
// <option value="10">Sales / Customer Care</option>
// <option value="11">Security / Law Enforcement</option>
// <option value="12">Skilled Trade</option>
// <option value="13">Sports / Fitness</option>
// <option value="14">Travel / Transportation </option>
// <option value="15">Administrative</option>
// <option value="16">Accounting / Finance</option>
// <option value="17">Analyst </option>
// <option value="18">Architecture / Drafting</option>
// <option value="19">Banking / Loan / Insurance</option>
// <option value="20">Business Development / Consulting</option>
// <option value="21">Engineering (Non-software)</option>
// <option value="22">Human Resources</option>
// <option value="23">Legal</option>
// <option value="24">Manufact. / Product. / Construct.</option>
// <option value="25">Marketing / Advertising / PR</option>
// <option value="26">Non-Profit / Volunteering</option>
// <option value="27">	Product / Project Management</option>
// <option value="28">Real Estate</option>
// <option value="29">Science / Research</option>
// <option value="30">Senior Management</option>
// <option value="31">Software Development / IT</option>
// <option value="32">Writing / Editing / Publishing</option>


// company culture slider
$( function() {
  $( "#slider-range-max" ).slider({
    range: "max",
    min: 1,
    max: 5,
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
  step: .5,
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
  value: 3,
  slide: function( event, ui ) {
    $( "#amount5" ).val( ui.value );
  }
});
$( "#amount5" ).val( $( "#slider-range-5" ).slider( "value" ) );
} );

// var slidervalues = []
// var test = document.getElementById('test');
// test.onclick = function() {
//     slidervalues.push($("#slider-range-max").slider("value"))
//     slidervalues.push($("#slider-range-2").slider("value"))
//     slidervalues.push($("#slider-range-3").slider("value"))
//     slidervalues.push($("#slider-range-4").slider("value"))
//     slidervalues.push($("#slider-range-5").slider("value"))
//     console.log($(slidervalues));
// }
