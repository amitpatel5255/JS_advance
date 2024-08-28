document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Clear previous error messages
    document.getElementById('usernameError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';

    // Get form values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    let hasError = false;

    // Validation logic
    if (username.length < 10) {
        document.getElementById('usernameError').textContent = 'Username must be at least 10 characters long.';
        hasError = true;
    }

    if (password.length < 10) {
        document.getElementById('passwordError').textContent = 'Password must be at least 10 characters long.';
        hasError = true;
    }

    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
        hasError = true;
    }

    // If no errors, show success message or proceed with form submission
    if (!hasError) {
        alert('Signup successful!');
        // Proceed with form submission (e.g., submit the form or make an API request)
    }
});
