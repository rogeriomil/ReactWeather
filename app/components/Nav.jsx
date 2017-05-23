var React = require('react');
var ReactDOM = require('react-dom');
import {Link, IndexLink} from 'react-router';

class Nav extends React.Component {
    constructor() {
        super();
        this.onSearchBar = this.onSearchBar.bind(this);

    }
    onSearchBar(evt) {
        evt.preventDefault();        

        alert('Not working yet');
    }

    render() {
        return (
            
        <div className="top-bar">
            <div className="top-bar-left">
                <ul className="menu">
                    <li className="menu-text">ReactWeather</li>
                    <li>
                        <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
                    </li>
                    <li>
                        <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
                    </li>
                    <li>
                        <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
                    </li>
                </ul>
            </div>
            <div className="top-bar-right">
                <form onSubmit={(e) => this.onSearchBar(e)}>
                    <ul className="menu">
                        <li>
                            <input type="search" placeholder="Search weather"/>
                        </li>
                        <li>
                            <input type="submit" className="button"/>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
        )
        
    }
}

export default Nav;
