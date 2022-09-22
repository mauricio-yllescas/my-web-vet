import React, {Component} from 'react';
import './main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPeopleGroup, faBuilding, faLocation, faPhone } from '@fortawesome/free-solid-svg-icons';
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
                <div className="row-header"> 
                    <h1>Find your Vet</h1>
                </div>
                <div className="row">
                    <div className="container div-25"></div>
                    <div className="container div-10">
                        <button name="home" onClick={(e) => this.showComponent(e)}>
                            <FontAwesomeIcon icon={faHome} /> | Home
                        </button>
                    </div>
                    <div className="container div-10">
                        <button name="aboutus" onClick={(e) => this.showComponent(e)}>
                            <FontAwesomeIcon icon={faPeopleGroup} /> | About Us
                        </button>
                    </div>
                    <div className="container div-10">
                        <button name="vets" onClick={(e) => this.showComponent(e)}>
                            <FontAwesomeIcon icon={faBuilding} /> | Main Vets
                        </button>
                    </div>
                    <div className="container div-10">
                        <button name="location" onClick={(e) => this.showComponent(e)}>
                            <FontAwesomeIcon icon={faLocation} /> | Locations
                        </button>
                    </div>
                    <div className="container div-10">
                        <button name="contact" onClick={(e) => this.showComponent(e)}>
                            <FontAwesomeIcon icon={faPhone} /> | Contact Us
                        </button>
                    </div>
                    <div className="container div-25"></div>
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