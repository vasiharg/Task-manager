// A $( document ).ready() block.
$(document).ready(function () {
    showHide('login');
});

function showHide(feature) {

    if (feature == 'register') {
        
        $('#login-div').hide(500);
        $('#reg-div-btn').hide();
        
        $('#reg-div').show(500);
        $('#login-div-btn').show();
        
    } else {
        $('#reg-div').hide(500);
        $('#login-div-btn').hide();
        
        $('#login-div').show(500);
        $('#reg-div-btn').show();
    }
}


function checkEmailContent(id) {
    console.log(id)
    //  let email = document.querySelector('[type="email"]');
    let email = document.querySelector(`#${id}`);
    let note = document.querySelector(`label[for="${id}"]`);
    console.log(email.value);
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    } else{
    note.innerHTML = '<p>You have entered an invalid email address!</p>';
    }
    note.value = '';
}

function login() {

    var email, password, emailLocal, passLocal;

    email = $('#email').val();
    password = $('#password').val();

    emailLocal = localStorage.getItem("email", email);
    passLocal = localStorage.getItem("password", password);
    console.log('how many times')

    if (email !== '' || password !== '') {
        if (email !== emailLocal && password !== passLocal) {
            alert("No user found. Please register...");
        } else {
             window.open("dash.html", "_top");
        }
        
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

    showHide('login');

}
