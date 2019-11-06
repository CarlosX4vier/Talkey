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
        validateLogin();
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
        url: "/user/",
        data: data,
        datatype: "json",
        contentType: "application/json",
        success: function(result) {
            console.log('AJAX?');
            result = JSON.parse(result);

            if (result.result == 400) {
                console.log("no if");
                window.location.href = "email.html";
            } else {
                console.log(result);
                console.log("no else");
                $(".modal-header").prepend('<h5 class="modal-title" id="titleModal">ERRO ' + result.result + '</h5>');
                $(".modal-body").html('<p>' + result.error + '</p>');
                $('#formRegister')[0].reset();
                $('#modalError').modal('show');
            }

        },
        error: function(result) {
            $('#formRegister')[0].reset();
            $('#modalError').modal('show');
        },

    });

}

function validateLogin() {

    event.preventDefault();
    let email = $('#email').val();
    let pass = $('#pass').val();

    let data = {
        email: email,
        password: pass
    }

    $.ajax({
        type: "GET",
        url: "/user/",
        data: data,
        datatype: "application/json",
        contentType: "application/json",
        success: function(result) {
            result = JSON.parse(result);

            if (result.result == 400) {
                console.log("no if");
                window.location.href = "pages/email.html";
            } else {
                console.log(result);
                console.log("no else");
                $(".modal-header").prepend('<h5 class="modal-title" id="titleModal">ERRO ' + result.result + '</h5>');
                $(".modal-body").html('<p>' + result.error + '</p>');
                $('#modalError').modal('show');
            }

        },
        error: function(result) {
            console.log("no error");
            $(".modal-header").prepend('<h5 class="modal-title" id="titleModal">ERRO DESCONHECIDO</h5>');
            $(".modal-body").html('<p>Se o problema persistir, contate o suporte!</p>');
            $('#modalError').modal('show');
        },

    });

}