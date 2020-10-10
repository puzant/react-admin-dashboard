import React, { Component } from 'react';
import MaterialTable from 'material-table'
import MockUserData from './MockUsersData'
import { ToastContainer, toast } from 'react-toastify';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import 'react-toastify/dist/ReactToastify.css';

const styles = {
  modelBox: {
    margin: '100px auto',
    width: 410,
    backgroundColor: '#424242',
    border: '2px solid #000',
    boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)',
    padding: '16px 32px 24px',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-around'
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
  },
  tableItem: {
    fontWeight: 'bold'
  },
  dataCont: {
    display: 'flex',
    flexDirection: 'column',
  },
  modelData: {
    
  }
}

class Table extends Component {
  constructor(props) {
    super(props)
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      usersData: MockUserData.mock_data,
      open: false,
      rowData: null
    }
  }

  handleOpen(rowData) {
    this.setState({ open: true, rowData: rowData});
  }

  handleClose(){
    this.setState({ open: false });
  };
  
  render() {

    const { classes } = this.props;
    const {usersData, rowData} = this.state
    const notifyDeletingUser = (text) => toast(text)

    return ( 
      <div className="table-container">

        <ToastContainer />

        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}>
          
          <div className={classes.modelBox}>

            <div className={classes.header}>
              {MockUserData.table_columns.map((el) => (
                <span className={classes.tableItem}>
                  {el.title}: 
                </span>
              ))}
            </div>

            <div className={classes.dataCont}>
              {rowData && <span className={classes.modelData}>{rowData.firstName}</span>}
              {rowData && <span className={classes.modelData}>{rowData.lastName}</span>}
              {rowData && <span className={classes.modelData}>{rowData.nationality}</span>}
              {rowData && <span className={classes.modelData}>{rowData.phoneNumber}</span>}
              {rowData && <span className={classes.modelData}>{rowData.lastMonthBill}</span>}
              {rowData && <span className={classes.modelData}>{rowData.address}</span>}
              {rowData && <span className={classes.modelData}>{rowData.servicesSubscribed}</span>}
              {rowData && <span className={classes.modelData}>{rowData.age}</span>}
            </div>

          </div>

        </Modal>

        <MaterialTable
          title="Users"
          columns={MockUserData.table_columns}
          data={Array.from(this.state.usersData)}
          editable={{
            onRowAdd: newData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                {
                  const data = this.state.usersData;
                  data.push(newData);
                  this.setState({ data }, () => resolve());
                  notifyDeletingUser('new user was added successfuly')
                }
                resolve()
              }, 1000)
            }),
            onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                {
                  const data = this.state.usersData;
                  const index = data.indexOf(oldData);
                  data[index] = newData;
                  this.setState({ data }, () => resolve());
                  notifyDeletingUser('user info was updated')
                }
                resolve()
              }, 1000)
            }),
          }}
          actions={[
            {
              icon: 'info',
              tooltip: 'More info',
              onClick: (event, rowData) => {
                this.handleOpen(rowData)
              }
            },
            {
              icon: 'delete',
              tooltip: 'Delete User',
              onClick: (event, rowData) => {
                let index = usersData.findIndex(x => x.firstName == rowData.firstName);
                let array = [...usersData]
                array.splice(index, 1)
                this.setState({ usersData: array })
                notifyDeletingUser('user has been deleted')
              }
            },
          ]}
        >

        </MaterialTable>
      </div>
     );
  }
}
 
export default withStyles(styles)(Table);