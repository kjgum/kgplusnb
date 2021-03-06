
//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//Server config properties
var app = express();
var PORT = process.env.PORT || 7000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/home', function(req, res) {
    res.sendFile(path.join(__dirname, 'home.html'));
})

app.get('/engagement-party', function(req, res) {
    res.sendFile(path.join(__dirname, 'engagement-party.html'));
})

// app.get('/the-details', function(req, res) {
//     res.sendFile(path.join(__dirname, 'the-details.html'));
// })

// app.get('/where-to-stay', function(req, res) {
//     res.sendFile(path.join(__dirname, 'where-to-stay.html'));
// })

// app.get('/getting-there', function(req, res) {
//     res.sendFile(path.join(__dirname, 'getting-there.html'));
// })

// app.get('/what-to-do-in-ap', function(req, res) {
//     res.sendFile(path.join(__dirname, 'what-to-do-in-ap.html'));
// })

app.get('/registry', function(req, res) {
    res.sendFile(path.join(__dirname, 'registry.html'));
})

app.get('/our-timeline', function(req, res) {
    res.sendFile(path.join(__dirname, 'our-timeline.html'));
})

// app.get('/honeymoon', function(req, res) {
//     res.sendFile(path.join(__dirname, 'honeymoon.html'));
// })

app.get('/gallery', function(req, res) {
    res.sendFile(path.join(__dirname, 'our-gallery.html'));
})

// app.get('/weekend-adjenda', function(req, res) {
//     res.sendFile(path.join(__dirname, 'weekend-adjenda.html'));
// })

// app.get('/rsvp', function(req, res) {
//     res.sendFile(path.join(__dirname, 'rsvp.html'));
// })

// app.get('/about', function(req, res) {
//     res.sendFile(path.join(__dirname, 'about.html'));
// })


app.use(function(err, req, res, next) {    
  // Do logging and user-friendly error message display    
  res.sendFile(path.join(__dirname, '404.html'));   
})


app.listen(PORT, function(){
  console.log("App listening on port: " + PORT);
})

