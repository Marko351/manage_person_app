import React, { Component } from 'react'
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBContainer
} from "mdbreact";
import { Link } from 'react-router-dom';

class Navbar extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }
  render() {
    return (
      <MDBNavbar color="black" dark expand="md">
        <MDBContainer>
          <MDBNavbarBrand>
            <strong className="mdb-color white-text">LOGO</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavItem active>
                <Link to="/"
                  className="white-text"
                  style={{ marginRight: '20px', marginLeft: '5px' }}>Home</Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link to="/createPerson" className="white-text">Create Person</Link>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    );
  }
}

export default Navbar;
