import React, {Component} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPeopleGroup, faBuilding, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Button, ButtonGroup } from 'react-bootstrap';

import './main.css';

import Home from './components/home';
import AboutUs from './components/aboutus';
import Vets from './components/vets';
import ContactUs from './components/contactus';

class Main extends Component {
    //Variables de entorno
    state = {
        showHome: true,
        showAboutUs: false,
        showVets: false,
        showLocations: false,
        showContact: false
    }

    //Usado para iniciar una acción antes de renderizar
    //componentWillMount = () => console.log('antes de iniciar');

    //Usado para iniciar una acción despues de renderizar
    //componentDidMount = () => console.log('despues de iniciar');

    showComponent = (e) => this.updateState(e.target.name);

    updateState = (name) => {
        const homeSelected = name === 'home' ? true : false;
        this.setState({showHome : homeSelected});

        const aboutUsSelected = name === 'aboutus' ? true : false;
        this.setState({showAboutUs : aboutUsSelected});

        const vetsSelected = name === 'vets' ? true : false;
        this.setState({showVets : vetsSelected});

        const locationsSelected = name === 'location' ? true : false;
        this.setState({showLocations : locationsSelected});

        const contactSelected = name === 'contact' ? true : false;
        this.setState({showContact : contactSelected});
    }

    render = () => {
        return(
            <React.Fragment>
                <div className="row-header container"> 
                    <h1>Find your Vet</h1>
                </div>
                <div className="row">
                    <div className='div-75'>
                    <ButtonGroup className="mb-2">
                        <Button variant="outline-secondary" name="home" onClick={(e) => this.showComponent(e)}>
                            <FontAwesomeIcon icon={faHome} /> | Home
                        </Button>
                        <Button variant="outline-secondary" name="aboutus" onClick={(e) => this.showComponent(e)}>
                            <FontAwesomeIcon icon={faPeopleGroup} /> | About Us
                        </Button>
                        <Button variant="outline-secondary" name="vets" onClick={(e) => this.showComponent(e)}>
                            <FontAwesomeIcon icon={faBuilding} /> | Main Vets
                        </Button>
                        {/* <Button variant="outline-secondary" name="location" onClick={(e) => this.showComponent(e)}>
                            <FontAwesomeIcon icon={faLocation} /> | Locations
                        </Button> */}
                        <Button variant="outline-secondary" name="contact" onClick={(e) => this.showComponent(e)}>
                            <FontAwesomeIcon icon={faPhone} /> | Contact Us
                        </Button>
                    </ButtonGroup>
                    </div>
                    <br></br>
                </div>
                <div className="row"> 
                    {this.state.showHome ? <Home></Home> : null }
                    {this.state.showAboutUs ? <AboutUs></AboutUs> : null }
                    {this.state.showVets ? <Vets></Vets> : null }
                    {this.state.showContact ? <ContactUs></ContactUs> : null }
                </div>
            </React.Fragment>
        );
    };
}

export default Main;