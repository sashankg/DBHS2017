var React = require('react');
var connect = require('react-redux').connect;
var Form = require('react-redux-form');
var userActions = require('../actions/userActions');

var LoginForm = React.createClass({
    render: function() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Form.Field className="field" model='login.email'>
                    <label>Email</label>
                    <input type="email" />
                </Form.Field>
                <Form.Field className="field" model='login.password'>
                    <label>Password</label>
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
        this.props.login(this.props.data.email, this.props.data.password);
    }
});

function mapStateToProps(state, props) {
    return { data: state.loginForm };
}

var mapDispatchToProps = {
    login: userActions.loginWithEmail.bind(userActions) 
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(LoginForm);
