let isLoggedIn = false; // Global login state

// Toggle sidebar menu visibility
function toggleMenu() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('hidden');
}

// Toggle profile menu visibility
function toggleProfileMenu() {
  updateProfileMenu(); // Ensure correct items show
  const profileMenu = document.getElementById('profile-menu');
  profileMenu.classList.toggle('hidden');
}

// Update profile menu items based on login state
function updateProfileMenu() {
  const menu = document.getElementById('profile-menu-items');
  menu.innerHTML = '';

  if (isLoggedIn) {
    menu.innerHTML = `<li onclick="logout()">Logout</li>`;
  } else {
    menu.innerHTML = `
      <li onclick="loadPage('login')">Login</li>
      <li onclick="loadPage('register')">Register</li>
    `;
  }
}

// Simulated page loading
function loadPage(pageName) {
  const page = pageName.toLowerCase().trim();
  const mainContent = document.getElementById('main-content');
  const protectedPages = ['adoption', 'feedback', 'donation'];

  if (protectedPages.includes(page) && !isLoggedIn) {
    alert("Please log in to access this page.");
    loadPage('login');
    return;
  }

  switch (page) {
    case 'login':
      mainContent.innerHTML = `
        <h2>Login</h2>
        <form onsubmit="handleLogin(event)">
          <label>Email:</label><br>
          <input type="email" required><br>
          <label>Password:</label><br>
          <input type="password" required><br><br>
          <button type="submit">Login</button>
        </form>
      `;
      break;

    case 'register':
      mainContent.innerHTML = `
        <h2>Register</h2>
        <form onsubmit="handleRegister(event)">
          <label>Name:</label><br>
          <input type="text" required><br>
          <label>Email:</label><br>
          <input type="email" required><br>
          <label>Password:</label><br>
          <input type="password" required><br><br>
          <button type="submit">Register</button>
        </form>
      `;
      break;

    case 'donation':
      mainContent.innerHTML = `
        <h2>Make a Donation</h2>
        <form onsubmit="handleDonation(event)">
          <label>Name:</label><br>
          <input type="text" required><br>
          <label>Amount (₹):</label><br>
          <input type="number" required><br>
          <label>Payment Method:</label><br>
          <select required>
            <option value="">Select</option>
            <option>UPI</option>
            <option>Card</option>
            <option>Net Banking</option>
          </select><br><br>
          <button type="submit">Donate</button>
        </form>
      `;
      break;

    case 'feedback':
      mainContent.innerHTML = `
        <h2>Feedback</h2>
        <form onsubmit="handleFeedback(event)">
          <label>Your Name:</label><br>
          <input type="text" required><br>
          <label>Your Feedback:</label><br>
          <textarea required></textarea><br><br>
          <button type="submit">Submit</button>
        </form>
      `;
      break;

    case 'organizations':
      mainContent.innerHTML = `
        <h2>Nearby Welfare Organizations</h2>
        <p>List of local animal welfare organizations coming soon...</p>
      `;
      break;

    case 'adoption':
      mainContent.innerHTML = `
        <h2>Adoption</h2>
        <p>Find loving pets that need a home.</p>
      `;
      break;

    case 'volunteers':
      mainContent.innerHTML = `
        <h2>Volunteers</h2>
        <p>Join our team and help make a difference.</p>
      `;
      break;

    case 'hospitals':
      mainContent.innerHTML = `
        <h2>Nearby Hospitals</h2>
        <p>List of animal hospitals nearby.</p>
      `;
      break;

    default:
      mainContent.innerHTML = '<p>Page not found.</p>';
      break;
  }

  document.getElementById('sidebar').classList.add('hidden');
  document.getElementById('profile-menu').classList.add('hidden');
}

// Handlers
function handleLogin(event) {
  event.preventDefault();
  isLoggedIn = true;
  alert("Login successful!");
  updateProfileMenu();
  loadPage('home');
}

function handleRegister(event) {
  event.preventDefault();
  alert("Registration successful!");
}

function handleDonation(event) {
  event.preventDefault();
  alert("Thank you for your generous donation!");
}

function handleFeedback(event) {
  event.preventDefault();
  alert("Thank you for your feedback!");
}

function logout() {
  isLoggedIn = false;
  alert("Logged out successfully!");
  updateProfileMenu();
  loadPage('home');
}
