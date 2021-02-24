import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actions'

class SearchByName extends Component {

    constructor(props) {
        super(props)

        this.name = React.createRef()
    }

    search() {
        this.props.onSearchByNames(this.name.current.value)

    }

    componentDidMount() {
        this.props.clearState()
    }


    render() {

        let plantList = this.props.plantsList.map((plant, index) => {
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
                {/* <div className="mb-3 input-search-name "> */}
                <br />
                <div className="card col-md-4 offset-md-4 offset-md-4" style={{ marginLeft: "4px" }}>
                    <input type="text" ref={this.name} className="form-control" id="name" placeholder="Plant Name" />
                </div>

                <div>
                    <button className="btn btn-success" onClick={this.search.bind(this)}>Search</button>
                </div>

                <hr />

                <div className="plant-table-div">
                    <h2 span class="text-success" style={{ textShadow: "2px 2px black" }}>PLANTS WITH GIVEN NAME  !!! :)</h2>
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
                        <tbody class="table-primary">
                            {plantList}
                        </tbody>
                    </table>

                </div>

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
        onSearchByNames: (name) => dispatch(actionCreators.getPlantsByName(name)),
        clearState: () => dispatch(actionCreators.clearState())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchByName)