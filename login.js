document.querySelector(".form")?.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Extract form input values
    const email = document.querySelector("input[type='email']").value.trim();
    const password = document.querySelector("input[type='password']").value.trim();

    // Retrieve registered users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the provided credentials match any registered user
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert(`Welcome back, ${user.firstName} !`);
        // Redirect to a dashboard or home page
        window.location.href = "index.html"; 
    } else {
        alert("Unregistered user! Please register.");
        window.location.href = "register.html";
    }
});
