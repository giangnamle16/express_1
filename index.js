var db = require('./db')
var express = require('express')
var shortid = require('shortid')
var app = express()
var port = 4000

var userRoute = require('./routes/user.route')

app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencode
//First middleware before response is sent

app.set('view engine', 'pug')
app.set('views', './views');

var users =  db.get('users')

//Route handler
app.get('/', function(req, res) {
    res.render('index');
})

app.use(express.static('public'))

app.use('/users', userRoute)

app.listen(port, function() {
	console.log("Server listening on port: " + port);
})
