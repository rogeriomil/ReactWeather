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
                return <h3 className="text-center">Fetching weather...</h3>;
            } else if (temp && city) {
                
                return <WeatherMessage city={city} temp={temp}/>;
                
            }
        }

        return (
            <div>
                <h1 className="text-center">Get Weather</h1>
                <WeatherForm onSearch={this.onSearch}/>
                {renderMessage()}
            </div>
            
        )
    }
}

export default Weather;