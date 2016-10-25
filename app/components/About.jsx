var React = require('react');

/*
var About = React.createClass({
  render: function() {
    return (
      <h3>About Component</h3>
    );
  }
});
*/

var About = (props) => {
  return (
    <div>
      <h3 className="text-center">About</h3>
      <p>
        Here are som of the tools I used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the Javascript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weaher Map</a> - I used Open Weather Map to search for weather data by city name.
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
