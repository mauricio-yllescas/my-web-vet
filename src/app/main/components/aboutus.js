import React, {Component} from "react";

import './aboutus.css';
import logo from '../../../img/dog-paw.png';

class AboutUs extends Component {
    state = {

    }

    render = () => {
        return (
            <React.Fragment>
                    <div className="row pad-top">
                        <div className="div-25 container"></div>
                        <div className="div-50 container">
                            <h2 className="h2-center">Where does it come from?</h2>
                                <div className="div-60 float-children">
                                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. 
                                            It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. 
                                            Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, 
                                            consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. 
                                            Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. 
                                            This book is a treatise on the theory of ethics, very popular during the Renaissance. 
                                            The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                                </div>
                                <div className="div-30 float-children">
                                        <img src={logo} className="img-resizing"/>
                                        <h3 className="h3-center">Find my Vet</h3>
                                </div>
                        </div>
                        <div className="div-25 container"></div>
                    </div>
            </React.Fragment>
        );
    };
}

export default AboutUs;