var React = require('react');
var connect = require('react-redux').connect;
var userActions = require('../actions/userActions');
var Nav = require('./Nav');
var Home = require('./Home');
var App = React.createClass({
    componentDidMount: function() {
        if(this.props.auth) {
            this.props.initAuth(); 
        }
    },
    render: function() {
        return (
            <div className="app">
                <Nav />
                { this.props.children }
            </div>
        );
    }
});

function mapStateToProps(state, props) {
    return {
        auth: state.auth 
    }
}

var mapDispatchToProps = {
    initAuth: userActions.initAuth
}


module.exports = connect(mapStateToProps, mapDispatchToProps)(App);
