var React = require('react');
var {Link} = require('react-router');

var Examples = React.createClass({
  render: function() {
    return (
      <div>
        <h1 className="text-center">Examples</h1>
        <p>Here are a few example locations to try out:</p>
        <ol>
          <li>
            <Link to='/?location=Buriram'>Buiram,</Link>
          </li>
          <li>
            <Link to='/?loaction=Liverpool'>Liverpoll, England</Link>
          </li>
        </ol>
      </div>
    );
  }
});

module.exports = Examples;
