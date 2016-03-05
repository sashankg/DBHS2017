var Redux = require('redux');
var routerReducer = require('react-router-redux').routerReducer;
var rootReducer = Redux.combineReducers({
    routing: routerReducer
})

module.exports = rootReducer
