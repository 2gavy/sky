import React from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import {Form, Col, FormGroup, ControlLabel,
FormControl, Button} from '@sketchpixy/rubix';
// import {loginUser} from '../redux/apis/UserService';
import {loginUserRequest} from '../redux/actions/users';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userid: '',
            password: '',
        };
    }

    handleChange = (e) => this.setState({[e.target.name]: e.target.value});
    handleSubmit = () => {
        this.props.onLoginUserRequest(this.state.userid, this.state.password);
        // loginUser(this.state.userid, this.state.password)
        //     .then((res) => {
        //         console.log(res);
        //     })
        //     .catch((err) => console.log(err));
    }
    handleKeyPress = (e) => {       
        if(e.key == 'Enter'){
            this.props.onLoginUserRequest(this.state.userid, this.state.password);
        }
      }
    render() {
        return (
            <Form horizontal>
              <FormGroup controlId="formHorizontalEmail">
              	  <Col componentClass={ControlLabel} sm={4}>
              		ID
              	  </Col>
              	  <Col sm={4}>
              		<FormControl  type="number"
                                placeholder="id"
                                name="userid"
                                value={this.state.userid}
                                placeholder="User ID"
                                onChange={this.handleChange} autoFocus/>
              	  </Col>
            	</FormGroup>

          	   <FormGroup controlId="formHorizontalPassword">
              	  <Col componentClass={ControlLabel} sm={4}>
              		Password
              	  </Col>
              	  <Col sm={4}>
              		<FormControl  type="password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                placeholder="Password" onKeyPress={this.handleKeyPress}/>
              	  </Col>
          	    </FormGroup>
                <FormGroup>
              	  <Col smOffset={4} sm={4}>
              		<Button type="button" onClick={this.handleSubmit}>
              		  Sign in
              		</Button>
              	  </Col>
              	</FormGroup>
            </Form>
        );
    }
}

Login.propType = {
    userid: PropTypes.number,
    password: PropTypes.string,
};

const mapStateToProps = () => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoginUserRequest: (username, password) => {
            dispatch(loginUserRequest({
                username: username,
                password: password
            }));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
