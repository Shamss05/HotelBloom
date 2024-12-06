// Get references to the elements
const paymentMethod = document.getElementById("paymentMethod");
const creditCardInfo = document.getElementById("creditCardInfo");
const placeholder = document.getElementById("placeholder");
const paymentForm = document.getElementById("paymentForm");

// Show or hide the credit card section based on the payment method selected
paymentMethod.addEventListener("change", function () {
  if (paymentMethod.value === "credit") {
    creditCardInfo.style.display = "block";
    placeholder.style.display = "none";
  } else if (paymentMethod.value === "cash") {
    creditCardInfo.style.display = "none";
    placeholder.style.display = "block";
  } else {
    creditCardInfo.style.display = "none";
    placeholder.style.display = "none";
  }
});

// Handle form submission
paymentForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from refreshing the page

  if (paymentMethod.value === "cash") {
    alert("Your room is reserved! We hope you have a cheerful and enjoyable stay!");
    window.location.href = "index.html"; // Redirects to index.html
  } else if (paymentMethod.value === "credit") {
    const cardNumber = document.getElementById("cardNumber").value;
    const cvv = document.getElementById("cvv").value;

    // Simple validation
    if (cardNumber.length !== 16 || isNaN(cardNumber)) {
      alert("Please enter a valid 16-digit credit card number.");
      return;
    }
    if (cvv.length !== 3 || isNaN(cvv)) {
      alert("Please enter a valid 3-digit CVV.");
      return;
    }

    alert("Your room is reserved! We hope you have a cheerful and enjoyable stay!");
    window.location.href = "index.html"; // Redirects to index.html
  } else {
    alert("Please select a payment method.");
  }
});
