// step -1: add click even handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // step -2: get the email address inside the email input fild.
    const emailFild = document.getElementById('email-fild');
    const email = emailFild.value;
    // step -3: get the password;
    const passwordFild = document.getElementById('password-fild');
    const password = passwordFild.value;
    window.location.href = 'bank.html';
})