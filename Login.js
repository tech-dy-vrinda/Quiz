// Get references to form elements
const signupForm = document.getElementById('signup-form');
const nameInput = document.getElementById('name');
const rollNoInput = document.getElementById('rollno');
const ageInput = document.getElementById('age');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmpassword');
const errorMessage = document.getElementById('error-message');

// Function to validate form inputs
function validateForm() {
    // Check if fields are empty
    if (!nameInput.value || !rollNoInput.value || !ageInput.value || !passwordInput.value || !confirmPasswordInput.value) {
        errorMessage.textContent = 'Please fill in all fields.';
        return false;
    }

    // Check if Roll No is numeric and not more than 6 digits
    const rollNo = rollNoInput.value.trim();
    if (!/^\d{1,6}$/.test(rollNo)) {
        errorMessage.textContent = 'Roll No must be numeric and not more than 6 digits.';
        return false;
    }

    // Check if Age is numeric and not more than 150
    const age = parseInt(ageInput.value.trim());
    if (isNaN(age) || age <= 0 || age > 150) {
        errorMessage.textContent = 'Age must be numeric and between 1 and 150.';
        return false;
    }

    // Check if passwords match
    if (passwordInput.value !== confirmPasswordInput.value) {
        errorMessage.textContent = 'Passwords do not match.';
        return false;
    }

    // If all validations pass
    errorMessage.textContent = '';
    return true;
}

// Event listener for form submission
signupForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    if (validateForm()) {
        // If form is valid, submit the form
        signupForm.submit();
    }
});
