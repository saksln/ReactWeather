var React = require('react');

var WeatherMessage = React.createClass({
    render: function() {
      var {temp, location} = this.props;
      return (
        <div>
          <h3 className="text-center">It's it {((temp-32) / 1.8000).toFixed(2)} in {location}</h3>
        </div>
      );
    }
});

module.exports = WeatherMessage;
