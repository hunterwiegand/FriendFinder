//        Dependencies
// ======================================================
var express = require("express");
// ======================================================

// Set up Express App
// ======================================================
var app = express();
var PORT = process.env.PORT || 3000;
// ======================================================

// Set up Express App to handle parsing data
// ======================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// ======================================================

// Import routes 
// ======================================================
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
// ======================================================



//Listener
// ======================================================
app.listen(PORT, () => {
  console.log("APP listening on PORT: " + PORT);
})
// ======================================================