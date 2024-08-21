let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
menuIcon.classList.toggle('bx-x')
navbar.classList.toggle('active');
}
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission

  // Get the form data
  const formData = new FormData(event.target);

  // Send the form data to Formspree
  fetch(event.target.action, {
    method: form.method,
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      // The form was submitted successfully
      alert('Thank you for your message!');
      form.reset(); // Reset the form
    } else {
      // There was an error submitting the form
      alert('Oops! There was a problem sending your message.');
    }
  }).catch(error => {
    // There was a network error
    alert('Oops! There was a network error. Please try again later.');
  });
});