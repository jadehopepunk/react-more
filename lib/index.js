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

  getInitialState() {
    return {
      expanded: false
    }
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

  toggleExpansion(event) {
    this.setState({expanded: !this.state.expanded});
  },

  getElementStyles() {
    const lineHeight = 20;
    const height = this.props.lines * lineHeight;

    let result = {
      'line-height': `${lineHeight}px`,
      'background-color': this.props.backgroundColor
    };
    if (!this.state.expanded) {
      result['height'] = `${height}px`
    }
    return result;
  },

  render() {
    let linkStyles = {
      'background-image': `linear-gradient(to right, transparent, ${this.props.backgroundColor} 80%)`
    };

    let onClickMore = (event) => {
      event.preventDefault();
      this.toggleExpansion();
    };

    let toggleLink = null;

    if (this.state.expanded) {
      toggleLink = <a className="contractResizableEllipsis" ref="lessLink" onClick={onClickMore}>less</a>
    } else {
      toggleLink = <a className="expandResizableEllipsis" ref="moreLink" onClick={onClickMore} style={linkStyles}>more</a>
    }

    return (
      <Resizable className="resizableEllipsis" style={this.getElementStyles()} onResize={() => {this.onResize()}}>
        <div className="resizableEllipsisContents">
          {this.props.children}
        </div>
        {toggleLink}
      </Resizable>
    );
  },
});
