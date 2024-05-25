function validateEmail() {
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const successMessage = document.getElementById('successMessage');
    
    if (email.length > 3 && email.includes('@') && email.includes('.')) {
        emailError.style.display = 'none';
        successMessage.style.display = 'block';
    } else {
        emailError.style.display = 'block';
        successMessage.style.display = 'none';
    }
}

function validatePassword() {
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');
    const successMessage = document.getElementById('successMessage');
    
    if (password.length > 8) {
        passwordError.style.display = 'none';
        successMessage.style.display = 'block';
    } else {
        passwordError.style.display = 'block';
        successMessage.style.display = 'none';
    }
}

function handleSubmit(event) {
    event.preventDefault();
    const emailError = document.getElementById('emailError').style.display;
    const passwordError = document.getElementById('passwordError').style.display;

    if (emailError === 'none' && passwordError === 'none') {
        if (confirm('Do you want to submit the form?')) {
            alert('Successful signup!');
        } else {
            document.getElementById('form1').reset();
            document.getElementById('successMessage').style.display = 'none';
        }
    } else {
        alert('Please correct the errors before submitting.');
    }
}
