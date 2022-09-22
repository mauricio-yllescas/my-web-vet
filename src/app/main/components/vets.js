import React, {Component} from 'react';

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
            },
            {
                'IdVet': 3,
                'Name': 'Dra. Vane',
                'Address': 'Calle Juan Pezet 230, Santiago de Surco',
                'Phone': '(01) 748-3737',
                'url': 'https://doctoravanevet.com/',
                'Alias': 'dravane'
            }
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
                    <div key={x.IdVet} className="row pad-top">
                        <div className="div-25 container"></div>
                            <div className="div-50 container">
                                <h3 className="h3-center">{x.Name}</h3>
                                <div className='div-45 float-children'>
                                    <div className="text-vets">
                                        <span>Address: <b>{x.Address}</b></span><br/>
                                        <span>Phone: <b>{x.Phone}</b></span><br/>
                                        <span>Site: <b><a target='_blank' rel='noreferrer' href={x.url} style={{cursor: 'pointer'}}>{x.url}</a></b></span><br/>
                                    </div>
                                </div>
                                <div id={IdMap} className='div-45 float-children'>
                                        <img className='img-vets-resizing' src={images.alias.find(img => img.nombre === x.Alias).logo} alt={x.Name} />
                                </div>
                            </div>
                        <div className="div-25 container"></div>
                    </div>
                )
            });

        return sketch;
    }

    render = () => {
        const sketch = this.drawData(this.state.lstVets);
        
        return (
            <React.Fragment>
                {sketch}
            </React.Fragment>
        );
    };
}

export default Vets;