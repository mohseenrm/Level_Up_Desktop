'use strict';

const { ipcRenderer } = node_require( 'electron' );

$(function() {
//function definitions
  let get_user_credentials = () => {
    let user_credentials = {
      username : '',
      password : ''
    };
    let $username = $( "#username" ), $password = $( "#password" );
    user_credentials['username'] = $username.val();
    user_credentials['password'] = $password.val();
    return( user_credentials );
  };

//animations
  let $button    = $( "#button" );
  let class_name = "invalidate";
  let response   = false;

  $button.click(function() {
    //get user data
    let user_credentials = get_user_credentials();
    response = ipcRenderer.sendSync( 'auth-user', user_credentials );

    console.log( response );
    if( response === true )
      class_name = "validate";

    $button.addClass( "onclic", 250, validate );
  });

  function validate() {
    setTimeout(function() {

      $button.removeClass( "onclic" );
      $button.addClass( class_name, 450, callback );
    }, 2250 );
  }
  function callback() {
      setTimeout(function() {
        $button.removeClass( class_name );
        //call login method here
      }, 1250 );
  }

});