var React = require('react');


var About = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">About</h1>
            <p>This app was made by <strong>Rogerio Nunes</strong> using:</p>
            <ul>
                <li>React.js</li>
                <li>ES6</li>
                <li>Webpack</li>
                <li>Foundation</li>
                <li>React-router</li>
                <li>OpenWeather API</li>
            </ul>
        </div>
    )
};

export default About;