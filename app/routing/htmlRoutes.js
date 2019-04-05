// Routes
// GET route to survey
var path = require("path"); 

// Export the html routes with a passed app
module.exports = function(app) {

// When the user lands on localhost:3000/survey
app.get("/survey", (req, res) => {
    // Display survey.html to the browser
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

// When the user lands on any other path
app.get("*", (req, res) => {
     // Display home.html to the browser
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

}