var React = require('react');
var ReactDOM = require('react-dom');
var configureStore = require('./app/store/configureStore');
var Provider = require('react-redux').Provider;
var ReactRouter = require('react-router');
var syncHistoryWithStore = require('react-router-redux').syncHistoryWithStore;
var userActions = require('./app/actions/userActions');

var App = require('./app/components/App');
var Home = require('./app/components/Home');
var SignUp = require('./app/components/SignUp');
var Login = require('./app/components/Login');

var history = ReactRouter.hashHistory;
var store = configureStore(history);
var syncedHistory = syncHistoryWithStore(history, store);

store.dispatch(userActions.initAuth());
ReactDOM.render(
    (
        <Provider store={store}>
            <ReactRouter.Router history={syncedHistory}>
                <ReactRouter.Route path="/" component={App}> 
                    <ReactRouter.IndexRoute component={Home} /> 
                </ReactRouter.Route>
                <ReactRouter.Route path="signup" component={SignUp} /> 
                <ReactRouter.Route path="login" component={Login} /> 
            </ReactRouter.Router>
        </Provider>
    ),
    document.getElementById('index')
);
