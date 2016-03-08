var React = require('react');
var userActions = require('../actions/userActions');
var connect = require('react-redux').connect;

var FacebookLoginButton = React.createClass({
    render: function() {
        return (
            <button className="facebook-login" onClick={this.login}>
                <img src="resources/facebook-logo.png" alt="" />
                <span>Continue with Facebook</span>
            </button>
        );
    },
    login: function() {
        console.log('hello');
        this.props.authWithFacebook(this.props.pathOnComplete);
    }
});

var mapDispatchToProps = {
    authWithFacebook: userActions.authWithFacebook
}
module.exports = connect(null, mapDispatchToProps)(FacebookLoginButton);
