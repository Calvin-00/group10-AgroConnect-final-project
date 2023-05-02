
    function validated() {
                    var username = document.forms['form']['username'];
    var password = document.forms['form']['password'];


    var username_error = document.getElementById('username_error');
    var password_error = document.getElementById('password_error');


    username_error.innerHTML = '';
    password_error.innerHTML = '';


    if (username.value == '') {
        username_error.innerHTML = 'Please enter a username.';
    return false;
                    }
    else if (username.value.length < 5) {
        username_error.innerHTML = 'Username must be at least 5 characters long.';
    return false;
                    } else {
        username_error.innerHTML = "";
    return false
                    }

    if (password.value == '') {
        password_error.innerHTML = 'Please enter a password.';
    return false;
                    }
    else if (password.value.length < 8) {
        password_error.innerHTML = 'Password must be at least 8 characters long.';
    return false;
                    } else {
        password_error.innerHTML = "";
                    }



    return true;
                }
