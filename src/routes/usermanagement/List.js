import React from 'react';
import { connect } from 'react-redux';

import actions from '../../redux/actions';

import {
  Row,
  Col,
  Grid,
  Panel,
  PanelBody,
  PanelContainer,
  Table
} from '@sketchpixy/rubix';


 const users = [{
    name: 'ong ting wei1',
    department: 'IT',
    accessRights: ['admin','read','write'],
    isUserRemoved: false,
  }, {
    name: 'ong ting wei',
    department: 'IT',
    accessRights: ['admin','read','write'],
    isUserRemoved: false,
  }];

@connect((state) => state)
export default class Home extends React.Component {
  static fetchData(store) {
    return store.dispatch(actions.getUsers(users));
  }

 

  renderHeader = () => {
    return (
        <tr>
          <th>#</th>
          <th>User Name</th>
          <th>Department</th>
          <th>Access Rights</th>
        </tr>
      )
  };

  renderBody = () => {
    console.log(this.props.users);
    return this.props.users.map((user, idx) => {
      return (
        <tr key={idx}>
          <td>{idx+1}</td>
          <td>{user.name}</td>
          <td>{user.department}</td>
          <td>{user.accessRights.join(', ')}</td>
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
            <PanelContainer>
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
      </Grid>
    );
  }
}
