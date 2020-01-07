import './panel.css';
import React, { Component } from 'react';
export default class Panel extends Component {
constructor(props)
{
  super(props);
  this.state = {
    data:[{heading:'Support', content:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.'},
    {heading:'On-Boarding', content:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.'},
    {heading:'DLs', content:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.'},
    {heading:'Fun Crew', content:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.'},
    {heading:'Misc', content:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.'}]
  }
} 
render(){
  return (
    <div className="pannel-wrapper">
	
	{

		this.state.data.map((item)=><div className="panel panel-default">
  			<div className="panel-heading"> {item.heading} </div>
  				<div className="panel-body"> {item.content} </div>
    </div>
  	)}  
  	</div>      
  
  );
 }
} 
