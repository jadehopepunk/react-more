'use strict';

var React = require('react/addons');
var Fork = require('react-ghfork');

var readme = require('../README.md');
var pkgInfo = require('../package.json');

//var Ellipsify = require('../lib');

module.exports = React.createClass({
  displayName: 'App',

  mixins: [React.addons.LinkedStateMixin],

  getInitialState() {
    return {
      lines: 2
    };
  },

  render() {
    var lines = this.state.lines;
    //var visibleItems = parseInt(this.state.visibleItems, 10);
    //var separator = this.state.separator;
    //var more = this.state.more;
    //var atFront = this.state.atFront;

    return (
      <div className='pure-g'>
        <Fork className='right' project={pkgInfo.user + '/' + pkgInfo.name}/>
        <header className='pure-u-1'>
          <h1>{pkgInfo.name}</h1>

          <div className='description'>{pkgInfo.description}</div>
        </header>
        <article className='pure-u-1'>
          <section className='demonstration'>
            <div className='description'>
              <h2>Demonstration</h2>

              <p>Tweak values below and see how Ellipsify behaves.</p>

              <form className='pure-form pure-form-stacked controls'>
                <fieldset>
                  <div className='pure-g'>
                    <div className='pure-u-1-2 pure-u-md-1-2'>
                      <label>Number of Lines</label>
                      <input type='number' className='pure-u-23-24' valueLink={this.linkState('lines')}/>
                    </div>
                  </div>
                </fieldset>

              </form>
            </div>
          </section>
          <section className='documentation'>
            <h2>README</h2>

            <div dangerouslySetInnerHTML={{__html: readme}}></div>
          </section>
        </article>
      </div>
    );
  },


});
