import './title.css';
import React from 'react';

const Title = props => {
  return(
    <div className="title mt-5">
      <a className="link link-name" href="#">
      	<span data-letters-l="Suri" data-letters-r="nami">Surinami</span>
      </a>
    </div>
  )
}

export default Title;