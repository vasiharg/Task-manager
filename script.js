// A $( document ).ready() block.
$(document).ready(function () {

    showHide();
});

function showHide() {

    if ($('#login-div').is(":visible")) {
        $('#login-div').hide(500);
        $('#reg-div').show(500);
        $('#login-div-btn').val("Login").fadeIn(500);
    } else {
        $('#login-div').show(500);
        $('#reg-div').hide(500);
        $('#login-div-btn').val("Register").fadeIn(500);

    }
}

function login() {

    var email, password, emailLocal, passLocal;

    email = $('#email').val();
    password = $('#password').val();

    emailLocal = localStorage.getItem("email", email);
    passLocal = localStorage.getItem("password", password);


    if (email !== '' || password !== '') {
        if (email !== emailLocal && password !== passLocal) {
            console.log("No match");
        } else if (email == emailLocal && password == passLocal); {
            //            window.open("dash.html", "_top");
        }
    } else {
        alert("Please check your input");
    }

    $('#email').val("");
    $('#password').val("");

}


function register() {

    var email, password, name;

    email = $('#reg-email').val();
    password = $('#reg-password').val();
    name = $('#reg-name').val();

    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("name", name);

    // showHide();

}
