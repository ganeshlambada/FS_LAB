document.getElementById("registrationForm").addEventListener("submit", function(event) {
    const fname = document.getElementById("Fname").value.trim();
    const lname = document.getElementById("Lname").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const rePassword = document.getElementById("re-password").value;

    let errors = [];

    if (fname.length < 3) errors.push("First Name must be at least 3 characters.");
    if (lname.length < 3) errors.push("Last Name must be at least 3 characters.");
    if (!/^\d{10}$/.test(phone)) errors.push("Phone number must be 10 digits.");
    if (password.length < 6) errors.push("Password must be at least 6 characters.");
    if (password !== rePassword) errors.push("Passwords do not match.");

    if (errors.length > 0) {
        alert(errors.join("\n"));
        event.preventDefault();
    } else {
        alert("Form submitted successfully!");
        event.preventDefault();
    }
});
