// function js_test() {
//     console.log("JS is linked correctly!")
// }
// js_test()

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
