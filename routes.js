var express = require('express')
var routes = express.Router()
var jwt = require('express-jwt');
var auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload'
});
var indexController = require('./controllers/index')
var signupController = require('./controllers/signup')
var signinController = require('./controllers/signin')
var catController = require('./controllers/cat')
var catFlapController = require('./controllers/catFlap')
routes.get('/', indexController.get);

routes.post('/api/signup', signupController.post);

routes.post('/api/signin', signinController.post);

routes.get('/api/cat',auth, catController.getlist);

routes.post('/api/cat',auth, catController.post);

routes.get('/api/cat/:rfid',auth, catController.get);

routes.delete('/api/cat/:rfid',auth, catController.delete);

routes.put('/api/cat/:rfid',auth, catController.put);

routes.get('/api/catFlap',auth, catFlapController.getlist);

routes.post('/api/catFlap',auth, catFlapController.post);

routes.get('/api/catFlap/:id',auth, catFlapController.get);

routes.delete('/api/catFlap/:id',auth, catFlapController.delete);

routes.put('/api/catFlap/:id',auth, catFlapController.put);


module.exports = routes
