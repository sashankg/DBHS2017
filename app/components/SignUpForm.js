var React = require('react');
var connect = require('react-redux').connect;
var Form = require('react-redux-form');
var userActions = require('../actions/userActions');

var SignUpForm = React.createClass({
    render: function() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Form.Field className="field" model='signup.email'>
                    <label>Email</label>
                    <input type="email" />
                </Form.Field>
                <Form.Field className="field" model='signup.password'>
                    <label>Password</label>
                    <input type="password" />
                </Form.Field>

                <Form.Field className="field" model='signup.confirm'>
                    <label>Password (again)</label>
                    <input type="password" />
                </Form.Field>

                <button type="submit">
                    Submit
                </button>
            </form>
        );
    },
    handleSubmit: function(event) {
        event.preventDefault();
        this.props.signupWithEmail(this.props.data.email, this.props.data.password);
    
    }
});

function mapStateToProps(state, props) {
    return { data: state.signupForm };
}

var mapDispatchToProps = {
    signupWithEmail: userActions.signupWithEmail.bind(userActions) 
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
