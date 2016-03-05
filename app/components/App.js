var React = require('react');
var connect = require('react-redux').connect;
var userActions = require('../actions/userActions');
var Nav = require('./Nav');

var App = React.createClass({
    componentDidMount: function() {
        this.props.initAuth(); 
    },
    render: function() {
        return (
            <div className="app">
                <Nav />
                {this.props.children}
            </div>
        );
    }
});

function mapStateToProps(state) {
    return {
        loggedIn: state.auth 
    }
}

function mapDispatchToProps(dispatch) {
    return {
        initAuth: function() {
            dispatch(userActions.initAuth);
        }
    }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(App);
