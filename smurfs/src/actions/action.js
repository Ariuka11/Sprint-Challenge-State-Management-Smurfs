 import axios from 'axios';

 export const FETCHING_SMURF_DATA = 'FETCHING_SMURF_DATA';
 export const FETCHING_SMURF_SUCCESSFUL = 'FETCHING_SMURF_SUCCESSFUL';
 export const FETCHING_SMURF_FAILED = 'FETCHING_SMURF_FAILED';


 export const ADDING_SMURF_SUCCESSFUL = 'ADDING_SMURF_SUCCESSFUL';
 export const ADDING_SMURF_FAILED = 'ADDING_SMURF_FAILED';

 export const DELETE_SMURF_SUCCESSFUL = 'DELETE_SMURF_SUCCESSFUL';
 export const DELETE_SMURF_FAILED = 'DELETE_SMURF_FAILED';

 
 export const fetchingSmurtData = () => {
     return dispatch => {
        dispatch({type : FETCHING_SMURF_DATA})

        axios.get(`http://localhost:3333/smurfs`)
            .then(res => {
                console.log(res)
                dispatch({type: FETCHING_SMURF_SUCCESSFUL, payload: res.data})
            })
            .catch(err => {
                dispatch({type: FETCHING_SMURF_FAILED, payload: err})
            })
     }
 }

 export const addingSmurf = (newSmurf) => {
     return dispatch => {

        axios.post(`http://localhost:3333/smurfs`, newSmurf)
            .then(res => {
                console.log(res)
                dispatch({type: ADDING_SMURF_SUCCESSFUL, payload: res.data})
            })
            .catch(err => {
                dispatch({type: ADDING_SMURF_FAILED, payload: err})
            })
     }
 }

 export const deleteSmurf = (id) => {
     return dispatch => {

        axios.delete(`http://localhost:3333/smurfs/${id}`, id)
            .then(res => {
                console.log(res)
                dispatch({type: DELETE_SMURF_SUCCESSFUL, payload: res.data})
            })
            .catch(err => {
                dispatch({type: DELETE_SMURF_FAILED, payload: err})
            })
     }
 }
 