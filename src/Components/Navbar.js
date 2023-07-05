import "./Navbarstyles.css";
import React, { Component } from "react";
import { menuitems } from "./menuitems";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  handleShopClick = () => {
    window.open("https://eclone-ee9d6.firebaseapp.com/", "_blank");
  };  

  render() {
    return (
      <nav className="navbar-items">
        <img className="logo" src={require("../assets/logo.PNG")} alt="mylogo" />
        <div className="menu-icons" onClick={this.handleClick}>
          {this.state.clicked ? <CancelIcon /> : <MenuIcon />}
        </div>
        <ul className={this.state.clicked ? "navbar-lists active" : "navbar-lists"}>
          {menuitems.map((item, index) => (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                <i className={item.icon}></i>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <button onClick={this.handleShopClick}>Visit Our Shop</button>
      </nav>
    );
  }
}

export default Navbar;
