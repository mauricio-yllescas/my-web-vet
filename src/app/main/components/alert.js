import React, {Component } from 'react';

import Alert from 'react-bootstrap/Alert';

class PopUpAlert extends Component{
    state = {
        closePopUp: false
    }

    render = () => {
        return (
            <React.Fragment>
                <Alert variant="danger" onClose={this.props.closePopUp} dismissible>
                    <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                    <p>
                        You must fill all the inputs marked with an asterisk.
                    </p>
                </Alert>
            </React.Fragment>
        );
    }
}

export default PopUpAlert;