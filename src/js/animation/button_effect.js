//global.jQuery = global.jQuery || require('jquery');
//var $ = require('../lib/jquery-3.0.0.min');
// var $ = require('jQuery');
'use strict';
require('../lib/babel_jquery');
//using babel import
// const {BrowserWindow} = require('electron').remote

//const {BrowserWindow} = electron.remote
//const {BrowserWindow} = require('electron').remote;

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
  }
});