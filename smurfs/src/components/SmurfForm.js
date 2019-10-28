import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {addingSmurf} from '../actions/action'

const SmurfForm = (props) => {


    const [newSmurf, setSmurf] = useState({
        name: '',
        age : '',
        height: ''
    })

    const handleChange = e => {
        setSmurf({...newSmurf, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.addingSmurf(newSmurf)
        setSmurf({newSmurf})
    }

    return (    
        <form onSubmit = {handleSubmit}>
        <input 
            type = 'text'
            name = 'name'
            value = {newSmurf.name}
            onChange = {handleChange}
            placeholder = 'Name' />
        <input 
            type = 'number'
            name = 'age'
            value = {newSmurf.age}
            onChange = {handleChange}
            placeholder = 'Age' />
        <input 
            type = 'number'
            name = 'height'
            value = {newSmurf.height}
            onChange = {handleChange}
            placeholder = 'Height' />
        <button>Add Smurf</button>
    </form>
    )
}

const mapStateToProps = (state) =>{
    return {
      smurfs : state.smurfs
    }
  }

export default connect(mapStateToProps, {addingSmurf}) (SmurfForm);