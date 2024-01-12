function submitForm() {
  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const response = document.getElementById('response').value;

  // Display confirmation message
  const confirmationMessage = document.getElementById('confirmationMessage');
  confirmationMessage.innerHTML = `Thank you, ${name}! Your response (${response}) has been recorded. We'll be in touch!`;

  // Optional: You can add additional logic here, like sending the form data to a server.

  // Clear form fields
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('response').value = '';

  // Scroll to the confirmation message
  confirmationMessage.scrollIntoView({ behavior: 'smooth' });
}
