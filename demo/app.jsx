'use strict';

var React = require('react/addons');
var Fork = require('react-ghfork');

var readme = require('../README.md');
var pkgInfo = require('../package.json');

var Ellipsis = require('../lib');

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

            <div className="the-example">
              <Ellipsis>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat leo eros, ac efficitur nisl gravida ut. Nam gravida sed ante quis fermentum. Praesent ipsum velit, commodo vitae pulvinar dapibus, ornare vel libero. Praesent eu mi non orci varius placerat. Quisque eu nisi fermentum, aliquam augue convallis, aliquet risus. Aliquam et eros posuere, consequat sapien at, congue ante. Cras commodo massa et ante iaculis, eget venenatis erat consectetur. Nullam nec porta erat.</p>
                <p>Morbi a consectetur neque. Phasellus dignissim vestibulum purus id luctus. Donec tempus mattis justo, id pulvinar leo. Proin dolor odio, cursus vel ipsum eget, facilisis ornare dui. Quisque sagittis magna tortor, eu tincidunt mi semper sed. Cras non elit ut tellus maximus molestie. Aenean mattis molestie nibh sed rhoncus.</p>
              </Ellipsis>
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
