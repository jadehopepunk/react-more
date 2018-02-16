'use strict';
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');
var React = require('react');
var ReactDOM = require('react-dom');

module.exports = createReactClass({
  displayName: 'More',

  propTypes: {
    lines: PropTypes.number
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
    this.recheckHeight();
  },

  recheckHeight() {
    var mainDiv = ReactDOM.findDOMNode(this);
    var insideBigger = (mainDiv.scrollHeight > (mainDiv.clientHeight + 4));

    var moreLink = this.refs.moreLink;

    if (moreLink) {
      if (insideBigger) {
        moreLink.style.display = 'block';
      } else {
        moreLink.style.display = 'none';
      }
    }
  },

  componentDidMount: function() {
    window.addEventListener('resize', this.recheckHeight);
    this.recheckHeight();
  },

  componentWillUnmount: function() {
    window.removeEventListener('resize', this.recheckHeight);
  },

  componentDidUpdate() {
    this.recheckHeight();
  },

  toggleExpansion(event) {
    this.setState({expanded: !this.state.expanded});
  },

  getElementStyles() {
    var lineHeight = 20;
    var height = this.props.lines * lineHeight;

    var result = {
      lineHeight:      `${lineHeight}px`,
      backgroundColor: this.props.backgroundColor
    };
    if (!this.state.expanded) {
      result.maxHeight = `${height}px`
    }
    return result;
  },

  render() {
    var linkStyles = {
      backgroundImage: `linear-gradient(to right, transparent, ${this.props.backgroundColor} 80%)`
    };

    var onClickMore = (event) => {
      event.preventDefault();
      this.toggleExpansion();
    };

    var toggleLink = null;

    if (this.state.expanded) {
      toggleLink = <a className="contractMore toggleMore" ref="lessLink" onClick={onClickMore}>less</a>
    } else {
      toggleLink = <a className="expandMore toggleMore" ref="moreLink" onClick={onClickMore} style={linkStyles}>more</a>
    }

    return (
      <div className="hasMore" style={this.getElementStyles()}>
        <div className="moreContents">
          {this.props.children}
        </div>
        {toggleLink}
      </div>
    );
  },
});
