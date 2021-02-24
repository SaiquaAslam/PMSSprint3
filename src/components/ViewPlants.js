import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreated from '../actions/actions'

class ViewPlants extends Component {

    componentDidMount() {
        this.props.onGetPlants()
    }

    

    delete(id) {
        this.props.onDeletePlants(id);
    }

    render() {
        let plantsList = this.props.plantsList.map((plant, index) => {
            return (

                <tr key={index}>
                   <th>{plant.plantId}</th>
                   <td>{plant.name}</td>
                    <td>{plant.plantHeight}</td>
                    <td>{plant.medicinalUse}</td>
                    <td>{plant.temperature}</td>
                    <td>{plant.plantStock}</td>
                    <td>{plant.cost}</td>
                    <td>{plant.type}</td>
                    <td>
                        <button onClick={this.delete.bind(this, plant.plantId)} className="btn btn-danger">DELETE</button>
                    </td>
                   
                </tr>
            )
        })

        return (
            
            <div className="container"> 
<hr/>
<br/>  
              <h2 class="text-success" style={ {textShadow:"2px 2px black"}}>PLANTS DETAILS!!!!! :)</h2>
              <br/>  
            
                <table className="table table-striped table-bordered " border="8">
                    <thead   class="bg-success"> 
                        <tr>
                        <th scope="col">Plant Id</th>
                                <th scope="col">Plant Name</th>
                                <th scope="col">Plant Height</th>
                                <th scope="col">Plant Medicinal_Use</th>
                                <th>Temperature</th>
                                <th scope="col">Plant Stock</th>
                                <th scope="col">Plant Cost</th>
                                <th scope="col">Plant Type</th>
                            <th>Delete</th>
                            
                        </tr>
                    </thead>
                    <tbody  class="table-danger">
                        {plantsList}
                    </tbody>
                </table>

            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        plantsList: state.plantsList,
        returnedMessage: state.returnedMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetPlants: () => {
            return dispatch(actionCreated.getAllPlants())
        },
        onDeletePlants: ( plantId) => {
            return dispatch(actionCreated.deletePlant( plantId))
        },
        clearState: () => {
            return dispatch(actionCreated.clearState())
        }

      
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewPlants)
