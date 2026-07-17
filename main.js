function checkName() {
    let name = document.getElementById("name").value;

    let pattern = /^[a-z]+$/;

    if (pattern.test(name)) {
        alert("Name is valid");
    } else {
        alert("Please enter only lowercase letters.");
    }
}

function checkPhone() {
    let phone = document.getElementById("phone").value.trim();

    let pattern = /^\d{11}$/;

    if (pattern.test(phone)) {
        alert("Phone number is valid");
    } else {
        alert("Phone must contain 11 digits");
    }
}

function checkEmail() {
    let email = document.getElementById("email").value.trim();

    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        alert("Email is required");
    } else if (pattern.test(email)) {
        alert("Email is valid");
    } else {
        alert("Please enter a valid email address");
    }
}

function checkPassword() {
    let password = document.getElementById("pdata").value.trim();

    let pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (password === "") {
        alert("Password is required");
    } else if (pattern.test(password)) {
        alert("Password is valid");
    } else {
        alert("Password must be at least 8 characters and include uppercase, lowercase, number, and special character.");
    }
}