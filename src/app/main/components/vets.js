import React, {Component} from 'react';

import { Carousel } from 'react-bootstrap';

import images from '../images';
import './vets.css';

class Vets extends Component {
    state = {
        lstVets: []
    }
      
    componentWillMount = () => this.loadData();

    loadData = () => {
        let vetsAvailable = [
            {
                'IdVet': 1,
                'Name': 'SuperPet',
                'Address': ' Av. República de Panamá 2577, La Victoria, Lima',
                'Phone': '(01) 641-6464',
                'url': 'https://superpet.pe/',
                'Alias': 'superpet'
            },
            {
                'IdVet': 2,
                'Name': 'DiagnoPet',
                'Address': 'Av. Aramburu 884 Surquillo Lima Perú',
                'Phone': '(51) 960-390-986',
                'url': 'https://diagnopet.com.pe/',
                'Alias': 'diagnopet'
            }
            // {
            //     'IdVet': 3,
            //     'Name': 'Hurón Azul',
            //     'Address': 'Av. Colonial 2505',
            //     'Phone': '(+51) 934-916-875',
            //     'url': 'https://elhuronazul.net/',
            //     'Alias': 'huronazul'
            // }
        ];

        this.setState({lstVets: vetsAvailable});
    }
    
    drawData = (vets) => {
        //let maxVets = vets.length;
        //let divWidth = maxVets > 5 ? 20 : (100 / maxVets);
        
        let sketch = vets
            .map(x => {
                let IdMap = 'vet' + x.IdVet;

                return(
                    <Carousel.Item key={IdMap}>
                        <img
                            className="img-vets-resizing"
                            src={images.alias.find(img => img.nombre === x.Alias).logo}
                            alt={x.Name}
                        />
                        <Carousel.Caption>
                            <span>Address: <b>{x.Address}</b></span><br/>
                            <span>Phone: <b>{x.Phone}</b></span><br/>
                            <span>Site: <b><a target='_blank' rel='noreferrer' href={x.url} style={{cursor: 'pointer'}}>{x.url}</a></b></span><br/>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            });

        return sketch;
    }

    render = () => {
        const sketch = this.drawData(this.state.lstVets);
        
        return (
            <React.Fragment>
                <div className="row pad-top">
                    <div className="container">
                        <h2 className="h2-center">Associated vets</h2>
                            <div className="pad-top">
                            <Carousel variant="dark">
                                {sketch}
                            </Carousel>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    };
}

export default Vets;