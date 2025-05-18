let isLoggedIn = false;

// Sidebar menu toggle
function toggleMenu() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("hidden");
}

// Profile menu toggle
function toggleProfileMenu() {
  updateProfileMenu();
  const profileMenu = document.getElementById("profile-menu");
  profileMenu.classList.toggle("hidden");
}

// Dynamically fill profile menu
function updateProfileMenu() {
  const menu = document.getElementById("profile-menu-items");
  menu.innerHTML = "";

  if (isLoggedIn) {
    menu.innerHTML = `<li onclick="logout()">Logout</li>`;
  } else {
    menu.innerHTML = `
      <li onclick="loadPage('login')">Login</li>
      <li onclick="loadPage('register')">Register</li>
    `;
  }
}

// Load different pages
function loadPage(pageName) {
  const page = pageName.toLowerCase().trim();
  const mainContent = document.getElementById("main-content");
  const protectedPages = ["adoption", "feedback", "donation"];

  if (protectedPages.includes(page) && !isLoggedIn) {
    alert("Please log in to access this page.");
    loadPage("login");
    return;
  }

  switch (page) {
    case "login":
      mainContent.innerHTML = `
        <div class="container">
          <div class="box">
            <h2 style="color:black">Login</h2>
            <form onsubmit="handleLogin(event)">
              <input type="email" required placeholder="Enter email"><br>
              <input type="password" required placeholder="Enter password"><br><br>
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      `;
      break;

    case "register":
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

    case "donation":
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

    case "feedback":
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

    case "organizations":
      mainContent.innerHTML = `
        <h2>Nearby Welfare Organizations</h2>
        <p>List of local animal welfare organizations coming soon...</p>
      `;
      break;

    case "adoption":
      mainContent.innerHTML = `
    <h2>Adoption</h2>
    <p>Find loving pets that need a home.</p>
    <div class="adoption-row">
      <div class="adoption-card">
        <img src="images/cat.jpg" alt="Cat" />
        <p>Cat</p>
        <button>Adopt</button>
      </div>
      <div class="adoption-card">
        <img src="images/Pomeranian.webp" alt="Pomeranian" />
        <p>Pomeranian</p>
        <button>Adopt</button>
      </div>
      <div class="adoption-card">
        <img src="images/puppies.jpg" alt="Dog" />
        <p>Dog</p>
        <button>Adopt</button>
      </div>
    </div>
  `;
      break;

    case "volunteers":
      mainContent.innerHTML = `
    <h2>Volunteers</h2>
    <p>Join our team and help make a difference.</p>
    <h4>Want to join?</h4>
    <button onclick="showVolunteerForm()">Click Here</button>
    
    <div id="volunteer-form-container" class="hidden" style="margin-top: 20px;">
      <form onsubmit="handleVolunteerForm(event)" class="form">
        <label for="volunteer-name">Name:</label><br>
        <input type="text" id="volunteer-name" required><br>
        
        <label for="volunteer-email">Email:</label><br>
        <input type="email" id="volunteer-email" required><br>
        
        <label for="volunteer-message">Why do you want to volunteer?</label><br>
        <textarea id="volunteer-message" required></textarea><br><br>
        <input type="file" placeholder="Add files if any"><br><br>
        
        <button type="submit">Submit</button>
      </form>
    </div>
  `;
      break;

    case "hospitals":
      mainContent.innerHTML = `
        <h2>Nearby Hospitals</h2>
        <p>List of animal hospitals nearby.</p>
      `;
      break;

    default:
      mainContent.innerHTML = "<p>Page not found.</p>";
      break;
  }

  document.getElementById("sidebar").classList.add("hidden");
  document.getElementById("profile-menu").classList.add("hidden");
}

// Form handlers
function handleLogin(event) {
  event.preventDefault();
  const email = event.target.querySelector('input[type="email"]').value;
  const password = event.target.querySelector('input[type="password"]').value;
  if (email && password) {
    isLoggedIn = true;
    alert("Login successful!");
    updateProfileMenu();
    loadPage("home");
  }
}

function handleVolunteerForm(event) {
  event.preventDefault();

  const name = document.getElementById("volunteer-name").value.trim();
  const email = document.getElementById("volunteer-email").value.trim();
  const message = document.getElementById("volunteer-message").value.trim();

  if (name && email && message) {
    alert("Thank you for volunteering! We’ll contact you soon.");
    event.target.reset();
    const formContainer = document.getElementById("volunteer-form-container");
    formContainer.classList.add("hidden");
  } 
  else {
    alert("Please fill in all fields.");
  }
}

function showVolunteerForm() {
  const formContainer = document.getElementById("volunteer-form-container");
  formContainer.classList.remove("hidden");
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
  loadPage("home");
}

// Initialize profile menu on page load
window.onload = function () {
  updateProfileMenu();
};

// Optional: Hide profile menu when clicking outside
document.addEventListener("click", function (e) {
  const profileIcon = document.querySelector(".profile");
  const menu = document.getElementById("profile-menu");
  if (!profileIcon.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.add("hidden");
  }
});
