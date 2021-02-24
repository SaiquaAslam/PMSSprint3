import axios from 'axios'

export const ADD_PLANT = 'ADD_PLANT'
export const GET_ALL_PLANTS = 'GET_ALL_PLANTS'
export const DELETE_PLANT = 'DELETE_PLANT'
export const UPDATE_PLANT = 'UPDATE_PLANT'
export const GET_PLANTS_BY_NAME = 'GET_PLANTS_BY_NAME'
export const CLEAR_STATE = 'CLEAR_STATE'
export const CLEAR_MESSAGE = 'CLEAR_MESSAGE'
export const GET_PLANTS_BY_TYPE = 'GET_PLANTS_BY_TYPET'

const BASE_URL = 'http://localhost:8181/api/'

const getAllPlantsAction = (data) => {
    return {
        type: GET_ALL_PLANTS,
        data
    }
}

export const getAllPlants = () => {
    return (dispatch) => {
        axios.get(BASE_URL)
            .then((response) => {
                dispatch(getAllPlantsAction(response.data))
            })
    }
}

const addPlantAction = (data) => {
    return {
        type: ADD_PLANT,
        data
    }
}

export const addPlant = (newPlant) => {
    return (dispatch) => {
        axios.post(BASE_URL, newPlant)
            .then((response) => {
                dispatch(addPlantAction(response.data))
            })
    }
}


const deletePlantAction = (data) => {
    return {
        type: DELETE_PLANT,
        data
    }
}
export const deletePlant = (plantId) => {
    return (dispatch) => {
        axios.delete(BASE_URL + plantId)
            .then((response) => {
                dispatch(deletePlantAction(response.data))
            })
    }
}

const updatePlantAction = (data) => {
    return {
        type: UPDATE_PLANT,
        data
    }
}

export const updatePlant = (plantId, newPlantDetails) => {
    return (dispatch) => {
        axios.put(BASE_URL + plantId, newPlantDetails)
            .then((response) => {
                dispatch(updatePlantAction(response.data))
            })
    }
}

//search by names action
const getPlantsByNameAction = (data) => {
    return {
        type: GET_PLANTS_BY_NAME,
        data
    }
}

//search by names function
export const getPlantsByName = (name) => {
    return (dispatch) => {
        // let URL = `http://localhost:8181/api/plants/search?name=${name}`
        let URL = BASE_URL + "search/" + name

        axios.get(URL)
            .then((response) => {
                dispatch(getPlantsByNameAction(response.data))
            })
    }
}

//action to clear state
const clearStateAction = (data) => {
    return {
        type: CLEAR_STATE,
        data
    }
}

//clear state function
export const clearState = () => {
    return (dispatch) => {
        dispatch(clearStateAction())
    }
}

//action to get  plants by type
const getPlantsByTypeAction = (data) => {
    return {
        type: GET_PLANTS_BY_TYPE,
        data
    }
}
//function to get plants by type
export const getPlantsByType = (type) => {
    return (dispatch) => {
        // let URL = `http://localhost:8181/api/v1/plants/searchByType?type=${type}`
        let URL = BASE_URL + "getPlantsByType/" + type
        axios.get(URL)
            .then((response) => {
                dispatch(getPlantsByTypeAction(response.data))
            })
    }
}