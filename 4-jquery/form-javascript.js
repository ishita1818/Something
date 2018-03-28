function isEmail(email) {
      var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return regex.test(email);
}

$("#submitButton").click(function(){
  var errorMessage="";

    var fieldsMissing="";
    if($("#email").val()==""){
      fieldsMissing += "<br>Email";
    }
    if($("#phone").val()==""){
      fieldsMissing += "<br>Phone";
    }
    if($("#password").val()==""){
      fieldsMissing += "<br>Password";
    }
    if($("#confirmPassword").val()==""){
      fieldsMissing += "<br>Confirm Password";
    }

    if(fieldsMissing!=""){
      errorMessage += "<p>Following field(s) are missing :" + fieldsMissing +"</p>";
    }

   if(!isEmail($("#email").val())){
     errorMessage += "<p>Your email is not valid</p>";
   }
   if(!($.isNumeric($("#phone").val())&& ($("#phone").val().length==10))){

     errorMessage += "<p>Phone number is incorrect</p>";
   }
   if($("#password").val()!== $("#confirmPassword").val()){
     errorMessage += "<p>Passwords don't match</p>";
   }

    if(errorMessage!=""){
      $("#success").hide();
      $("#error").html(errorMessage);
      $("#error").show();
    }else {
      $("#error").hide();
      $("#success").html("<p>Authentication Successful !</p>");
      $("#success").show();
    }

})
