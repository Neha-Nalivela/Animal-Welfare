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
    case "home":
  mainContent.innerHTML = `
    <h2>Welcome to the Animal Welfare Platform</h2>
    <p>Use the sidebar to navigate through the sections.</p>
  `;
  break;

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
    <p>Here are some local animal welfare organizations you can connect with:</p>
    <div class="org-list">
      <div class="org-card">
        <h3>Happy Paws Shelter</h3>
        <p>1234 Paw Street, Pet City</p>
        <p>Phone: <a href="tel:+1234567890">+1 234 567 890</a></p>
        <p>Website: <a href="https://happypaws.org" target="_blank">happypaws.org</a></p>
      </div>
      <div class="org-card">
        <h3>Furry Friends Rescue</h3>
        <p>5678 Tail Avenue, Animal Town</p>
        <p>Phone: <a href="tel:+1987654321">+1 987 654 321</a></p>
        <p>Website: <a href="https://furryfriendsrescue.com" target="_blank">furryfriendsrescue.com</a></p>
      </div>
      <div class="org-card">
        <h3>Safe Haven Animal Care</h3>
        <p>9101 Whisker Blvd, Petville</p>
        <p>Phone: <a href="tel:+1122334455">+1 122 334 455</a></p>
        <p>Website: <a href="https://safehavenanimalcare.org" target="_blank">safehavenanimalcare.org</a></p>
      </div>
    </div>
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
    
    <figure>
      <div class="adoption-row">
      <div class="adoption-card">
        <img src="images/Harsha.jpg" alt="Harsh" />
        <p>Description</p>
      </div>
      <div class="adoption-card">
        <img src="images/Hema.jpg" alt="Hema" />
        <p>Description</p>
      </div>
      <div class="adoption-card">
        <img src="images/Lakshmi.jpg" alt="Lakshmi" />
        <p>Description</p>
        </div>
      </div>
    </figure>
    
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
    <h2>Nearby Animal Hospitals</h2>
    <input
      id="search-input"
      type="text"
      placeholder="Search hospitals by name or address..."
      oninput="handleSearch(this.value)"
      class="search"
      style="margin-bottom: 20px; padding: 8px; width: 100%; max-width: 400px;"
    />
    <div id="hospital-results" class="hospital-list">
      <div class="hospital-card">
        <h3>Healthy Paws Veterinary Clinic</h3>
        <p>101 Petcare Road, Animal City</p>
        <p>Phone: <a href="tel:+1234509876">+1 234 509 876</a></p>
        <p>Website: <a href="https://healthypawsvet.com" target="_blank">healthypawsvet.com</a></p>
      </div>
      <div class="hospital-card">
        <h3>Compassionate Animal Hospital</h3>
        <p>202 Fur Street, Petville</p>
        <p>Phone: <a href="tel:+1987601234">+1 987 601 234</a></p>
        <p>Website: <a href="https://compassionateanimalhospital.org" target="_blank">compassionateanimalhospital.org</a></p>
      </div>
      <div class="hospital-card">
        <h3>Paws & Claws Emergency Vet</h3>
        <p>303 Tail Blvd, Critter Town</p>
        <p>Phone: <a href="tel:+1123456789">+1 123 456 789</a></p>
        <p>Website: <a href="https://pawsandclawsvet.com" target="_blank">pawsandclawsvet.com</a></p>
      </div>
    </div>
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

  const form = event.target;
  const email = form.querySelector('input[type="email"]').value.trim();
  const password = form.querySelector('input[type="password"]').value;

  fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  })
  .then(res => {
    if (!res.ok) {
      return res.json().then(data => { throw new Error(data.message || 'Login failed'); });
    }
    return res.json();
  })
  .then(data => {
    // Store token if you want to use it later
    localStorage.setItem('token', data.token);

    isLoggedIn = true;
    alert('Login successful!');
    updateProfileMenu();
    loadPage('home');
  })
  .catch(err => alert('Error: ' + err.message));
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

  const form = event.target;
  const name = form.querySelector('input[type="text"]').value.trim();
  const email = form.querySelector('input[type="email"]').value.trim();
  const password = form.querySelector('input[type="password"]').value;

  fetch('http://localhost:5000/api/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password })
  })
  .then(res => {
    if (!res.ok) {
      return res.json().then(data => { throw new Error(data.message || 'Registration failed'); });
    }
    return res.json();
  })
  .then(data => {
    alert('Registration successful! You can now login.');
    loadPage('login');
  })
  .catch(err => alert('Error: ' + err.message));
}


function handleDonation(event) {
  event.preventDefault();
  alert("Thank you for your generous donation!");
  loadPage("home");
}

function handleFeedback(event) {
  event.preventDefault();
  alert("Thank you for your feedback!");
  loadPage("home");
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

const hospitals = [
  {
    name: "Healthy Paws Veterinary Clinic",
    address: "101 Petcare Road, Animal City",
    phone: "+1 234 509 876",
    website: "https://healthypawsvet.com",
  },
  {
    name: "Compassionate Animal Hospital",
    address: "202 Fur Street, Petville",
    phone: "+1 987 601 234",
    website: "https://compassionateanimalhospital.org",
  },
  {
    name: "Paws & Claws Emergency Vet",
    address: "303 Tail Blvd, Critter Town",
    phone: "+1 123 456 789",
    website: "https://pawsandclawsvet.com",
  },
];

function handleSearch(query) {
  query = query.toLowerCase();
  const filteredHospitals = hospitals.filter((hospital) => {
    return (
      hospital.name.toLowerCase().includes(query) ||
      hospital.address.toLowerCase().includes(query)
    );
  });

  const resultsContainer = document.getElementById("hospital-results");

  if (filteredHospitals.length === 0) {
    resultsContainer.innerHTML = "<p>No results found.</p>";
  } else {
    resultsContainer.innerHTML = filteredHospitals
      .map(
        (h) => `
      <div class="hospital-card">
        <h3>${h.name}</h3>
        <p>${h.address}</p>
        <p>Phone: <a href="tel:${h.phone}">${h.phone}</a></p>
        <p>Website: <a href="${h.website}" target="_blank">${h.website}</a></p>
      </div>
    `
      )
      .join("");
  }
}

