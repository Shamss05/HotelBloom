function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function scrollContainer(container, amount) {
if (container) {
    container.scrollBy({
        left: amount,
        behavior: 'smooth'  
    });
}
}
document.addEventListener('DOMContentLoaded', () => {
  // Display the initial message from the bot when the page loads
  displayMessage('Welcome to our hotel booking system! How can I assist you?', 'bot');
});

function sendMessage(userInput) {
  // Display the user's message
  displayMessage(userInput, 'user');
  // Get the bot's response
  getBotResponse(userInput);
}

function displayMessage(message, sender) {
  const messagesContainer = document.querySelector('.messages');
  const messageElement = document.createElement('div');

  // Add the icon
  const icon = document.createElement('img');
  icon.src = sender === 'user' ? 'images/user.jpg' : 'images/bot.jpg';
  icon.alt = sender === 'user' ? 'User' : 'Bot';

  // Add the text
  const text = document.createElement('span');
  text.textContent = message;

  messageElement.appendChild(icon);
  messageElement.appendChild(text);
  messageElement.className = sender;

  messagesContainer.appendChild(messageElement);

  // Auto-scroll to the latest message
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function getBotResponse(userInput) {
  let botResponse = '';

  // Bot responses based on user input
  if (userInput === 'What hotels are available?') {
    botResponse = 'We have several options! You can go to home page to know more.';
  } else if (userInput === 'Are there any current discounts?') {
    botResponse = 'Yes, we currently have discounts for bookings of 3 nights or more!';
  } else if (userInput.startsWith('I want to search for a hotel in')) {
    botResponse = 'Sure! Can you please Go To search ?';
  } else if (userInput === 'What types of rooms are available?') {
    botResponse = 'We offer single, double, and family rooms.';
  } else if (userInput === 'What is the price for a night?') {
    botResponse = 'Prices vary based on the hotel and room type. Please provide the location and dates for an exact quote.';
  } else if (userInput === 'Does the room include breakfast?') {
    botResponse = 'Many of our rooms include breakfast. Would you like me to filter options for you?';
  } else if (userInput === 'Is there free Wi-Fi?') {
    botResponse = 'Yes, most of our hotels offer free Wi-Fi!';
  } else if (userInput === 'Do you provide airport transportation?') {
    botResponse = 'Some hotels offer airport transportation. I can check this for you!';
  } else if (userInput === 'Thank you, that’s all.') {
    botResponse = 'You’re welcome! Let me know if you need anything else. Have a great day!';
  } else {
    // Default response for unknown input
    const randomResponses = [
      'I’m sorry, I didn’t understand that. Could you rephrase your question?',
      'Can I help you with something specific?',
      'Let me know if you need help with hotel options or bookings.'
    ];
    botResponse = randomResponses[Math.floor(Math.random() * randomResponses.length)];
  }

  // Display the bot's response
  displayMessage(botResponse, 'bot');
}





