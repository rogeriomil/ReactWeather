var React = require('react');


/*class WeatherMessage extends React.Component {
    render() {
        var {temp, city} = this.props;
        return (
            <p>The Wether is {temp}º in {city}</p>
                           
        )
    }
}*/

var WeatherMessage = ({temp, city}) => {
    return (
        <p>The Weather is {temp}º in {city}</p>                           
        )
}

export default WeatherMessage;