var React = require('react');
var connect = require('react-redux').connect;
var ReactRouter = require('react-router');
var userActions = require('../actions/userActions');

var Nav = React.createClass({
    render: function() {
        var links = this.props.auth ? (
            <div className="nav-links">
                <ReactRouter.Link to="class" className="nav-link">Class</ReactRouter.Link>
                <ReactRouter.Link to="photos" className="nav-link">Photos</ReactRouter.Link>
            </div>
        ) : (
            <div className="nav-links">
                <ReactRouter.Link to="signup" className="nav-link">Sign Up</ReactRouter.Link>
                <ReactRouter.Link to="login" className="nav-link">Log In</ReactRouter.Link>
            </div>
        );
        return (
            <nav>
                {links}
            </nav>
        );
    }
})

function mapStateToProps(state) {
    return { auth: state.auth };
}

function mapDispatchToProps(dispatch) {
    return {
        login: function() {

        }
    }
}
module.exports = connect(mapStateToProps, mapDispatchToProps)(Nav);
