import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AdminRow from "./AdminRow";
import * as Actions from "../../redux/actions";
import map from "lodash/map";
import FileBase64 from 'react-file-base64';
 

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
    showConfirmModal: false,
    showPwdErrMsg: false,
    newPassword:'',
    confirmNewPassword:'',
    files:[],
    showUploadModal:false
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
      showConfirmModal: false,
      showPwdErrMsg: false,
      newPassword:'',
      confirmNewPassword:'',
      showUploadModal:false });
  }

  openEditPW() {
    this.setState({ showEditPWModal: true });
  }

  openUploadImage() {
    this.setState({ showUploadModal: true });
  }
  
  openConfirmPW() {
    if(this.state.newPassword==this.state.confirmNewPassword) {
      this.setState({ showEditPWModal: false });
      this.setState({ showConfirmModal: true });
      this.setState({ showPwdErrMsg: false });
    }
    else {
      this.setState({ showPwdErrMsg: true });
      
    }

  }

  handleChange = (evt) => {
    
    const key = evt.target.name;
    this.setState({[key]: evt.target.value});
  }

  //handle change password
  handleChangePwd = () => {
    console.log(this.props.user);
    this.props.user.password=this.state.newPassword;
    console.log(this.props.user);
    this.props.updateUser(this.props.user);
    this.setState({ showConfirmModal: false });
    
    // loginUser(this.state.userid, this.state.password)
    //     .then((res) => {
    //         console.log(res);
    //     })
    //     .catch((err) => console.log(err));
  }
  getFiles(files){
    this.setState({ files: files });
  }
  saveImageToObject() {
    this.props.user.profilePic=this.state.files[0].base64;
    this.setState({ showUploadModal: false });
    console.log("this.props.user");
    console.log(this.props.user);
    this.props.updateUser(this.props.user);
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
    console.log(this.props.user);
    return (
        <div className="profileContainer">

            <div className="profileImageContainer profileActions">
                <Image src={this.props.user.profilePic!=null?this.props.user.profilePic:"/imgs/app/avatars/avatar23.png"}   rounded />
                <div onClick={this.openUploadImage.bind(this)}>Upload Image</div>
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
                </div>
            </div>
            <Modal show={this.state.showUploadModal} onHide={this.close.bind(this)}>
              <Modal.Header closeButton>
                <Modal.Title>Upload Image</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <FileBase64 multiple={ true } onDone={ this.getFiles.bind(this) } />
              </Modal.Body>
              <Modal.Footer>
                <Button bsStyle='primary' onClick={this.saveImageToObject.bind(this)}>Save</Button>
                <Button onClick={this.close.bind(this)}>Close</Button>
              </Modal.Footer>
            </Modal>


            <Modal show={this.state.showEditPWModal} onHide={this.close.bind(this)}>
              <Modal.Header closeButton>
                <Modal.Title>Change Password</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>New Password: <input type="password" name="newPassword" onChange={this.handleChange.bind(this)} /></p>
                <p>Confirm New Password: <input type="password" name="confirmNewPassword" onChange={this.handleChange.bind(this)}/></p>
                <p>{this.state.showPwdErrMsg ? "Password does not match with confirm password": ""}</p>
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
                <Button bsStyle='primary' onClick={this.handleChangePwd.bind(this)}>Yes</Button>
                <Button onClick={this.close.bind(this)}>No</Button>
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
    updateUser: (profile) => {
      dispatch(Actions.updateSelfRequest({
        profile: profile
    }));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
