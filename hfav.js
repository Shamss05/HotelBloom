document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll('.like-btn'); 
  
    buttons.forEach(button => {
      const id = button.id; 
      const isLiked = localStorage.getItem(id) === 'true'; 
  
      if (isLiked) {
        button.classList.add('active'); 
      }
 
      button.addEventListener('click', () => toggleLike(button, id));
    });
  });
  function toggleLike(button, id) {
    const isActive = button.classList.toggle('active'); 
    if (isActive) {
      localStorage.setItem(id, 'true');
    } else {
      localStorage.removeItem(id); 
    }
  }
  
  