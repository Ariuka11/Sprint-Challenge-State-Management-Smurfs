import {FETCHING_SMURF_DATA,
        FETCHING_SMURF_SUCCESSFUL,
        FETCHING_SMURF_FAILED,
        ADDING_SMURF_SUCCESSFUL,
        ADDING_SMURF_FAILED}
     from '../actions/action'    

const initialState = {
    smurfs: [],
    isFetching : false,
    error : null
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCHING_SMURF_DATA :
            return {
                ...state,
                isFetching: true
            }
        case FETCHING_SMURF_SUCCESSFUL :
            return {
                ...state,
                isLoading: false,
                smurfs: action.payload
            }
        case FETCHING_SMURF_FAILED :
            return {
                ...state,
                error: action.payload
            }
        case ADDING_SMURF_SUCCESSFUL :
            return {
                ...state,
                smurfs: action.payload
            }
        case ADDING_SMURF_FAILED :
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}