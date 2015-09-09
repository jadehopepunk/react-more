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
      lines: 2,
      backgroundColor: 'white'
    };
  },

  onResize() {
    console.log('resize');
    this.recheckHeight();
  },

  recheckHeight() {
    let mainDiv = React.findDOMNode(this);
    const insideBigger = (mainDiv.scrollHeight > (mainDiv.clientHeight + 4));

    console.log('clientHeight', mainDiv.clientHeight);
    console.log('scrollHeight', mainDiv.scrollHeight);
    console.log('insideBigger', insideBigger);

    let moreLink = React.findDOMNode(this.refs.moreLink);

    if (insideBigger) {
      moreLink.style.display = 'block';
    } else {
      moreLink.style.display = 'none';
    }
  },

  componentDidUpdate() {
    this.recheckHeight();
  },

  componentDidMount() {
    this.recheckHeight();
  },

  render() {
    const lineHeight = 20;
    const height = this.props.lines * lineHeight;


    let styles = {
      height: `${height}px`,
      'line-height': `${lineHeight}px`,
      'background-color': this.props.backgroundColor
    };

    let contentStyles = {

    };

    let linkStyles = {
      'background-image': `linear-gradient(to right, transparent, ${this.props.backgroundColor} 80%)`
    };

    return (
      <Resizable className="resizableEllipsis" style={styles} onResize={() => {this.onResize()}}>
        <a className="expandResizableEllipsis" ref="moreLink" style={linkStyles}>more</a>
        <div className="resizableEllipsisContents" style={contentStyles}>
          {this.props.children}
        </div>
      </Resizable>
    );
  },
});
