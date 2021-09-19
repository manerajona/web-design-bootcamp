function validatePassword() {

    // Get element from the document by name
    const usernameInput = document.getElementsByName('username');
    const passwordInput = document.getElementsByName('password');

    const usr = usernameInput[0].value;
    const pass = passwordInput[0].value;


    // Get element from the document by Id
    const span = document.getElementById('msjerror')

    if (usr === 'admin' && pass === 'admin123') {
        span.hidden = true;
    } else {
        span.hidden = false;
    }

    return false;
}