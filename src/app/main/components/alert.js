import React, {Component } from 'react';

import Alert from 'react-bootstrap/Alert';

class PopUpAlert extends Component{
    render = () => {
        return (
            <React.Fragment>
                 {/* onClose={() => this.props.func(this)}  */}
                <Alert variant="danger" dismissible>
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