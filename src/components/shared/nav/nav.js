import "./nav.css";
import React from "react";
import closeIcon from "../../../assets/close.svg";
import logo from "../../../assets/logo.svg";
import { HashLink as Link } from "react-router-hash-link";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      condition: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      condition: !this.state.condition
    });
  }

  render() {
    let showLogo = window.location.hash === "#/";
    return (
      <div>
        <div className="headerTop">
          {!showLogo ? (
            <div className="logoTop">
              <img src={logo} alt="logo" className="logo" />
            </div>
          ) : (
            ""
          )}

          <div className="menu-trigger">
            <span onClick={this.handleClick}></span>
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
                                <Link to="/panel#react-tabs-0" className="sidemenu__item" onClick={this.handleClick}><span className="sidemenu__item-inner" >Support Portal</span></Link>
                                <Link to="/panel#react-tabs-2" className="sidemenu__item" onClick={this.handleClick}><span className="sidemenu__item-inner" >Community</span></Link>
                                <Link to="/panel#react-tabs-4" className="sidemenu__item" onClick={this.handleClick}><span className="sidemenu__item-inner" >Fun Crem</span></Link>
                                <Link to="/panel#react-tabs-6" className="sidemenu__item" onClick={this.handleClick}><span className="sidemenu__item-inner" >Misc</span></Link>
                                <Link to="/panel#react-tabs-8" className="sidemenu__item" onClick={this.handleClick}><span className="sidemenu__item-inner" >DL's</span></Link>
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
          </div>
          <button className="action action--close" onClick={this.handleClick}>
            <img src={closeIcon} alt="" />
          </button>
        </div>
      </div>
    );
  }
}

export default Menu;
