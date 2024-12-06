
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

function handleScrollButtonClick(event) {
const button = event.currentTarget;
const targetId = button.getAttribute('data-target');
const container = document.getElementById(targetId);
const direction = button.classList.contains('left') ? -300 : 300; 
scrollContainer(container.querySelector('.hotel-list'), direction);
}

document.addEventListener('DOMContentLoaded', () => {
const scrollButtons = document.querySelectorAll('.scroll-btn');
scrollButtons.forEach((button) => {
    button.addEventListener('click', handleScrollButtonClick);
});
});

function scrollContainer(container, amount) {
if (container) {
    container.style.transition = 'transform 0.3s ease'; 

    container.scrollBy({
        left: amount,
        behavior: 'smooth'
    });

    setTimeout(() => {
        container.style.transform = 'translateX(10px)'; 
        setTimeout(() => {
            container.style.transform = 'translateX(0px)'; 
        }, 300);
    }, 0);
}
}

// Function to search hotels
function searchHotels() {
// Get the search input value and convert it to lowercase
let query = document.getElementById('search').value.toLowerCase();

// Get all hotel cards
let hotelCards = document.querySelectorAll('.hotel-card');

// Loop through each card
hotelCards.forEach(card => {
    // Get the name of the hotel from the card's data-name attribute
    let hotelName = card.getAttribute('data-name').toLowerCase();
    
    // If the hotel name matches the query, show the card, otherwise hide it
    if (hotelName.includes(query)) {
        card.style.display = 'block';
    } else {
        card.style.display = 'none';
    }
});
}




function filterHotels() {
// Get the input value and convert it to lowercase for case-insensitive comparison
let searchQuery = document.getElementById("searchInput").value.toLowerCase();

// Get all the hotel cards
let hotelCards = document.querySelectorAll(".hotel-card");

// Loop through each hotel card
hotelCards.forEach(card => {
    // Get the name of the hotel (from the <h3> tag inside each card)
    let hotelName = card.querySelector("h3").textContent.toLowerCase();

    // Check if the hotel name includes the search query
    if (hotelName.includes(searchQuery)) {
        // If it does, show the hotel card
        card.style.display = "block";
    } else {
        // If it doesn't, hide the hotel card
        card.style.display = "none";
    }
});
}

function disableLink(event) {
    event.stopPropagation(); // Prevent the card click event
    event.preventDefault();  // Prevent any default action like link navigation
}

// Handle card click to navigate to the page
document.querySelector('.hotel-card').addEventListener('click', function() {
    window.location.href = 'hotelpage1.html'; // Manually navigate
});



