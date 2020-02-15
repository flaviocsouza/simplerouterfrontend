
import React from 'react'
import Summary from './Summary'

import 'bootstrap'
import './Options.css'



export default class Options extends React.Component{ 

    state ={
        arrLocations:[1, 2]
    }

    onFormSubmit = event =>{
        event.preventDefault()

        this.props.onSubmitLocations(this.state.arrLocations);
    }

    updateFields = event =>{
        const arrLocations = this.state.arrLocations
        console.log(event.target)
        let value = event.target.value
        let ind = event.target.name
        console.log('ind', ind)
        console.log('value', value)
        console.log(arrLocations[ind])
        console.log(arrLocations)


        arrLocations[ind] = value

        this.setState({arrLocations})
    }


    renderLocation(i){
        const label = i===0? `Origem`:`${i}º Destino`

        return(            
            <React.Fragment>
                <label htmlFor={`location${i}`}>{label} </label>
                <input type="text" name={i} onChange={this.updateFields} />
            </React.Fragment>
            )
    }    
    

    addLocation(event) {
        event.preventDefault()
        //const arrLocations = this.state.arrLocations
        //this.setState(prevState => ({ arrLocations: prevState.arrLocations.concat([arrLocations.length]) }));
        //console.log(this.state)
    }
    
    render(){
        return(
            <aside className="options">
                <form onSubmit={this.onFormSubmit}>
                    <div className="locations">
                        {this.state.arrLocations.map(i => this.renderLocation(i))}
                    </div>
                    <button onClick={ event => this.addLocation(event) }>Nova Localidade</button>
                    <input type="submit"/>
                </form>
                <div className="summary">
                    <Summary></Summary>
                </div>
            </aside>
        )
    }
}
