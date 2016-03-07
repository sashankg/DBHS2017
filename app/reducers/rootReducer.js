var Redux = require('redux');
var routerReducer = require('react-router-redux').routerReducer;
var authReducer = require('./authReducer');
var Form = require('react-redux-form');
var rootReducer = Redux.combineReducers({
    routing: routerReducer,
    auth: authReducer,
    signupForm: Form.createModelReducer('signup', { email: '', password: '', confirm: '' })
})

module.exports = rootReducer
