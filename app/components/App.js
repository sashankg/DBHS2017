var React = require('react');
var connect = require('react-redux').connect;
var userActions = require('../actions/userActions');
var Nav = require('./Nav');
var Home = require('./Home');
var App = React.createClass({
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
    }
}

var mapDispatchToProps = {
}


module.exports = connect(mapStateToProps, mapDispatchToProps)(App);
