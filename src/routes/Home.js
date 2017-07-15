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
  LoremIpsum,
  TimelineBody,
  TimelineIcon,
  TimelineView,
  TimelineItem,
  TimelineTitle,
  TimelineHeader,
} from '@sketchpixy/rubix';

@connect((state) => state)
class Home extends React.Component {
  _getPosts() {
    var now = new Date();
    var weekday = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    var month = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var posts = ['blue', 'green', 'yellow', 'black', 'red'];

    return posts.map((post, index) => {
      return (
        <TimelineView withHeader className={'border-hoverblue tl-' + post} key={index}>
          <TimelineItem>
            <TimelineHeader className={'bg-hover' + post}>
              <TimelineIcon className={'bg-' + post + ' fg-white'} glyph='icon-fontello-chat-1' />
              <TimelineTitle>
                {now.getDate() + " " + month[now.getMonth()] + " " + now.getFullYear() + " " + now.getHours() + ":" + now.getMinutes()}
              </TimelineTitle>
            </TimelineHeader>
            <TimelineBody>
              <ul>
                <li>
                  <LoremIpsum query='2s' />
                </li>
              </ul>
            </TimelineBody>
          </TimelineItem>
        </TimelineView>
      );
    });
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={4} sm={3} md={2}>
            <PanelContainer>
              <Panel>
                <PanelBody>
                  Faceted Browsing
                </PanelBody>
              </Panel>
            </PanelContainer>
          </Col>
          <Col xs={4} sm={6} md={8}>
            <PanelContainer>
              <Panel>
                <PanelBody>
                  {this._getPosts()}
                </PanelBody>
              </Panel>
            </PanelContainer>
          </Col>
          <Col xs={4} sm={3} md={2}>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Home;