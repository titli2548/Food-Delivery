const path = require('index.html');

// Serve frontend from "frontend" folder
app.use(express.static(path.join(__dirname, 'frontend')));

// Handle all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});
// script.js (frontend)
const userLocation = {
    latitude: 28.6139,
    longitude: 77.2090
  };
  
  async function fetchNearbyRestaurants() {
    const response = await fetch('/api/delivery/check-delivery-availability', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userLocation)
    });
  
    const data = await response.json();
    renderRestaurants(data.restaurants);
  }
  
  function renderRestaurants(restaurants) {
    const container = document.querySelector('#restaurant-list');
    container.innerHTML = '';
  
    restaurants.forEach(r => {
      const card = `
        <div class="restaurant-card animated fadeInUp">
          <img src="${r.image}" alt="${r.name}" />
          <h3>${r.name}</h3>
          <p>Type: ${r.type}</p>
          <p>Eco-Friendly: ${r.ecoDelivery ? 'Yes' : 'No'}</p>
          <button>Order Now</button>
        </div>
      `;
      container.innerHTML += card;
    });
  }
  
  // Call on load
  fetchNearbyRestaurants();