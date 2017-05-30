import React from 'react';
import ReactDom from 'react-dom';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import ErrorModal from 'ErrorModal';
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
        
        this.setState({
            isLoading:true,
            errorMessage: undefined
        });
        var that = this;
        openWeatherMap.getTemp(loc).then(function (temp) {
            that.setState({
                city: loc,
                temp: temp,
                isLoading: false
            });
        }, function(e){
            that.setState({
                isLoading: false,
                errorMessage: e.message
            });
                        
        });      
        
    }
    render() {
        var {isLoading, temp, city, errorMessage} = this.state;        

        function renderMessage() {
              if (isLoading){
                return <h3 className="text-center">Fetching weather...</h3>;
            } else if (temp && city) {
                
                return <WeatherMessage city={city} temp={temp}/>;
                
            }
        }

        function renderError() {
            if (typeof errorMessage === 'string') {
                return(
                    <ErrorModal message={errorMessage}/>
                )
            }
        }


        return (
            <div>
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm onSearch={this.onSearch}/>
                {renderMessage()}
                {renderError()}
            </div>
            
        )
    }
}

export default Weather;