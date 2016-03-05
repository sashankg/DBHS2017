var Redux = require('redux');
var routerReducer = require('react-router-redux').routerReducer;
var authReducer = require('./authReducer');

var rootReducer = Redux.combineReducers({
    routing: routerReducer,
    auth: authReducer,
})

module.exports = rootReducer
