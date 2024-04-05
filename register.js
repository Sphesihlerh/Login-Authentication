document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    // Dummy registration logic (replace with actual logic)
    if (username && email && password) {
      document.getElementById('message').innerText = 'Registration successful';
      // Redirect to login page or perform other actions
    } else {
      document.getElementById('message').innerText = 'Please fill in all fields';
    }
  });
  