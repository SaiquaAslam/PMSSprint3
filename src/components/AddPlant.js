import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actionCreators from '../actions/actions'

class AddPlant extends Component {

    constructor(props) {
        super(props)

        this.plantId = React.createRef();
        this.name = React.createRef();
        this.plantHeight = React.createRef();
        this.medicinalUse = React.createRef();
        this.temperature = React.createRef();
        this.plantStock = React.createRef();
        this.cost = React.createRef();
        this.type = React.createRef();

    }

    componentDidMount() {
        this.props.clearState()
    }
    componentDidUpdate() {

        let check = this.props.returnedMessage.split(' ')
        if (check[0] === 'Successfully') {
            setTimeout(() => {
                this.props.history.push('/')
            }, 2000)
        }
    }
    add() {

        let newPlant = {
            plantId: this.plantId.current.value,
            name: this.name.current.value,
            plantHeight: this.plantHeight.current.value,
            medicinalUse: this.medicinalUse.current.value,
            temperature: this.temperature.current.value,
            plantStock: this.plantStock.current.value,
            cost: this.cost.current.value,
            type: this.type.current.value
        }
        this.props.onAddPlant(newPlant)
    }


    update() {
        let plant = {
            plantId: this.plantId.current.value,
            name: this.name.current.value,
            plantHeight: this.plantHeight.current.value,
            medicinalUse: this.medicinalUse.current.value,
            temperature: this.temperature.current.value,
            plantStock: this.plantStock.current.value,
            cost: this.cost.current.value,
            type: this.type.current.value
        }

        this.props.onUpdatePlant(plant.plantId, plant)

    }

    render() {
        return (
            <div >


                <div className="head" style={{ left: "25%", fontSize: "80px", color: "green", textShadow: "2px 2px black" }}> <h2 class="text-success">ADD/UPDATE HERE !!!!!</h2></div>
                <div className="card-body">

                    <div className="card col-md-6 offset-md-3 offset-md-3" >
                        <div className="mb-3 add-plant">
                            <input type="number" ref={this.plantId} pattern="[0-9]+" className="form-control" id="plantid" placeholder="Plant ID" />
                        </div>

                        <div className="mb-3 add-plant">
                            <input type="text" ref={this.name} className="form-control" id="plantname" placeholder="Plant Name" />
                        </div>

                        <div className="mb-3 add-plant">
                            <input type="text" ref={this.plantHeight} className="form-control" id="plantheight" placeholder="Plant Height In cm." />
                        </div>
                        <div className="mb-3 add-plant">
                            <input type="text" ref={this.medicinalUse} className="form-control" id="plantmedicinaluse" placeholder="Medicinal Use" />
                        </div>
                        <div className="mb-3 add-plant">
                            <input type="text" ref={this.temperature} className="form-control" id="planttemperatue" placeholder="Suitable Temperatue" />
                        </div>
                        <div className="mb-3 add-plant">
                            <input type="number" ref={this.plantStock} className="form-control" id="plantstock" placeholder="Plant Stock" />
                        </div>
                        <div className="mb-3 add-plant">
                            <input type="text" ref={this.cost} className="form-control" id="plantcost" placeholder="Plant cost" />
                        </div>
                        <div className="mb-3 add-plant">
                            <input type="text" ref={this.type} className="form-control" id="planttype" placeholder="Plant type" />
                        </div>
                    </div>
                    <button type="button" onClick={this.add.bind(this)} className="btn btn-success add-button">Add</button>
                    <button type="button" onClick={this.update.bind(this)} className="btn btn-success add-button" style={{ marginLeft: "10px" }}>Update</button>

                </div>

                <div className={(this.props.returnedMessage === '') ? '' : "alert "} role="alert">
                    <h5  ><span class="text-white bg-dark"> {this.props.returnedMessage} </span></h5>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        returnedMessage: state.returnedMessage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onAddPlant: (plant) => {
            dispatch(actionCreators.addPlant(plant))
        },
        onUpdatePlant: (plantId, newPlantObject) => {
            dispatch(actionCreators.updatePlant(plantId, newPlantObject))
        },
        clearState: () => {
            dispatch(actionCreators.clearState())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddPlant))