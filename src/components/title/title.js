import './title.css';
import React, { useState } from 'react';

const Title = props => {
	 const [effect, setEffect] = useState('');
	setTimeout(()=>{
setEffect('effect')
	},600)
  return(
    <div className="title">
      <a className={`link link-name ${effect}`} href="#">
      	<span data-letters-l="Suri" data-letters-r="nami">Surinami</span>
      </a>
    </div>
  )
}

export default Title;