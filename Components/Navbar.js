import React, { Component } from "react";
import "../App.css";
import { Link, NavLink } from "react-router-dom";

class Navbar extends Component {
  container = React.createRef();
  state = {
    open: false,
  };
  handleButtonClick = () => {
    this.setState((state) => {
      return {
        open: !state.open,
      };
    });
  };
  handleClickOutside = (event) => {
    if (
      this.container.current &&
      !this.container.current.contains(event.target)
    ) {
      this.setState({
        open: false,
      });
    }
  };
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }
  render() {
    return (
      <div className="main">
        <ul className="main-1">
          <li>
            <span>ILRNU</span>
          </li>
          <li className="indent">Join as a tutor</li>
        </ul>
        <div className="container" ref={this.container}>
          <button type="button" class="button" onClick={this.handleButtonClick}>
            ☰
            <img src="Avatar.png" alt="" ></img>
          </button>
          {this.state.open && (
            <div className="dropdown">
              <ul>
                <li>
                <Link to="Login">Login</Link>
                </li>
                <li>Signup</li>
                <li>New Login Tutorial Works</li>
                <li>Help Center</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default Navbar;
