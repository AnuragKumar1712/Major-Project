document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var dob = document.getElementById('dob').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var city = document.getElementById('city').value;
    var state = document.getElementById('state').value;

    if (!name || !dob || !gender || !email || !phone || !address || !city || !state) {
        alert('Please fill out all required fields.');
        return;
    }

    // Perform further validation and submission here
});