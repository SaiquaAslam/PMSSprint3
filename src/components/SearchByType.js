import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actions'

class SearchByType extends Component {

    constructor(props) {
        super(props)

        this.type = React.createRef()
    }


    componentDidMount() {
        this.props.clearState()
    }



    search() {
        // console.log(this.departmentName.current.value)
        this.props.onGetPlantsByType(this.type.current.value)
    }



    render() {
        // console.log(this.props.employeesList)
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
                </tr>
            )
        })

        return (
            <div className="container">


                <br />
                <div className="card col-md-4 offset-md-4 offset-md-4" style={{ marginLeft: "4px" }}>

                    <input type="text" ref={this.type} className="form-control" id="type" placeholder="Plant Type" />
                </div>
                <br />
                <div>
                    <button className="btn btn-success" onClick={this.search.bind(this)} >Search</button>
                </div>

                <hr />

                <div className="plant-table-div">
                    <h2><span class="text-success" style={{ textShadow: "2px 2px black" }}>PLANTS WITH GIVEN TYPE !!! :)</span></h2>
                    <br />
                    <table className="table table-striped table-bordered " border="8">
                        <thead class="bg-success">
                            <tr>
                                <th scope="col">Plant Id</th>
                                <th scope="col">Plant Name</th>
                                <th scope="col">Plant Height</th>
                                <th scope="col">Plant Medicinal_Use</th>
                                <th>Temperature</th>
                                <th scope="col">Plant Stock</th>
                                <th scope="col">Plant Cost</th>
                                <th scope="col">Plant Type</th>

                            </tr>
                        </thead>
                        <tbody class="table-warning">
                            {plantsList}
                        </tbody>
                    </table>

                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        returnedMessage: state.returnedMessage,
        plantsList: state.plantsList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetPlantsByType: (type) => {
            // console.log(departmentName)
            dispatch(actionCreators.getPlantsByType(type))
        },
        clearState: () => dispatch(actionCreators.clearState())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchByType)