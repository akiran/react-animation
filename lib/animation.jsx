var React = require('react');
var ReactCSSTransitionGroup = require('./ReactCSSTransitionGroup');

var Animation = React.createClass({
  render: function () {
    return (
      <ReactCSSTransitionGroup {...this.props}>
        {this.props.children}
      </ReactCSSTransitionGroup>
    );
  }
});

module.exports = Animation;