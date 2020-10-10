import React, { Component } from 'react';
import mockUserInfo from './mockUsersInfo'
import { MDBContainer, MDBBtn, MDBRow, MDBCol } from "mdbreact";
import { ToastContainer, toast } from 'react-toastify';

class Users extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userData: mockUserInfo,
      editedUserData: {
        email: null,
        password: null,
        firstName: null,
        lastName: null,
        role: null
      }
    }
  }

  handleFirstNameChange = (e) => {
    this.setState({editedUserData : {...this.state.userData, firstName: e.target.value} })
  }
  
  handleLastNameChange = (e) => {
    this.setState({editedUserData : {...this.state.userData, lastName: e.target.value} })
  }

  handlePasswordChange = (e) => {
    this.setState({editedUserData : {...this.state.userData, password: e.target.value} })
  }

  handleEmailChange = (e) => {
    this.setState({editedUserData : {...this.state.userData, email: e.target.value} })
  }

  handleRoleChange = (e) => {
    this.setState({editedUserData : {...this.state.userData, role: e.target.value} })
  }

  updateData = (e) => {
    this.setState({ userData: this.state.editedUserData })
  }


  render() { 

    const notifyDeletingUser = () => toast('User info updated!')

    const {userData} = this.state

    return ( 
      <MDBContainer className="mt-4" size="sm">

        <ToastContainer />

         <h2>Welcome, {userData.firstName} {userData.lastName}</h2>  
         <p>You Can edit & save your username, email, role, password</p>

            <div className="user-name">Name: {userData.firstName} {userData.lastName}</div>
            <div className="email-address">Email Address: {userData.email}</div>
            <div className="user-role">Role: {userData.role}</div>

            <br/>
            <h2>Edit your info</h2>

            <MDBRow>
              <MDBCol size="5">
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">First Name: </label>
                  <input onChange={this.handleFirstNameChange} type="text" className="form-control form-control-sm" />
                </div>
              </MDBCol>
            </MDBRow>

            <MDBRow>
              <MDBCol size="5">
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">LastName: </label>
                  <input onChange={this.handleLastNameChange} type="text" className="form-control form-control-sm" />
                </div>
              </MDBCol>
            </MDBRow>

            <MDBRow>
              <MDBCol size="5">
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Email: </label>
                  <input onChange={this.handleEmailChange} type="text" className="form-control form-control-sm" />
                </div>
              </MDBCol>
            </MDBRow>

            <MDBRow>
              <MDBCol size="5">
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Password: </label>
                  <input onChange={this.handlePasswordChange} type="password" className="form-control form-control-sm" />
                </div>
              </MDBCol>
            </MDBRow>

            <MDBRow>
              <MDBCol size="5">
                <div className="form-group">
                  <label htmlFor="role">Choose new role:</label>
                  <select onChange={this.handleRoleChange} className="browser-default custom-select">
                    <option>Edit user role</option>
                    <option value="Admin">Admin</option>
                    <option value="Employee">Employee</option>
                    <option value="Manager">Manager</option>
                  </select>
                </div>
              </MDBCol>
            </MDBRow>

            <MDBBtn onClick={() => {this.updateData(); notifyDeletingUser()}} color="primary">Save</MDBBtn>

      </MDBContainer>
     );
  }
}
 
export default Users;