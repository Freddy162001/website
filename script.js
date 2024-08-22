document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.querySelector('.custom-cursor');
  const bubbleContainer = document.createElement('div');
  bubbleContainer.id = 'bubble-container';
  document.body.appendChild(bubbleContainer);

  function updateCursorPosition(e) {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  }

  function createBubble(x, y) {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.style.left = `${x}px`;
    bubble.style.top = `${y}px`;
    bubbleContainer.appendChild(bubble);

    setTimeout(() => bubble.remove(), 1000);
  }

  let lastBubbleTime = 0;
  const bubbleInterval = 150;

  function handleMouseMove(e) {
    updateCursorPosition(e);

    const currentTime = Date.now();
    if (currentTime - lastBubbleTime > bubbleInterval) {
      if (Math.random() < 0.3) {
        createBubble(e.clientX, e.clientY);
        lastBubbleTime = currentTime;
      }
    }
  }

  document.addEventListener('mousemove', handleMouseMove);

  // Remove any existing event listeners that might be causing the cursor to enlarge
  const clickables = document.querySelectorAll('a, button, input[type="submit"], input[type="button"]');
  clickables.forEach(el => {
    el.removeEventListener('mouseover', () => {});
    el.removeEventListener('mouseout', () => {});
  });

  const themeToggle = document.getElementById('theme-toggle'); // Ensure this element exists
  const body = document.body;

  const aboutImg = document.querySelector('.about-img img');

  function updateAboutImage() {
    if (body.classList.contains('light-mode')) {
      aboutImg.src = 'webgiphlight.gif'; // Change to light mode image
    } else {
      aboutImg.src = 'webgiph.gif'; // Change back to default image
    }
  }

  if (themeToggle) { // Check if themeToggle is defined
    themeToggle.addEventListener('change', () => {
      if (themeToggle.checked) {
        body.classList.add('light-mode');
      } else {
        body.classList.remove('light-mode');
      }
      updateAboutImage(); // Update image on theme change
    });
  }

  // Initial image update based on current theme
  updateAboutImage();
});

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
menuIcon.classList.toggle('bx-x')
navbar.classList.toggle('active');
}
const cursorDot = document.querySelector('.custom-cursor');
const bubbleContainer = document.querySelector('#bubble-container');

document.addEventListener('mousemove', (e) => {
  cursorDot.style.left = `${e.clientX}px`;
  cursorDot.style.top = `${e.clientY}px`;
  
  // Create bubbles less frequently
  if (Math.random() < 0.3) {
    createBubble(e.clientX, e.clientY);
  }
});

function createBubble(x, y) {
  const bubble = document.createElement('div');
  bubble.className = 'bubble';
  
  // Randomize bubble size
  const size = 5 + Math.random() * 10;
  
  // Randomize starting position slightly
  const offsetX = -10 + Math.random() * 20;
  const offsetY = -10 + Math.random() * 20;
  
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  bubble.style.left = `${x + offsetX}px`;
  bubble.style.top = `${y + offsetY}px`;
  
  bubbleContainer.appendChild(bubble);
  
  // Remove the bubble after animation completes
  setTimeout(() => {
    bubble.remove();
  }, 3000);
}
