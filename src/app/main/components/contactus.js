import React, {Component } from "react";
import Keys from '../../../keys/emailkeys';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Button, Form, InputGroup } from 'react-bootstrap';

import emailjs from '@emailjs/browser';

import './contactus.css';

import PopUpAlert from './alert';

class ContactUs extends Component {
    state = {
        to_email: '',
        firstname: '',
        lastname: '',
        message: '',
        showPopUp: false
    }

    onInputchange = (e) => {
        const validation = this.checkValueEntered(e.target.name, e.target.value);
        this.setState({[validation.name]: validation.newValue});
    }

    checkValueEntered = (name, value) => {
        const regex = /^[A-zÀ-ú\s]+$/;
        const valLength = value.length;
        const lastValue = valLength > 1 ? value.substring(valLength - 1, valLength) : value;
        let newValue = value;

        switch(name) {
            case 'firstname':
            case 'lastname':
                if(!regex.test(lastValue))
                    newValue = value.substring(0, valLength - 1);
                break;
            default:
                break;
        }

        return {name, newValue};
    };

    sendMail = (e) => {
        e.preventDefault();
        const name = this.state.firstname + ' ' + this.state.lastname;

        const formSend = {
            to_email: this.state.to_email.trim(),
            to_name: name.trim(),
            message: this.state.message
        };

        const PopUpVisible = this.validateForm(formSend);
        
        if(PopUpVisible)
            this.setState({showPopUp : PopUpVisible});
        else {
            console.log('envia mail')
            // emailjs.send(Keys.SERVICE_ID, Keys.TEMPLATE_ID, formSend, Keys.PUBLIC_KEY)
            //   .then((result) => {
            //       console.log(result.text);
            //   })
            //   .catch ((error) => {
            //       console.log(error.text);
            //   });
            }
        }

    validateForm = (form) => {
        if (form.to_name.length === 0 || form.to_email.length === 0)
            return true;
        else
            return false;
    }

    togglePopUp = () => this.setState({showPopUp: !this.state.showPopUp});

    render = () => {
        return (
            <React.Fragment>
                    <div className="row pad-top">
                        <div className="container">
                            <h2 className="h2-center">Submit your questions</h2>
                            <div className="pad-top">
                                <Form>
                                    <Form.Group className="mb-3 align-form" controlId="frmName">
                                        <InputGroup className="mb-3">
                                            <InputGroup.Text>Preferred name and last name (*)</InputGroup.Text>
                                            <Form.Control type="name" placeholder="Enter Name" name="firstname" value={this.state.firstname} onChange={this.onInputchange}/>
                                            <Form.Control type="lastname" placeholder="Enter Last name" name="lastname" value={this.state.lastname} onChange={this.onInputchange}/>
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group className="mb-3 align-form" controlId="frmEmail">
                                        <Form.Label>Email (*)</Form.Label>
                                        <Form.Control type="email" placeholder="Enter Email" name="to_email" value={this.state.to_email} onChange={this.onInputchange}/>
                                        <Form.Text className="text-muted">
                                            Use semicolon to add several emails
                                        </Form.Text>
                                    </Form.Group>
                                    <Form.Group className="mb-3 align-form" controlId="frmSummary">
                                        <Form.Label>Summary </Form.Label>
                                        <Form.Control type="summary" as="textarea" placeholder="Write your opinion..." name="message" value={this.state.message} onChange={this.onInputchange} rows={4}/>
                                    </Form.Group>
                                    <Button variant="outline-primary" name="send" onClick={(e) => this.sendMail(e)}>
                                        <FontAwesomeIcon icon={faPaperPlane}/> Send
                                    </Button>
                                </Form>
                            </div>
                            {this.state.showPopUp ? <PopUpAlert closePopUp={this.togglePopUp.bind(this)}></PopUpAlert> : null }
                        </div>
                    </div>
            </React.Fragment>
        );
    };
}

export default ContactUs;