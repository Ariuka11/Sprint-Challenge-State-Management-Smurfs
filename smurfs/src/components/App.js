import React, {  useEffect } from "react";
import "./App.css";
import Smurfs from "./Smurfs";
import {connect} from 'react-redux'
import { fetchingSmurtData} from '../actions/action'

const App = (props) =>  {

  useEffect(() => {
    props.fetchingSmurtData()
  }, [])

    return (
      <div className="App">
        <Smurfs smurfs = {props.smurfs} />
      </div>
    );
}

const mapStateToProps = (state) =>{
  return {
    smurfs : state.smurfs
  }
}

export default connect(mapStateToProps, {fetchingSmurtData}) (App);
