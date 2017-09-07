import React from 'react';
import PropTypes from 'prop-types';
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
  Button,
} from '@sketchpixy/rubix';
 //
 // const profile = [{
 //    profilePic: '/imgs/app/avatars/avatar16.png',
 //    name: 'ong ting wei',
 //    department: 'IT',
 //    accessRights: ['admin','read','write'],
 //    isUserRemoved: false,
 //  }];

// @connect((state) => state)
class Profile extends React.Component {
  // static fetchData(store) {
  //   return store.dispatch(Actions.getUsers(profile));
  // }

    state = {
        isEditable: false,
        user: {},
    }

    componentWillMount = () => {
        this.props.getUser();
    }

    componentWillReceiveProps = (nextProps) => {
        if (this.props.user !== nextProps.user) {
            this.setState({
                user: nextProps.user
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

  //renderBody = () => {
  //  return this.props.users.map((user, idx) => {
  //    return (
  //      <tr key={idx}>
  //        <td>{idx+1}</td>
  //        <td><img src={user.profilePic} width='40' height='40'/></td>
  //        <td>{user.name}</td>
  //        <td>{user.department}</td>
  //        <td>{user.accessRights.join(', ')}</td>
  //        <td className="profileAction">
  //          <a href="/edit">edit</a>
  //          <a href="/delete">delete</a>
  //        </td>
  //      </tr>
  //    )
  //  })
  //};

  renderBody = () => {
      return map(this.props.user, (user, id) => {
          return <AdminRow handleChange={this.handleChange}
              key={id}
              id={id}
              user={user} />;
      });
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

Profile.propTypes = {
    profile: PropTypes.object,
}

//const mapStateToProps = (state) => {
//    return {
//        profile: state.users.profile,
//    }
//}

//const mapDispatchToProps = (dispatch) => {
//    return {
//        logintest: () => {
//            dispatch(actions.loginuserrequest({
//                username: 'user01',
//                password: 'password01',
//            }));
//        },
//    }
//}

const mapStateToProps = (state) => {
    return {
        user: state.userModule.users,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUser: () => {
            dispatch(Actions.getUser({
            }));
        },
        updateUser: () => {
            dispatch(Actions.getUser({
            }));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Profile);
