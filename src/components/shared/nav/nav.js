import './nav.css';
import React from 'react';
import closeIcon from '../../../assets/close.svg';
import logo from '../../../assets/logo.svg';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            condition: false
        }
        this.handleClick= this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({
            condition: !this.state.condition
        })
    }

    render() {
      
        return(
            <div>
                <div className="headerTop">
                    <div className="logoTop">
                        <img src={logo} alt="" className="logo" />
                    </div>
                    <div className="menu-trigger" >
                        <span onClick={ this.handleClick }></span>
                    </div>
                </div>

                <div  className={ this.state.condition ? "menu menu--open" : "menu" }>
                    <div className="menu__item menu__item--1" data-direction="bt" >
                        <div className="menu__item-inner" >
                            <div className="mainmenu">
                                <Link to="/fed" className="mainmenu__item" onClick={this.handleClick}>FED</Link>
                                <Link to="/projects" className="mainmenu__item" onClick={this.handleClick}>Projects</Link>
                                <Link to="/talks" className="mainmenu__item" onClick={this.handleClick}>Talks</Link>
                                <Link to="/training" className="mainmenu__item" onClick={this.handleClick}>Training</Link>
                            </div>
                            <p className="label label--topleft label--vert-mirror">the important stuff</p>
                            <p className="label label--bottomright label--vert">made in bannockburn</p>
                        </div>
                    </div>
                    <div className="menu__item menu__item--2" data-direction="lr" >
                        <div className="menu__item-inner" >
                            <div className="menu__item-map"></div>
                            <Link href="/coders" className="menu__item-hoverlink">The Coders</Link>
                        </div>
                    </div>
                    <div className="menu__item menu__item--3" data-direction="bt" >
                        <div className="menu__item-inner" >
                            <div className="sidemenu">
                                <Link href="#" className="sidemenu__item"><span className="sidemenu__item-inner" >Support Portal</span></Link>
                                <Link href="#" className="sidemenu__item"><span className="sidemenu__item-inner" >Community</span></Link>
                                <Link href="#" className="sidemenu__item"><span className="sidemenu__item-inner" >Fun Crem</span></Link>
                                <Link href="#" className="sidemenu__item"><span className="sidemenu__item-inner" >Misc</span></Link>
                                <span href="#" className="sidemenu__item"><span className="sidemenu__item-inner" >DL's</span></span>
                            </div>
                        </div>
                    </div>
                    <div className="menu__item menu__item--4" data-direction="rl" >
                        <div className="menu__item-inner" >
                            <p className="label label--topleft label--line">Join us now</p>
                            <a href="#">Learn how to participate</a>
                        </div>
                    </div>
                    <div className="menu__item menu__item--5" data-direction="tb" >
                        <div className="menu__item-inner" >
                            <p className="quote">We build website pixel perfect, were pixel have purpose </p>
                        </div>
                    </div>
                    <button className="action action--close" onClick={ this.handleClick }><img src={closeIcon} alt="" /></button>
                </div>
            </div>
        )
    }
}

export default Menu;