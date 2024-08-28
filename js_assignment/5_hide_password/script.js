document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password');
    const togglePasswordButton = document.getElementById('togglePassword');

    togglePasswordButton.addEventListener('click', () => {
        // Toggle the type attribute of the password input field
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);

        // Toggle the eye icon between showing and hiding
        togglePasswordButton.textContent = type === 'password' ? '🔒' : '👁️';
    });
});
