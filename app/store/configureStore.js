var Redux = require('redux');
var rootReducer = require('../reducers/rootReducer');

function configureStore() {
    var store = Redux.createStore(rootReducer)
    return store;
}

module.exports = configureStore;
