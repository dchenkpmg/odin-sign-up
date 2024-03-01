document.querySelector('#registrationForm').addEventListener('submit', (event) => {
  var password = document.querySelector('#password').value;
  var confirmPassword = document.querySelector('#confirm');

  if (password !== confirmPassword.value) {
    document.querySelector('#error').style.color = "red";
    document.querySelector('#password').style.border
    document.querySelector('#error').style.fontSize = "12px";
    document.querySelector('#error').textContent = "*The passwords do not match.";
    event.preventDefault(); // prevent form submission. 
  } else {
    document.querySelector('#error').textContent = "";
  }
});