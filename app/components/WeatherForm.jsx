var React = require('react');
var ReactDOM = require('react-dom');

class WeatherForm extends React.Component {
    onFormSubmit(evt) {
        evt.preventDefault();
        const city = this.city.value;
        
        if (city.length > 0) {
            this.form.reset();
            this.props.onSearch(city);
        
    }

    }
    render() {
        return (
            <div>
                <form ref={(input) => this.form = input} onSubmit={(e) => this.onFormSubmit(e)}>
                    <input ref={(input) => this.city = input} type="search" placeholder="Enter City Name"/>
                    <button className="expanded hollow button" type="submit">Get Weather</button>
                </form>
            </div>
        )
                        
    }
}

export default WeatherForm;