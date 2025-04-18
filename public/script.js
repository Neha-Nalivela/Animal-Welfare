function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("hidden");
  }
  
  function loadPage(page) {
    const main = document.getElementById("main-content");
    fetch(`/api/${page}`)
      .then(res => res.json())
      .then(data => {
        main.innerHTML = `<h2>${page.toUpperCase()}</h2><pre>${JSON.stringify(data, null, 2)}</pre>`;
      })
      .catch(() => {
        main.innerHTML = `<h2>${page.toUpperCase()}</h2><p>Could not load data.</p>`;
      });
  }
  