import React from 'react'
import './App.css'
import Options from '../components/template/Options'
import Axios from 'axios'
import MapContainer from '../components/template/MapContainer'
import 'bootstrap'


class App extends React.Component{
    
    onSubmitLocations = locations =>{
        console.table(locations)
    }

    render(){
        return(
            <div className="app">
            <Options onSubmitLocations={this.onSubmitLocations}></Options>
            <MapContainer></MapContainer>
        </div>
        )
    }
}

export default App