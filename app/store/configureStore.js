var Redux = require('redux');
var rootReducer = require('../reducers/rootReducer');
var routerMiddleware = require('react-router-redux').routerMiddleware;
var thunkMiddleware = require ('redux-thunk');

function configureStore(history) {
    var createStoreWithMiddleware = Redux.applyMiddleware(
        thunkMiddleware,
        routerMiddleware(history)
    )(Redux.createStore);

    var store = createStoreWithMiddleware(rootReducer)
    return store;
}

module.exports = configureStore;
