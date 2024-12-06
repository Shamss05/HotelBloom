function updatePrice() {
  // Get the selected room type and price
  const roomTypeSelect = document.getElementById('room-type');
  const selectedRoom = roomTypeSelect.options[roomTypeSelect.selectedIndex];
  const roomPrice = parseInt(selectedRoom.getAttribute('data-price').replace(/,/g, ''), 10); // Remove commas and parse

  // Get the selected number of days
  const daysSelect = document.getElementById('days');
  const numDays = parseInt(daysSelect.value, 10);

  // Calculate the total price
  const totalPrice = roomPrice * numDays;

  // Format the price with commas
  const formattedPrice = totalPrice.toLocaleString('en-US');

  // Update the total price display dynamically
  const priceValue = document.getElementById('price-value');
  priceValue.textContent = formattedPrice; // Display the formatted price
}

// Add event listeners for changes in the room type and number of days
document.getElementById('room-type').addEventListener('change', updatePrice);
document.getElementById('days').addEventListener('change', updatePrice);

// Initial call to update the price on page load
window.addEventListener('load', updatePrice);
