import React from 'react'
import './OriginInput.css'

export default class OriginInput extends React.Component{ 

    render(){
        return(
            <div className="form">
                <div className="row">
                    <div className="col-12">
                        <div className="form-group">
                            <label>Origem</label>
                            <input type="text" className="form-control" name="origin" placeholder="Digite a origem do trajeto"/>
                        </div>
                    </div>
                </div>
            </div>
        )
        }
    }
