import React from 'react';
import PropTypes from 'prop-types';
import {Form, Col, FormGroup, ControlLabel,
FormControl, Button} from '@sketchpixy/rubix';
import {loginUser} from '../redux/apis/UserService';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userid: '',
            password: '',
        };
    }

    handleChange = (e) => this.setState({[e.target.name]: e.target.value});
    handleSubmit = (e) => {
        loginUser(this.state.userid, this.state.password)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.log(err));
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
                                onChange={this.handleChange} />
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
                                placeholder="Password" />
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

export default Login;
