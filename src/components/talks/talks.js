import './talks.css';
import React, { Component } from 'react';
import Title from "../title/title";

export default class Talks extends Component {
constructor(props)
{
  super(props);
  this.state = {
    data:[
    {
        name:'Angular', 
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/512px-Angular_full_color_logo.svg.png',  
        date:"10/02/2020", 
        author:'Abdul', 
        description:"Basics of Angular"
    },
    {
        name:'React js', 
        image:'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',  
        date:"15/03/2020",
        author:'Yogesh',
        description:"Basics of React js"
    },
    {
        name:'Vue js', 
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/768px-Vue.js_Logo_2.svg.png',
        date:"15/03/2020",
        author:'Yogesh',
        description:"Basics of Vue js"
    },
    {
        name:'React', 
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/512px-Angular_full_color_logo.svg.png',  
        date:"15/03/2020",
        author:'Yogesh',
        description:"Basics of Angular"
    }
   ]
  }
} 
render(){
  return (
    <div className="talksPage">
        <Title pageName="Tech Talks"/>
	<div className="grid-container">
	{
		this.state.data.map((item)=><div className="grid-item">
  			<div className="events"> 
                <img src= {item.image}  className="subject-logo"/>
                <h3 className="subject-name"> {item.name} </h3>
                <p className="Date"> {item.date} </p>
  				<p className="author"> {item.author} </p>
                <p className="description"> {item.description} </p>
                <a href="#" className="download">PDF</a>
  			</div>
  		</div>
  	)}  
  	</div>      
  	</div>
  );
 }
} 
