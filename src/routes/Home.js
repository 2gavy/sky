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
    return store.dispatch(actions.getGreeting('asdf, World!'));
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={2} sm={2} md={3}>
          </Col>          
          <Col xs={8} sm={8} md={6}>
            <PanelContainer>
              <Panel>
                <PanelBody>
                  <p>{this.props.greetings.hello}</p>
                </PanelBody>
              </Panel>
            </PanelContainer>
          </Col>
          <Col xs={2} sm={2} md={3}>
          </Col>
        </Row>
      </Grid>
    );
  }
}
