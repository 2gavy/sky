import React from 'react';
import { connect } from 'react-redux';
import AdminRow from './AdminRow';
import CreateUserForm from './CreateUserForm'
import * as Actions from '../../redux/actions';
import map from 'lodash/map';

import {
  Row,
  Col,
  Grid,
  Panel,
  PanelBody,
  PanelContainer,
  Table,
  Button,
  PanelFooter,
  Modal
} from '@sketchpixy/rubix';


class Admin extends React.Component {

  state = {
    isEditable: false,
    users: {},
    showModal: false,
    value: '',
    newUser:{},
  }

  componentDidMount() {
      this.props.getUsersRequest();
  }

  componentWillReceiveProps = (nextProps) => {
    if(this.props.users !== nextProps.users) {
      this.setState({
        users: nextProps.users
      })
    }
  }

  handleChange = (id) => (key) => (evt) => {

    const newUsers = {
      ...this.state.users,
      [id]: {
        ...this.state.users[id],
        [key]: evt.target.value
      }
    }
    this.setState({users: newUsers});
  }


  updateUsers = (userid) => {
      // console.log(this.state.users[userid]);
      this.props.onUpdateUsers(userid, this.state.users[userid]);
  };

  
  deleteUser = (userid) => (e) => {
    console.log(userid);
    this.props.onDeleteUser(userid);
   
  };


  launchAddUserModal= () => {
    this.setState({ showModal: true});      
  };

  close= () => {
    this.setState({ showModal: false});      
  };

  formSubmitHandler = (newUserObj) => {
    this.close();
    console.log(newUserObj);
    this.props.onAddUser(newUserObj);
  }

  renderAddUserForm =() =>{
    return (
      <CreateUserForm
       onSubmit={this.formSubmitHandler}
      />      
    )
  };
  
  renderHeader = () => {
    return (
        <tr>
          <th>#</th>
          <th>Profile Picture</th>
          <th>User Name</th>
          <th>Department</th>
          <th>Access Rights</th>
          <th></th>
        </tr>
      )
  };

  renderBody = () => {
    return map(this.props.users, (user) => {
      return (
        <AdminRow
          handleChange={this.handleChange(user.userid)}
          key={user.userid}
          id={user.userid}
          user={user}
          updateUsers={this.updateUsers}
          deleteUser={this.deleteUser}
        />
      )
    });
  };

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} sm={12} md={12} className="adminTable">
            <PanelContainer controls={false}>
              <Panel>
                <PanelBody>
                  <Table responsive>
                    <thead>
                      {this.renderHeader()}
                    </thead>
                    <tbody>
                      {this.renderBody()}
                    </tbody>
                  </Table>
                </PanelBody>
              </Panel>
            </PanelContainer>
            <Grid>
              <Button bsStyle='blue' onClick={this.launchAddUserModal}>Add New User</Button>
              <Modal show={this.state.showModal} onHide={this.close}>
                <Modal.Header closeButton>
                  <Modal.Title>Add new user</Modal.Title>
                </Modal.Header>
              <Modal.Body>
                {this.renderAddUserForm()}
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.close}>Cancel</Button>
              </Modal.Footer>
            </Modal>
            </Grid>
          </Col>
        </Row>
      </Grid>
    );
  }
}


const mapStateToProps = (state) => {
    return {
        users: state.userModule.users,
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
      getUsersRequest: () => {
          // Dispatch action to sagas/userMgtSaga.js
          dispatch(Actions.getUsersRequest());
      },
      onUpdateUsers: (userid, userObj) => {
          dispatch(Actions.updateUserRequest({userid: userid, ...userObj}));
      },
      onDeleteUser: (userid) => {
        dispatch(Actions.deleteUserRequest(userid));
      },
      onAddUser: (newUserObj) =>{
        dispatch(Actions.createUserRequest(newUserObj));
      },
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Admin);
