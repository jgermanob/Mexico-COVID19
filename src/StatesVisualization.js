import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import worlddata from './world';
import NavBar from './NavBar';
import Footer from './Footer'
import Container from 'react-bootstrap/Container';

function getStatesNames(){
    var states_names = [];
    for(var i=0; i<worlddata.features.length; i++){
        states_names.push(worlddata.features[i].properties.name);
    }
    return states_names
};

var options = getStatesNames();

class StatesVisualization extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            selectedOption: options[0]
        };
    }

    handleSelect(eventKey, event){
        this.setState({selectedOption: options[eventKey]});
        console.log(this.state.selectedOption)
    }

    render(){
        return(
            <div>
                <NavBar/>
                <Container  className='mt-5 mb-5'>
                    <div className ='mt-5 mb-5'>
                        <div className='d-flex justify-content-center'>
                            <DropdownButton title="Selecciona un estado" onSelect={this.handleSelect.bind(this)}>
                                {options.map((opt,i) => (
                                    <Dropdown.Item key={i} eventKey={i}>
                                        {opt}
                                    </Dropdown.Item>
                                ))}
                            </DropdownButton>
                        </div>
                        <div className='d-flex justify-content-center'>
                                <h1>{this.state.selectedOption}</h1>
                        </div>
                    </div>
                </Container>
                <Footer/>
            </div>
        );
    }
}

export default StatesVisualization;