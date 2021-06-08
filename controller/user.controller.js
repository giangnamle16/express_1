var db = require('../db')
var shortid = require('shortid')

var users =  db.get('users')

module.exports.index = function(req, res){
    res.render('users/index', {
        users : users.value()
    });
}
module.exports.create = function(req, res) {
    res.render('users/create')
}
module.exports.search = function(req, res) {
    var q = req.query.q;
    var matchedUsers = users.value().filter(function(user) {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });

    res.render('users/index', {
        users : matchedUsers
    });
}

module.exports.login = function(req, res) {
    res.render('users/login')
}

module.exports.getInfo = function(req, res) {
    var id = req.params.id;
    var user = users.find({id: id}).value();
    console.log(user)
    res.render('users/view', {
        user : user
    })
}

module.exports.postCreate = function(req, res) {
    req.body.id = shortid.generate()
    users.push(req.body).write()
    res.redirect('/users')
    //var temp = [ users.prototype.lastIndexOf()
}