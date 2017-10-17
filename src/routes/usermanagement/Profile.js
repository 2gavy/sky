import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AdminRow from "./AdminRow";
import * as Actions from "../../redux/actions";
import map from "lodash/map";

import {
  Row,
  Col,
  Grid,
  Panel,
  PanelBody,
  PanelContainer,
  Table,
  Button,
  Image,
  Modal
} from "@sketchpixy/rubix";
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
    showEditPWModal: false,
    showResetPWModal: false,
    showConfirmModal: false
  };

  componentWillMount = () => {
    this.props.getUser();
  };

  componentWillReceiveProps = nextProps => {
    if (this.props.user !== nextProps.user) {
      this.setState({
        user: nextProps.user
      });
    }
  };

  close() {
    this.setState({
      showEditPWModal: false,
      showResetPWModal: false,
      showConfirmModal: false });
  }

  openEditPW() {
    this.setState({ showEditPWModal: true });
  }
  openResetPW() {
    this.setState({ showResetPWModal: true });
  }
  openConfirmPW() {
    this.setState({ showEditPWModal: false });
    this.setState({ showConfirmModal: true });
  }
  renderBody = () => {
    return (
      <tr>
        <td />
        <td>{this.props.user.name}</td>
        <td>{this.props.user.department}</td>
      </tr>
    );
  };

  render() {
    return (
        <div className="profileContainer">

            <div className="profileImageContainer">
                <Image src="/imgs/app/avatars/avatar23.png" rounded />
            </div>
            <div className="profileDetailsContainer" >
                <div className="profileDetail">
                    <h1> {this.props.user.username}</h1>
                </div>
                <div className="profileDetail">
                    <span>Department: </span> <span>{this.props.user.department}</span>
                </div>

                <div className="profileActions">
                    <div onClick={this.openEditPW.bind(this)}>Edit Password</div>
                    <div onClick={this.openResetPW.bind(this)}>Reset Password</div>
                </div>
            </div>
            <Modal show={this.state.showEditPWModal} onHide={this.close.bind(this)}>
              <Modal.Header closeButton>
                <Modal.Title>Change Password</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>New Password: <input type="password"/></p>
                <p>Confirm New Password: <input type="password"/></p>
              </Modal.Body>
              <Modal.Footer>
                <Button bsStyle='primary' onClick={this.openConfirmPW.bind(this)}>Save</Button>
                <Button onClick={this.close.bind(this)}>Close</Button>
              </Modal.Footer>
            </Modal>

            <Modal show={this.state.showConfirmModal} onHide={this.close.bind(this)}>
              <Modal.Header closeButton>
                <Modal.Title>Confirm change password?</Modal.Title>
              </Modal.Header>
              <Modal.Footer>
                <Button bsStyle='primary' onClick={this.close.bind(this)}>Yes</Button>
                <Button onClick={this.close.bind(this)}>No</Button>
              </Modal.Footer>
            </Modal>

            <Modal show={this.state.showResetPWModal} onHide={this.close.bind(this)}>
              <Modal.Header closeButton>
                <Modal.Title>Reset Password</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>Send new password to email: <input type="text"/></p>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.close.bind(this)}>Send</Button>
              </Modal.Footer>
            </Modal>
        </div>


    );
  }
}



Profile.propTypes = {
  profile: PropTypes.object
};



const mapStateToProps = state => {
  return {
    user: state.userModule.loginUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUser: () => {
      dispatch(Actions.getSelfRequest({}));
    },
    updateUser: () => {
      dispatch(Actions.updateSelfSuccess({}));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
