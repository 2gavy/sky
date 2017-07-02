import React from 'react';
import { connect } from 'react-redux';

import actions from '../redux/actions';

import {
  Row,
  Col,
  Grid,
  Panel,
  PanelBody,
  PanelContainer,
} from '@sketchpixy/rubix';

@connect((state) => state)
export default class Home extends React.Component {
  static fetchData(store) {
    return store.dispatch(actions.getGreeting('Greetings from Rubix :)'));
  }

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
                  <p>{this.props.greetings.hello}</p>
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
