var Redux = require('redux');
var rootReducer = require('../reducers/rootReducer');
var routerMiddleware = require('react-router-redux').routerMiddleware;
function configureStore() {
    var middleware = routerMiddleware(history)
    var store = Redux.createStore(rootReducer)
    return store;
}

module.exports = configureStore;
