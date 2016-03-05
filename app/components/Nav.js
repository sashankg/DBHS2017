var React = require('react');
var ReactRouter = require('react-router');

var Nav = React.createClass({
    render: function() {
        return (
            <nav>
                <ReactRouter.Link to="/">Link</ReactRouter.Link>
            </nav>
        );
    }
})

module.exports = Nav;
