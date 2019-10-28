import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addingSmurf, deleteSmurf} from '../actions/action'

const SmurfForm = (props) => {

    const [newSmurfs, setSmurfs] = useState({
        name: '',
        age : '',
        height: ''
    })

    const handleChange = e => {
        setSmurfs({...newSmurfs, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.addingSmurf(newSmurfs)
        setSmurfs({newSmurfs})
    }

    const deleteSubmit = e => {
        e.preventDefault();
        props.deleteSmurf(newSmurfs)
        setSmurfs({})
       
    }

    return (    
        <div>
            <form onSubmit = {handleSubmit}>
                <input 
                    type = 'text'
                    name = 'name'
                    value = {newSmurfs.name}
                    onChange = {handleChange}
                    placeholder = 'Name' />
                <input 
                    type = 'number'
                    name = 'age'
                    value = {newSmurfs.age}
                    onChange = {handleChange}
                    placeholder = 'Age' />
                <input 
                    type = 'number'
                    name = 'height'
                    value = {newSmurfs.height}
                    onChange = {handleChange}
                    placeholder = 'Height' />
                <button>Add Smurf</button>
            </form>
            <button onClick = {deleteSubmit}>Delete Smurf</button>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
      smurfs : state.smurfs
    }
  }

export default connect(mapStateToProps, {addingSmurf, deleteSmurf}) (SmurfForm);