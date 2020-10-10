import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import mockUsersInfo from '../Users/mockUsersInfo';

class Login extends Component {

  constructor(props) {
    super(props)
    this.handleEmailInput = this.handleEmailInput.bind(this)
    this.handlePasswordInput = this.handlePasswordInput.bind(this)
    this.state = {
      email: null,
      password: null
    }
  }

  handleEmailInput = (e) => {
    this.setState({ email: e.target.value })
  }

  handlePasswordInput = (e) => {
    this.setState({ password: e.target.value })
  }
  
  login = () => {
    if(this.state.email == mockUsersInfo.email && this.state.password == mockUsersInfo.password) {
      localStorage.setItem('user-token', mockUsersInfo.token)
      console.log('test')
      return <Redirect to="/dashboard" />
    }
  }

  render() { 
    return ( 
      <MDBContainer>
        <MDBRow className="d-flex justify-content-center mt-5">
          <MDBCol md="6">
            <form>
              <p className="h4 text-center mb-4">Sign in</p>
              <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                Email:
              </label>
              <input onChange={this.handleEmailInput} type="email" id="defaultFormLoginEmailEx" placeholder="EX:John@hotmail.com" className="form-control" />
              <br />
              <label htmlFor="defaultFormLoginPasswordEx" placeholder="***********" className="grey-text">
                Password:
              </label>
              <input onChange={this.handlePasswordInput} type="password" id="defaultFormLoginPasswordEx" className="form-control" />
              <div className="text-center mt-4">
              <MDBBtn onClick={this.login} color="indigo" type="submit">Login</MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}
 
export default Login;