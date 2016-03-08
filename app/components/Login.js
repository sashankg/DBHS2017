var React = require('react');
var LoginForm = require('./LoginForm');
var Login = React.createClass({
    render: function() {
        return (
            <div className="page form">
                <h2>Login</h2>
                <FacebookLoginButton pathOnComplete='/'/>
                <LoginForm />
            </div>
        );
    }
});

module.exports = Login;
