//API Routes
var path = require("path");


// Imports friend data
var friendData = require("../data/friends");

//Export the api routes with app passed in
module.exports = function(app) {

    // GET request to get the friend data
    app.get("/api/friends", (req, res) => {
        res.json(friendData);
    });

    //Post resquest to get most compatable friend
    app.post("/api/friends", (req, res) => {
        //TODO add logic to determine wht friend is most compatable


        //create var for user number results
        var results = req.body

        //create var for most compatable person based on results
        var mostCompat;


        // return the mostCompat var to the user to display
        return mostCompat
    })
}