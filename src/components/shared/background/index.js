import './index.css';
import React from 'react';
import {Pipeline} from 'ambient-cbg'
import logo from '../../../assets/logo.svg';

function Background() {
  	return (
		<React.Fragment>
            <Pipeline/>
            <div className="logoLayout">
                <img src={logo} alt="" className="logo" />
            </div>
        </React.Fragment>
  	);
}

export default Background;
