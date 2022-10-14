import React, {Component } from 'react';

import Alert from 'react-bootstrap/Alert';

class PopUpAlert extends Component{
    state = {
        closePopUp: false
    }

    render = () => {
        return (
            <React.Fragment>
                <Alert variant={this.props.type} onClose={this.props.closePopUp} dismissible>
                    <Alert.Heading>{this.props.header}</Alert.Heading>
                    <p> 
                        {this.props.detail}
                    </p>
                </Alert>
            </React.Fragment>
        );
    }
}

export default PopUpAlert;