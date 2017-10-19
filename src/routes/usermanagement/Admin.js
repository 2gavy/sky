import React from 'react';
import { connect } from 'react-redux';
import AdminRow from './AdminRow';
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
  // Modal,
  // Button,
  
} from '@sketchpixy/rubix';


class Admin extends React.Component {

  state = {
    isEditable: false,
    users: {},
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
      this.props.onUpdateUsers(userid, this.state.users[userid]);
  };

  deleteUser = (userid) => (e) => {
      console.log(userid);
      this.props.onDeleteUser(userid);
     
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
  // let close = () => this.setState({ showDeleteUserModal: false});

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
      }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Admin);
