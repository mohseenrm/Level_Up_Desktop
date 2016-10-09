'use strict';

const { ipcRenderer } = node_require( 'electron' );

let user_creds = {
  username : 'MoMo',
  password : 'admin'
}
console.log( ipcRenderer.sendSync( 'auth-user', user_creds ) );

$(function() {
  $( "#button" ).click(function() {
    $( "#button" ).addClass( "onclic", 250, validate );
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