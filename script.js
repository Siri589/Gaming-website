const triggerModal = document.getElementById('trigger-modal');
const modal = document.getElementById('comic-modal');
const closeBtn = document.querySelector('.close-btn');

// When the user clicks on the trigger button, open the modal
triggerModal.addEventListener('click', () => {
  modal.style.display = "block";
});

// When the user clicks on close button, hide the modal
closeBtn.addEventListener('click', () => {
  modal.style.display = "none";
});

// When the user clicks anywhere outside the modal content, close it
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
