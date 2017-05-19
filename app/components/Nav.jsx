var React = require('react');
var ReactDOM = require('react-dom');
import {Link, IndexLink} from 'react-router';

var Nav = (props) => {
    return (
            <div>
                <h1>Nav component</h1>
                <IndexLink to="/" activeClassName="active">Get Weather</IndexLink>
                <Link to="/about" activeClassName="active">About</Link>
                <Link to="/examples" activeClassName="active">Examples</Link> 
            </div>
        )
};

export default Nav;