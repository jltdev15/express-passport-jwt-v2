const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config();

// Import routes
const authRoutes = require("./routes/authRoutes");

// Initialize Express
const app = express();

// Body parser middleware
app.use(bodyParser.json());

// Passport middleware
app.use(passport.initialize());
require("./config/passport")(passport);

// Routes middleware
app.use("/api/auth", authRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
