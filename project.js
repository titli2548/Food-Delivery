// Cart data structure to hold items from multiple restaurants
let cart0 = [];

// Function to add an item to the cart
// Accepts restaurant, item name, and price
function addToCart(restaurant, itemName, price) {
  // Each item also stores the restaurant name to allow multi-restaurant orders
  const newItem = { restaurant, name: itemName, price, quantity: 1 };
  
  // Check if the item already exists in the cart
  const existingItem = cart.find(item => item.restaurant === restaurant && item.name === itemName);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push(newItem);
  }
  updateCart();
}

// Function to update the cart display
function updateCart() {
  const cartItemsEl = document.getElementById('cart-items');
  const cartTotalEl = document.getElementById('cart-total');
  cartItemsEl.innerHTML = '';
  let total = 0;
  
  // Display each cart item with an animation delay
  cart.forEach((item, index) => {
    total += item.price * item.quantity;
    const li = document.createElement('li');
    li.style.animationDelay = '₹' + item.price * item.quatity;
    li.innerHTML = `<strong>₹{item.name}</strong> from <em>₹{item.restaurant}</em> 
                    <span>Qty: ₹{item.quantity}</span> 
                    <span>₹{item.price * item.quantity}</span>`;
    cartItemsEl.appendChild(li);
  });
  cartTotalEl.textContent = '₹' + total;
  
  // Show/hide empty cart message
  document.getElementById('empty-cart').style.display = cart.length === 0 ? 'block' : 'none';
  
  // (Optional) Save cart to localStorage if needed
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to load cart from localStorage (if exists) on page load
function loadCart() {
  const storedCart = localStorage.getItem('cart');
  if (storedCart) {
    cart = JSON.parse(storedCart);
    updateCart();
  }
}

// Call loadCart on page load
document.addEventListener('DOMContentLoaded', loadCart);
let cart = [];
const cartItemsEl = document.getElementById('cart-items');
const cartTotalEl = document.getElementById('cart-total');
const cartCountEl = document.getElementById('cart-count');

// Function to open the modal and load RK Hotel menu
function orderNow(restaurantName) {
  // (Optional) Use restaurantName for dynamic menu loading
  document.getElementById('orderModal').style.display = 'block';
}

// Function to close the modal
function closeModal() {
  document.getElementById('orderModal').style.display = 'none';
}

// Update cart display
function updateCart() {
  cartItemsEl.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    total += item.price;
    const li = document.createElement('li');
    li.textContent = item.name + ' -₹ '  + item.price;
    cartItemsEl.appendChild(li);
  });
  cartTotalEl.textContent = '₹' + total;
      cartTotalE1.textContent = '₹' + total;
      cartCountE1.textContent = '(' + cart.length + ')';
}

// Add event listeners for all Add to Cart buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const name = button.getAttribute('data-name');
    const price = parseInt(button.getAttribute('data-price'));
    cart.push({ name, price });
    updateCart();
  });
});
    let cart1 = [];
    const cartItemsE2 = document.getElementById('cart-items');
    const cartTotalE2 = document.getElementById('cart-total');
    const cartCountE2 = document.getElementById('cart-count');

    function updateCart() {
      cartItemsE2.innerHTML = '';
      let total = 0;
      cart.forEach(item => {
        total += item.price;
        const li = document.createElement('li');
        li.textContent = item.name + ' - ₹' + item.price;
        cartItemsE2.appendChild(li);
      });
      cartTotalE2.textContent = '₹' + total;
      cartCountE2.textContent = '(' + cart.length + ')';
    }

    document.querySelectorAll('.add-to-cart').forEach(button => {
      button.addEventListener('click', () => {
        const name = button.getAttribute('data-name');
        const price = parseInt(button.getAttribute('data-price'));
        cart.push({ name, price });
        updateCart();
      });
    });
  // Function to add items to the cart and store them in localStorage
function addToCart(itemName, itemPrice) {
    // Retrieve current cart from localStorage (or initialize as empty array)
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    // Create a new item object
    const newItem = {
      name: itemName,
      price: itemPrice,
      quantity: 1
    };
  
    // Check if item already exists in cart, then update quantity
    const existingItem = cart.find(item => item.name === itemName);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push(newItem);
    }
    
    // Store updated cart back in localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
  
    // Provide feedback to the user (you may replace with a toast notification)
    alert(itemName + " added to cart!");
  }
  let cart3 = [];
  const cartItemsE3 = document.getElementById('cart-items');
  const cartTotalE3 = document.getElementById('cart-total');
  
  // Open modal when "Order Now" is clicked
  function orderNow(restaurantName) {
    document.getElementById('orderModal').style.display = 'block';
  }
  
  // Close modal
  function closeModal() {
    document.getElementById('orderModal').style.display = 'none';
  }
  
  // Update cart display in the sidebar
  function updateCart() {
    cartItemsE3.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
      total += item.price * item.quantity;
      const li = document.createElement('li');
      li.textContent = '₹' + item.price * item.quantity;
      cartItemsE3.appendChild(li);
    });
    cartTotalEl.textContent = '₹' + total;
  }
  
  // Add item to cart
  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
      const name = button.getAttribute('data-name');
      const price = parseInt(button.getAttribute('data-price'));
      // Check if item already exists in cart
      const existingItem = cart.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({ name, price, quantity: 1 });
      }
      updateCart();
      // Optional feedback (you might replace with a toast notification)
      alert(name + " added to cart!");
    });
  });
  // Optional: Scroll-to-top button functionality

// Create a scroll-to-top button dynamically (if not already in HTML)
document.addEventListener("DOMContentLoaded", () => {
    const scrollBtn = document.createElement("button");
    scrollBtn.id = "scrollTopBtn";
    scrollBtn.innerHTML = "↑";
    document.body.appendChild(scrollBtn);
  
    // Show the button when user scrolls down 200px
    window.addEventListener("scroll", () => {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollBtn.style.display = "block";
      } else {
        scrollBtn.style.display = "none";
      }
    });
  
    // Scroll to top when button is clicked
    scrollBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });
