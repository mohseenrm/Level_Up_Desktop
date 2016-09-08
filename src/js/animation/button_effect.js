//global.jQuery = global.jQuery || require('jquery');
//var $ = require('../lib/jquery-3.0.0.min');
// var $ = require('jQuery');
require('../lib/babel_jquery');
//using babel import
$(function() {
  $( "#button" ).click(function() {
    $( "#button" ).addClass( "onclic", 250, validate);
  });

  function validate() {
    setTimeout(function() {
      $( "#button" ).removeClass( "onclic" );
      $( "#button" ).addClass( "validate", 450, callback );
    }, 2250 );
  }
  function callback() {
    setTimeout(function() {
      $( "#button" ).removeClass( "validate" );
    }, 1250 );
  }
});