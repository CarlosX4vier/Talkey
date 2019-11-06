// (function($) {
//     "use strict";


/*==================================================================
[ Validate ]*/
var input = $('.validate-input .input100');

function submitForm(type) {
    event.preventDefault();
    var check = true;

    for (var i = 0; i < input.length; i++) {
        if (validate(input[i]) == false) {
            showValidate(input[i]);
            check = false;
        }
    }

    console.log(type);
    if (type == 'userRegister' && check == true) {
        registerUser();
    } else if (type == 'login' && check == true) {
        return check;
    } else {
        return check;
    }

};


$('.validate-form .input100').each(function() {
    $(this).focus(function() {
        hideValidate(this);
    });
});

function validate(input) {
    if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
        if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            return false;
        }
    } else {
        if ($(input).val().trim() == '') {
            return false;
        }
    }
}

function showValidate(input) {
    var thisAlert = $(input).parent();

    $(thisAlert).addClass('alert-validate');
}

function hideValidate(input) {
    var thisAlert = $(input).parent();

    $(thisAlert).removeClass('alert-validate');
}

// })(jQuery);

function registerUser() {

    event.preventDefault();
    let name = $("#name").val();
    let lastname = $("#lastname").val();
    let email = $("#email").val();
    let pass = $("#pass").val();

    //http://localhost:8080/user?name=victor&lastName=n%20sei&password=naosei3432&email=22342343242%40gmail.com
    let data = {
        name: name,
        lastName: lastname,
        email: email,
        password: pass
    }

    $.ajax({
        type: "POST",
        url: "http://localhost:8080/user/",
        data: data,
        datatype: "application/json",
        contentType: "application/json",
        success: function(result) {
            window.location.href = "email.html";
        },
        error: function(result) {
            $('#formRegister')[0].reset();
            $('#modalError').modal('show');
        },

    });

}

function validateLogin() {

}