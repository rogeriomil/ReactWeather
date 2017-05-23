var React = require('react');
import {Link} from'react-router';

var Examples = (props) => {
    return (
        <div>
        <h1 className="text-center">Examples</h1>
        <p>A few examples to try:</p>
        <ol>
            <li>
                <Link to='/?city=SãoPaulo'>São Paulo</Link>
            </li>
            <li>
                <Link to='/?city=Campinas'>Campinas</Link>
            </li>
            <li>
                <Link to='/?city=Rio de janeiro'>Rio de Janeiro</Link>
            </li>
        </ol>

        </div>
    )
};

export default Examples;