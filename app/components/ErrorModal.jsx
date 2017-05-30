import React from 'react';

class ErrorModal extends React.Component {
    //Setting a default title to the error modal
    static defaultProps = {
        title: 'Something Wrong'
    }

    static propTypes = {
        title: React.PropTypes.string,
        message: React.PropTypes.string.isRequired
}


    componentDidMount() {
        var modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    }
    render() {
        var {title, message} = this.props;
        return (
            <div id="error-modal" className="reveal tiny text-center" data-reveal="">
                <h4>{title}</h4>
                <p>{message}</p>
                <p>
                    <button className="button hollow" data-close="">Okay</button>
                </p>
            </div>
        )
    }
}


export default ErrorModal;
