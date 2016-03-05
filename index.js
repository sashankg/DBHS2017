var React = require('react');
var ReactDOM = require('react-dom');
var configureStore = require('./app/store/configureStore');
var Provider = require('react-redux').Provider;
var ReactRouter = require('react-router');

var App = require('./app/components/App');
var Home = require('./app/components/Home');

var store = configureStore();
var history = ReactRouter.hashHistory;

ReactDOM.render(
    (
        <Provider store={store}>
            <ReactRouter.Router history={history}>
                <ReactRouter.Route path="/" component={App}> 
                    <ReactRouter.IndexRoute component={Home} /> 
                </ReactRouter.Route>
            </ReactRouter.Router>
        </Provider>
    ),
    document.getElementById('index')
);
