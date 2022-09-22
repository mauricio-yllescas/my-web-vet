import React, {Component} from "react";
import Keys from '../components/emailkeys';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';

import './contactus.css';

class ContactUs extends Component {
    state = {
        to_email: '',
        firstname: '',
        lastname: '',
        message: ''
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
            case 'firstname' || 'lastname':
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
            to_email: this.state.to_email,
            to_name: name,
            message: this.state.message
        };

        //debugger;

        emailjs.send(Keys.SERVICE_ID, Keys.TEMPLATE_ID, formSend, Keys.PUBLIC_KEY)
          .then((result) => {
              console.log(result.text);
          })
          .catch ((error) => {
              console.log(error.text);
          });
    }

    render = () => {
        return (
            <React.Fragment>
                    <div className="row pad-top">
                        <div className="div-25 container"></div>
                        <div className="div-50 container">
                            <h2 className="h2-center">Submit your questions</h2>
                            <form onSubmit={this.sendMail}>
                                <div className="row container pad-bottom align-left">
                                        <div className="div-45 float-children">
                                            <label>Name: </label>
                                            <input id="txtName" className="textInput" placeholder="First Name" name="firstname" value={this.state.firstname} onChange={this.onInputchange}/>
                                        </div>
                                        <div className="div-45 float-children">
                                            <label>Last Name: </label>
                                            <input id="txtLastName" className="textInput" placeholder="Last Name" name="lastname" value={this.state.lastname} onChange={this.onInputchange}/>
                                        </div>
                                </div>
                                <div className="row pad-bottom align-left">
                                        <label>Email: </label>
                                        <input id="txtEmail" className="textInput" placeholder="Email" name="to_email" value={this.state.to_email} onChange={this.onInputchange}/>
                                </div>
                                <div className="row pad-bottom align-left">
                                    <label>Summary: </label>
                                    <textarea id="txtComment" className="summaryArea" placeholder="Write your opinion..." name="message" value={this.state.message} onChange={this.onInputchange} rows={4}></textarea>
                                </div>
                                <button id="btnSend" type="submit">
                                    <FontAwesomeIcon icon={faPaperPlane} /> Send
                                </button>
                            </form>
                        </div>
                        <div className="div-25 container"></div>
                    </div>
            </React.Fragment>
        );
    };
}

export default ContactUs;