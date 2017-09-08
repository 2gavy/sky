import React from 'react';
import { connect } from 'react-redux';

import * as Actions from '../../redux/actions';

import {
  Row,
  Col,
  Grid,
  Panel,
  PanelBody,
  PanelContainer,
  Table,
  Button,
} from '@sketchpixy/rubix';


 const profile = [{
    profilePic: '/imgs/app/avatars/avatar16.png',
    name: 'ong ting wei',
    department: 'IT',
    accessRights: ['admin','read','write'],
    isUserRemoved: false,
  }];

// @connect((state) => state)
class Profile extends React.Component {
  static fetchData(store) {
    return store.dispatch(Actions.getUsers(profile));
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

  renderBody = () => {
    return this.props.users.map((user, idx) => {
      return (
        <tr key={idx}>
          <td>{idx+1}</td>
          <td><img src={user.profilePic} width='40' height='40'/></td>
          <td>{user.name}</td>
          <td>{user.department}</td>
          <td>{user.accessRights.join(', ')}</td>
          <td className="profileAction">
            <a href="/edit">edit</a>
            <a href="/delete">delete</a>
          </td>
        </tr>
      )
    })
  };

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={1} sm={1} md={1}>
          </Col>
          <Col xs={10} sm={10} md={10}>
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
          <Col xs={1} sm={1} md={1}>
          </Col>
        </Row>
        <Button bsStyle="primary" onClick={this.props.loginTest}>Test Dispatch</Button>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        users: state.users.profiles,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginTest: () => {
            dispatch(Actions.loginUserRequest({
                username: 'user01',
                password: 'password01',
            }));
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile);
