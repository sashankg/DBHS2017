var React = require('react');
var ReactDOM = require('react-dom');
var Provider = require('react-redux').Provider;
var App = require('./app/components/App');

ReactDOM.render(
    (
        <Provider store={null}>
            <App />
        </Provider>
    ),
    document.getElementById('index')
);
