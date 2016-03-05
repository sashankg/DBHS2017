var React = require('react');
var Nav = require('./Nav');
var App = React.createClass({
    render: function() {
        return (
            <div className="app">
                <Nav />
                {this.props.children}
            </div>
        );
    }
});

module.exports = App;
