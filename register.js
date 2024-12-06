document.querySelector(".form")?.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Extract form input values
    const firstName = document.querySelector("input[placeholder='']").value.trim();
    const lastName = document.querySelector("input[placeholder='']").value.trim();
    const email = document.querySelector("input[type='email']").value.trim();
    const password = document.querySelector("input[type='password']").value.trim();
    const confirmPassword = document.querySelectorAll("input[type='password']")[1].value.trim();

    // Error handling: Passwords must match
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Retrieve existing users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the email is already registered
    if (users.some(user => user.email === email)) {
        alert("Email is already registered!");
        return;
    }

    // Save the new user to localStorage
    users.push({ firstName, lastName, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful! Redirecting to login page.");
    window.location.href = "login.html"; // Redirect to the login page
});
