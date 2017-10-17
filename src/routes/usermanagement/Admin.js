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
  Table
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
  //
  // renderEditableRow = (id, key) => {
  //   return (
  //     <input
  //       type="text"
  //       className="adminInput"
  //       onChange={this.handleChange(id, key)}
  //       value={this.state.users[id][key]}
  //     />
  //   )
  // }
  //
  // handleSave = () => {
  //     this.props.updateUsers(this.state.users);
  //     this.setState({isEditable: false})
  // }


  renderBody = () => {
    return map(this.props.users, (user) => {
      return (
        <AdminRow
          handleChange={this.handleChange(user.userid)}
          key={user.userid}
          id={user.userid}
          user={user}
          updateUsers={() => this.props.updateUsers(this.state.users)}
        />
      )
    });
  };

  // renderBody = () => {
  //   return map(this.props.users, (user, id) => {
  //     return (
  //       <tr key={id}>
  //         <td>{id}</td>
  //         <td><img src={user.profilePic} width='40' height='40'/></td>
  //         <td>{this.state.isEditable ? this.renderEditableRow(id, 'name') : user.name}</td>
  //         <td>{this.state.isEditable ? this.renderEditableRow(id, 'department') : user.department}</td>
  //         <td>{user.accessRights.join(', ')}</td>
  //         <td className="adminAction">
  //           {this.state.isEditable ? null : <a onClick={() => this.setState({isEditable: true})}>edit</a>}
  //           {this.state.isEditable ? null : <a href="/delete">delete</a> }
  //
  //           {this.state.isEditable ? <a onClick={this.handleSave}>save</a> : null}
  //           {this.state.isEditable ? <a onClick={() => this.setState({isEditable: false})}>cancel</a> : null}
  //         </td>
  //       </tr>
  //     )
  //   })
  // };

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
      updateUsers: () => {
      },
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Admin);
