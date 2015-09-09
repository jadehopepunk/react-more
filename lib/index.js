'use strict';
var React = require('react');
var Resizable = require('react-component-resizable');
//var cloneWithProps = React.addons.cloneWithProps;
//
//var More = require('./more.jsx');


module.exports = React.createClass({
  displayName: 'ResizableEllipsis',

  propTypes: {
    lines: React.PropTypes.number
  },

  getDefaultProps() {
    return {
      lines: 2
    };
  },

  onResize() {
    console.log(this);
  },

  render() {
    return (
      <Resizable className="resizableEllipsis" onResize={() => {this.onResize()}}>
        <a className="expandResizableEllipsis">more</a>
        <div className="resizableEllipsisContents">
          {this.props.children}
        </div>
      </Resizable>
    );
  },
});
