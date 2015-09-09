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
      lines: 2,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus nec neque nec dignissim. Suspendisse vitae facilisis ante. Nam mattis purus vel scelerisque auctor. Donec mattis felis quis dui dignissim luctus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi at urna imperdiet, pulvinar metus ac, lobortis orci. Nunc ut molestie odio. Nunc porta posuere fringilla. Nam dictum sodales magna, sed suscipit elit egestas vel. Pellentesque ultricies, quam in imperdiet porta, libero diam luctus nisi, id ornare metus tellus ac sapien. Suspendisse vitae justo posuere turpis hendrerit gravida. Ut gravida hendrerit vulputate. Etiam pharetra ligula eu gravida fringilla.\n\nPellentesque venenatis placerat leo, sed laoreet enim sollicitudin et. Aenean dapibus dui vulputate justo fringilla pretium. Duis pharetra risus nec massa malesuada, ac luctus turpis porta. Aliquam vitae fringilla nibh. Ut vitae ligula tempor, viverra leo et, efficitur diam. Fusce feugiat ligula in turpis eleifend vulputate. Aenean ultricies sollicitudin urna ac lacinia. Nullam sit amet nunc lacus. Vestibulum ac ante vel dui faucibus fermentum nec et ex.",
      backgroundColor: '#FFFFFF'
    };
  },

  render() {
    var lines = this.state.lines;
    var text = this.state.text;
    var backgroundColor = this.state.backgroundColor;

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
                    <div className='pure-u-1-2 pure-u-md-1-2'>
                      <label>Background color</label>
                      <input type='text' className='pure-u-23-24' valueLink={this.linkState('backgroundColor')}/>
                    </div>
                    <div className='pure-u-1-2 pure-u-md-1-2'>
                      <label>Text</label>
                      <textarea type='text' className='pure-u-23-24' valueLink={this.linkState('text')}/>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>

            <div className="the-example">
              <Ellipsis lines={lines} backgroundColor={backgroundColor}>
                {text}
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
