document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Dummy login logic (replace with actual logic)
    if (username && password) {
      document.getElementById('message').innerText = 'Login successful';
      // Redirect to secured page or perform other actions
    } else {
      document.getElementById('message').innerText = 'Invalid username or password';
    }
  });
  