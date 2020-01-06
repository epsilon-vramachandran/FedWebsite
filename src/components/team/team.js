import './team.css';
import React, { Component } from 'react';
import imgAvatar from './../../assets/imgAvatar.png';
export default class Team extends Component {
constructor(props)
{
  super(props);
  this.state = {
    data:[{name:'Name1', image:imgAvatar, designation:'Developer1'},
    {name:'Name2', image:imgAvatar, designation:'Developer2'},
    {name:'Name3', image:imgAvatar, designation:'Developer Sr'},
    {name:'Name4', image:imgAvatar, designation:'Developer1'},
    {name:'Name5', image:imgAvatar, designation:'Developer1'},
    {name:'Name6', image:imgAvatar, designation:'Developer Sr'},
    {name:'Name7', image:imgAvatar, designation:'Developer2'}]
  }
} 
render(){
  return (
    <div>
	<div className="grid-container">
	{
		this.state.data.map((item)=><div className="grid-item">
  			<img src= {item.image}  className="image" />
  			<div className="overlay"> 
  				<h4 className="name"> {item.name} </h4>
  				<p className="designation"> {item.designation} </p>
  			</div>
  		</div>
  	)}  
  	</div>      
  	</div>
  );
 }
} 
