// server.js
const express = require('index.html');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const deliveryRoutes = require('./routes/deliveryRoutes');
const restaurantRoutes = require('./routes/restaurantRoutes');

app.use('/api/delivery', deliveryRoutes);
app.use('/api/restaurant', restaurantRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  console.log("MongoDB Connected");
  app.listen(5000, () => console.log('Server running on port 5501'));
})
.catch(err => console.log(err));
// utils/geolocation.js
const haversine = require('haversine-distance');

exports.isWithinRange = (userLoc, vendorLoc, range = 3000) => {
  const distance = haversine(userLoc, vendorLoc);
  return distance <= range;
};
// controllers/deliveryController.js
const Restaurant = require('../models/Restaurant');
const { isWithinRange } = require('../utils/geolocation');

exports.getAvailableRestaurants = async (req, res) => {
  const { latitude, longitude } = req.body;
  const userLoc = { latitude, longitude };

  const restaurants = await Restaurant.find({ isActive: true });

  const nearby = restaurants.filter(rest => {
    const restLoc = { latitude: rest.lat, longitude: rest.lng };
    return isWithinRange(userLoc, restLoc) && rest.avgPrepTime <= 5;
  });

  res.json({ success: true, restaurants: nearby });
};
// models/Restaurant.js

const RestaurantSchema = new mongoose.Schema({
  name: String,
  type: { type: String, enum: ['quick-service', 'cloud-kitchen', 'home-chef'] },
  image: String,
  ecoDelivery: Boolean,
  lat: Number,
  lng: Number,
  dishes: [{ name: String, price: Number, image: String }],
  offers: [String],
  accessCode: String
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);
// utils/arIntegration.js (Sample Endpoint Stub)
exports.getARDataForDelivery = (req, res) => {
    const { orderId } = req.params;
  
    // Here you'd get real-time coordinates of delivery agent
    // This is a stub — AR visualization handled on frontend
    const deliveryAgent = {
      lat: 28.61,
      lng: 77.23,
      heading: "NE",
      image: "eco-bike.png"
    };
  
    res.json({ success: true, agent: deliveryAgent });
  };
  // models/Subscription.js

const SubscriptionSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  type: { type: String, enum: ['home-meal', 'office-meal', 'night-meal'] },
  isActive: Boolean,
  preferences: [String],
  deliveryTime: String
});

module.exports = mongoose.model1('Subscription', SubscriptionSchema);
// models/Review.js

const ReviewSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  restaurantId: mongoose.Schema.Types.ObjectId,
  rating: Number,
  comment: String,
  images: [String]
});

module.exports = mongoose.model2('Review', ReviewSchema);
// GET /api/website/footer
res.json({
    about: "This is a smart, sustainable food delivery platform...",
    social: {
        Instagram: "https://instagram.com/hyperfood",
        Twitter: "https://twitter.com/hyperfood",
        Facebook: "https://facebook.com/@hyperfood"
    }
  });
 