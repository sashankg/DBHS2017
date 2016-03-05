var React = require('react');
var connect = require('react-redux').connect;
var ReactRouter = require('react-router');
var userActions = require('../actions/userActions');

var Nav = React.createClass({
    render: function() {
        return (
            <nav>
                <p >{this.props.loggedIn ? "logged in" : "not" }</p>
                <button onClick={this.props.login}>Log In</button>
            </nav>
        );
    }
})

function mapStateToProps(state) {
    return state.auth;
}

function mapDispatchToProps(dispatch) {
    return {
        login: function() {
            dispatch(userActions.login);
        }
    }
}
module.exports = connect(mapStateToProps, mapDispatchToProps)(Nav);
