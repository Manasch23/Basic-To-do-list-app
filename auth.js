// Simulated user data storage (for now, this is just an in-memory array)
let users = JSON.parse(localStorage.getItem('users')) || [];

// Signup Form Submission
document.getElementById('signup-form')?.addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('signup-username').value;
  const password = document.getElementById('signup-password').value;

  if (username && password) {
    // Check if username already exists
    const userExists = users.find(user => user.username === username);
    if (userExists) {
      alert('Username already exists. Please choose a different one.');
    } else {
      // Add new user
      users.push({ username, password });
      localStorage.setItem('users', JSON.stringify(users)); // Save to localStorage for persistence
      alert('Signup successful! Redirecting to login...');

      // Redirect to login page
      window.location.href = 'login.html';
    }
  } else {
    alert('Please fill in all fields.');
  }
});

// Login Form Submission
document.getElementById('login-form')?.addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;

  // Check if user exists and password matches
  const userExists = users.find(user => user.username === username && user.password === password);

  if (userExists) {
    alert('Login successful! Redirecting to your To-Do List...');
    // Redirect to index.html after login
    window.location.href = 'index.html';
  } else {
    alert('Incorrect username or password.');
  }
});
