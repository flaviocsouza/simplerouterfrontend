import React from 'react'
import './DestinationInput.css'


export default class DestinationInput extends React.Component{ 

    render(){
        return(
            <div className="form">
                <div className="row">
                    <div className="col-12">
                        <div className="form-group">
                            <label>Destino(s)</label>
                            <input type="text" className="form-control" name="destination-0" placeholder="Digite o destino  do trajeto"/>
                        </div>
                    </div>
                    <div>
                        <button type="button" className="btn btn-primary"> Adicionar rota</button>

                    </div>
                </div>
            </div>
        )
        }
    }
