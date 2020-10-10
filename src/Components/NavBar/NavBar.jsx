import React, { Component } from 'react';
import {
  MDBNavbar, 
  MDBNavbarBrand, 
  MDBNavbarNav, 
  MDBNavItem, MDBNavLink,
  MDBNavbarToggler, MDBCollapse, MDBFormInline,
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from '../../Root/Routes'

class NavBar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isAuth: false
    }
  }

  componentDidMount() {
    if(localStorage.getItem('user-token')) {
      this.setState({ isAuth: true })
    }
  }

  logoutUser = () => {
    localStorage.removeItem('user-token')
    this.setState({isAuth: false})
  }

  render() {

    return (
      <Router>
        <div>
        {this.state.isAuth && <MDBNavbar color="indigo" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Navbar</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler />
        <MDBCollapse id="navbarCollapse3" navbar>
          <MDBNavbarNav left>
            <MDBNavItem>
              <MDBNavLink to="/">Dashboard</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/table">Table</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/users">User</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBFormInline waves>
                <div className="md-form my-0">
                  <MDBNavItem style={{color: '#fff'}} onClick={this.logoutUser}>Logout</MDBNavItem>
                </div>
              </MDBFormInline>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>}

        <Routes auth={this.props.auth} />

      </div>
    </Router>
    )
  }
}

export default NavBar