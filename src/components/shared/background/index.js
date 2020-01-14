import './index.css';
import React from 'react';
import {Swirl} from 'ambient-cbg';
import logo from '../../../assets/logo.svg';
import arrow from '../../../assets/arrow.ico';

function Background() {
  	return (
		<React.Fragment>
            <Swirl/>
            <div className="logoLayout">
                <img src={logo} alt="" className="logo" />
            </div>
            <div className="bounce">
                <img src={arrow} alt="" className="arrow" />
            </div>
        </React.Fragment>
  	);
}

export default Background;
