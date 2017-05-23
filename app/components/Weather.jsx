import React from 'react';
import ReactDom from 'react-dom';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';

class Weather extends React.Component {
    constructor() {
        super();
            
        this.onSearch = this.onSearch.bind(this);
        
        //initial state
        this.state = {
            isLoading: false
        }
    }
    onSearch(loc) {
        
        this.setState({isLoading:true});
        var that = this;
        openWeatherMap.getTemp(loc).then(function (temp) {
            that.setState({
                city: loc,
                temp: temp,
                isLoading: false
            });
        }, function(errorMessage){
            that.setState({isLoading: false});
            alert(errorMessage);            
        });      
        
    }
    render() {
        var {isLoading, temp, city} = this.state;        

        function renderMessage() {
              if (isLoading){
                return <h3>Fetching message...</h3>;
            } else if (temp && city) {
                
                return <WeatherMessage city={city} temp={temp}/>;
                
            }
        }

        return (
            <div>
                <h2>Weather Component</h2>
                <WeatherForm onSearch={this.onSearch}/>
                {renderMessage()}
            </div>
            
        )
    }
}

export default Weather;