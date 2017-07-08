import React from 'react';
import classNames from 'classnames';
import { IndexRoute, Route } from 'react-router';

import { Grid, Row, Col, MainContainer } from '@sketchpixy/rubix';

/* Common Components */

import Sidebar from './common/sidebar';
import Header from './common/header';
import Footer from './common/footer';

/* Pages */

import Home from './routes/Home';
import Home2 from './routes/Home2';
import List from './routes/usermanagement/List';

class App extends React.Component {
  render() {
    return (
      <MainContainer {...this.props}>
        {/*<Sidebar />*/}
        <Header />
        <div id='body'>
          <Grid>
            <Row>
              {/*<Col xs={2} s={2} md={2}>
              </Col>
              <Col xs={8} s={8} md={8}>
                {this.props.children}
              </Col>
              <Col xs={2} s={2} md={2}>
              </Col>*/}
              {this.props.children}
            </Row>
          </Grid>
        </div>
        {/*<Footer />*/}
      </MainContainer>
    );
  }
}

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='/home2' component={Home2} />
    <Route path='/usermanagement/list' component={List} />
  </Route>
);

export default routes;
