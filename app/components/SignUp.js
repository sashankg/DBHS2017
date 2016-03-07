var React = require('react');
var SignUpForm = require('./SignUpForm');
var SignUp = React.createClass({
    render: function() {
        return (
            <div className="page signup">
                <h1>Sign Up</h1>
                <SignUpForm />
            </div>
        );
    }
});

module.exports = SignUp;
