document.getElementById("check-btn").addEventListener("click", function() {
    let password = document.getElementById("password-input").value;
    let isValid = true;
    let messages = [];

    if (password.length < 8) {
        isValid = false;
        messages.push("Password must be at least 8 characters long.");
    }
    if (!/[A-Z]/.test(password)) {
        isValid = false;
        messages.push("Password must contain at least one uppercase letter.");
    }
    if (!/[a-z]/.test(password)) {
        isValid = false;
        messages.push("Password must contain at least one lowercase letter.");
    }
    if (!/[0-9]/.test(password)) {
        isValid = false;
        messages.push("Password must contain at least one number.");
    }
    if (!/[!@#$%^&*]/.test(password)) {
        isValid = false;
        messages.push("Password must contain at least one special character (e.g., !@#$%^&*).");
    }

    if (!isValid) {
        Swal.fire({
            title: 'Invalid Password',
            text: messages.join("\n"),
            icon: 'error',
            confirmButtonText: 'Okay'
        });
    } else {
        Swal.fire({
            title: 'Success!',
            text: "Password is valid!",
            icon: 'success',
            confirmButtonText: 'Great!'
        });
        document.getElementById("result").textContent = "Password is valid!";
    }
});




