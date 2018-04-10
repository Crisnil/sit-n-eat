import React, { Component } from 'react';
import {get} from '../utils/RestClient'

class HealthCheckHidden extends Component{

  componentDidMount(){

    get('/public/api/ping').then((response)=>{

    }).catch(function (error) {

    });


  }
  render(){

    return <div style={{display:'none'}}/>;

  }

}

export default  HealthCheckHidden;
