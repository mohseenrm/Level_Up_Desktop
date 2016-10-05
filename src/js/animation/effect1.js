//global.jQuery = global.jQuery || require('jquery');
//var $ = require('../lib/jquery-3.0.0.min');
//var $ = require('jQuery');
// require('../lib/babel_jquery');
// require('../lib/jquery-ui.js');
// import 'jquery-ui';

$(document).ready(function(){
  var mouseX, mouseY;
  var ww = $( window ).width();
  var wh = $( window ).height();
  var traX, traY;
  var user_name = $("#username");
  //var label_user, label_password, password;

  let label_username = $("#label_username");
  let label_password = $("#label_password");
  let password = $("#password");

  $(document).mousemove(function(e){
    mouseX = e.pageX;
    mouseY = e.pageY;
    traX = ((4 * mouseX) / 570) + 40;
    traY = ((4 * mouseY) / 570) + 50;
    // console.log(traX);
    $(".title").css({"background-position": traX + "%" + traY + "%"});
  });

  user_name.on("blur", function(e){
    if($(this).val() != ""){
      label_username.hide();
      $(this).css({"text-align": "center"});
    }
    else if($(this).val() == ""){
      $(this).css({"text-align": "left"});
      label_username.show();
    }
  });
  password.on("blur", function(e){
    if($(this).val() != ""){
      label_password.hide();
      $(this).css({"text-align": "center"});
    }
    else if($(this).val() == ""){
      $(this).css({"text-align": "left"});
      label_password.show();
    }
  });
});