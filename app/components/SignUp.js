var React = require('react');
var SignUpForm = require('./SignUpForm');
var FacebookLoginButton = require('./FacebookLoginButton');
var SignUp = React.createClass({
    render: function() {
        return (
            <div className="page signup">
                <h2>Sign Up</h2>
                <FacebookLoginButton pathOnComplete='/'/>
                <SignUpForm />
            </div>
        );
    }
});

module.exports = SignUp;
