function validateform(e) {
    e.preventDefault();   
    let valid = true;

    // Clear error messages
    document.getElementById('email_error').innerHTML = '';
    document.getElementById('password_error').innerHTML = '';

    // Validate email
    let email = document.getElementById('email').value; // Get value from the input field
    if (email === "") {
        document.getElementById('email_error').innerHTML = 'Error! Email is required.';
        valid = false;
    }

    // Validate password
    let password = document.getElementById('password').value; // Get value from the input field
    if (password === "") {
        document.getElementById('password_error').innerHTML = 'Error! Password is required.';
        valid = false;
    } else if (password.length < 6) {
        document.getElementById('password_error').innerHTML = 'Error! Password must be at least 6 characters long.';
        valid = false;
    }

    // If valid, reset form fields and show success message (optional)
    if (valid) {
        document.getElementById('loginform').reset(); // Clear fields
        alert('Form submitted successfully!'); // Optional success message
    }

    return valid; // Return true or false based on validation
}
