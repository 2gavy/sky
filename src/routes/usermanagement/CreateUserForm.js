import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  FormGroup,
  FormControl,
  Form,
  ControlLabel,
  HelpBlock
} from '@sketchpixy/rubix';

class CreateUserForm extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            usernameValue: '',
            pfidValue: '',
            passwordValue: '',
            departmentValue: '',
            accessrightsValue: '',
        };
    }
    //Validate the fields
    getUsernameValidationState() {
        const length = this.state.usernameValue.length;
        if (length > 4) return 'success';
        else if (length > 3) return 'warning';
        else if (length > 0) return 'error';
    }
    getPfidValidationState() {
        const length = this.state.pfidValue.length;
        if (length > 2) return 'success';
        else if (length > 0) return 'error';
    }
    getPasswordValidationState() {
        const length = this.state.passwordValue.length;
        if (length > 9) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
    }
    getDepartmentValidationState() {
        const length = this.state.departmentValue.length;
        if (length > 4) return 'success';
        else if (length > 2) return 'warning';
        else if (length > 0) return 'error';
    }
    
    handleSave = () => {
        //Dispatch newly edited user object for saving
        this.props.updateUsers(this.props.user.userid);
        this.setState({isEditable: false})
    }
    //handle changes in value fields
    handleUsernameChange(e) {
        this.setState({ usernameValue: e.target.value });
    }
    handlePfidChange(e) {
        this.setState({ pfidValue: e.target.value });
    }
    handlePasswordChange(e) {
        this.setState({ passwordValue: e.target.value });
    }
    handleDepartmentChange(e) {
        this.setState({ departmentValue: e.target.value });
    }
    handleAccessrightsChange(e) {
        this.setState({ accessrightsValue: e.target.checked });
    }
    submitForm = () => {
        this.props.onSubmit({
            'username':this.state.usernameValue,
            'userid':this.state.pfidValue,
            'password':this.state.passwordValue,
            'department':this.state.departmentValue,
            'isAdmin':this.state.accessrightsValue,
        });        
    }
    render() {      
      return (
        <Form>
            {/* Ask for username, pfid, department, password, accessrights */}
            <FormGroup
                controlId="formBasicText"
                validationState={this.getUsernameValidationState()}>
                <ControlLabel>User Name</ControlLabel>
                <FormControl
                    type="text"
                    value={this.state.usernameValue}
                    placeholder="Enter user name here"
                    onChange={::this.handleUsernameChange}
                />
                <FormControl.Feedback />
                <HelpBlock>Username must be at least 5 characters.</HelpBlock>
            </FormGroup>
            <FormGroup
                controlId="formBasicText"
                validationState={this.getPfidValidationState()}>
                <ControlLabel>PF ID</ControlLabel>
                <FormControl
                type="text"
                value={this.state.pfidValue}
                placeholder="Enter PF ID here"
                onChange={::this.handlePfidChange}
                /><FormControl.Feedback />
                <HelpBlock>PF ID must be at least 3 characters.</HelpBlock>
            </FormGroup>
            <FormGroup
                controlId="formBasicText"
                validationState={this.getPasswordValidationState()}>
                <ControlLabel>Password</ControlLabel>
                <FormControl
                type="password"
                value={this.state.passwordValue}
                placeholder="Enter password here"
                onChange={::this.handlePasswordChange}
                /><FormControl.Feedback />
                <HelpBlock>Password must be at least 10 characters.</HelpBlock>
            </FormGroup>            
            <FormGroup
                controlId="formBasicText"
                validationState={this.getDepartmentValidationState()}>
                <ControlLabel>Department</ControlLabel>
                <FormControl
                type="text"
                value={this.state.departmentValue}
                placeholder="Enter department here"
                onChange={::this.handleDepartmentChange}
                /><FormControl.Feedback />
                <HelpBlock>Department must be at least 10 characters.</HelpBlock>
            </FormGroup>
            <FormGroup>
                <ControlLabel>Access Rights</ControlLabel>
                <FormControl
                type="checkbox"
                value={this.state.accessrightsValue}
                onChange={::this.handleAccessrightsChange}
                /><FormControl.Feedback />
                <HelpBlock>Please indicate if it's admin</HelpBlock>
            </FormGroup>
            <Button bsStyle='blue' onClick={this.submitForm}>Submit</Button>
        </Form>
        
      );
    }
};

CreateUserForm.propTypes = {
    onSubmit: PropTypes.func,
};

export default CreateUserForm;
