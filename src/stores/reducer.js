import * as actionCreators from '../actions/actions'

const initialState = {
    returnedMessage: 'empty msg - bow bow',
    plantsList: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionCreators.GET_ALL_PLANTS:
            let listOfPlants = action.data
            console.log('List of Plants')
            console.log(listOfPlants)
            return {
                returnedMessage: 'recieved all plants details !! ching!',
                plantsList: listOfPlants
            }

        case actionCreators.DELETE_PLANT:
            let messageAfterDeletion = action.data.message
            let listAfterDeletion = action.data.plants
            console.log('Deletion of plants')
            console.log(listAfterDeletion)
            console.log(messageAfterDeletion)
            return {
                returnedMessage: messageAfterDeletion,
                plantsList: listAfterDeletion
            }

        case actionCreators.ADD_PLANT:
            let messageAfterAddition = action.data.message
            let listAfterAddition = action.data.plant
            console.log('Addition of plant')
            console.log(listAfterAddition)
            console.log(messageAfterAddition)
            return {
                returnedMessage: messageAfterAddition,
               // plantList: listAfterAddition
               plantsList: listAfterAddition
            }

        case actionCreators.UPDATE_PLANT:
            let messageAfterUpdation = action.data.message
            let listAfterUpdation = action.data.plant
            console.log('Updating Plant')
            console.log(listAfterUpdation)
            console.log(messageAfterUpdation)
            return {
                returnedMessage: messageAfterUpdation,
               // plantList: listAfterUpdation
               plantsList: listAfterUpdation
            }

        case actionCreators.GET_PLANTS_BY_NAME:
            let listOfPlantsByName = action.data.plants
            console.log('List of plants by  name')
            console.log(listOfPlantsByName)
            return {
                plantsList: listOfPlantsByName
            }

        case actionCreators.CLEAR_STATE:
            return {
                returnedMessage: '',
                plantsList: []
            }

        case actionCreators.GET_PLANTS_BY_TYPE:
            let listOfPlantsByType = action.data.plants
            console.log('List of Plants by type')
            console.log(listOfPlantsByType)
            return {
                plantsList: listOfPlantsByType
            }



        default:
            return state
    }
}

export default reducer;