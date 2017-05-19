var React = require('react');
import Nav from 'Nav';


var Main = (props) => {
    return (
            <div>
                <Nav />
                <h1>Main Component</h1>
                {props.children}
            </div>
        )
};

export default Main;