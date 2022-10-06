//form validation
function validateform()
{
    var first_name = document.forms["contact_form"]["fname"].value;
    var last_name  = document.forms["contact_form"]["lname"].value;
    var e_mail     = document.forms["contact_form"]["email"].value;
    var mob_number = document.forms["contact_form"]["phone"].value;
    var message    = document.forms["contact_form"]["message"].value;


    //
    if(first_name == ""){
        document.getElementById('error_fname').innerHTML = "*fname is required";
        return false;
    }
    if(!isNaN(first_name)){
        document.getElementById('error_fname').innerHTML = "*only characters are allowed";
        return false;
    }
    else{
        document.getElementById('error_fname').style.display = 'none';
    }


    //
    if(last_name == ""){
        document.getElementById('error_lname').innerHTML = "*lname is required";
        return false;
    }
    if(!isNaN(last_name)){
        document.getElementById('error_lname').innerHTML = "*only characters are allowed";
        return false;
    }
    else{
        document.getElementById('error_lname').style.display = 'none';
    }


    //
    if(e_mail == ""){
        document.getElementById('error_email').innerHTML = "*email is required";
        return false;
    }
    else{
        document.getElementById('error_email').style.display = 'none';
    }

    //
    if(mob_number == ""){
        document.getElementById('error_mobnum').innerHTML = "*mobile no is required";
        return false;
    }
    if(isNaN(mob_number)){
        document.getElementById('error_mobnum').innerHTML = "*only numbers are allowed";
        return false;
    }
    else{
        document.getElementById('error_mobnum').style.display = 'none';
    }

    //
    if(message == ""){
        document.getElementById('error_message').innerHTML = "*message is required";
        return false;
    }


    else{
        alert("Thank you for Messaging Us.......");
        return true;
    }
}