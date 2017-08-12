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
import Report from './routes/Report';
import Report2 from './routes/Report2';
import List from './routes/usermanagement/List';
import Profile from './routes/usermanagement/Profile';

import { extend } from 'lodash'
import { SearchkitManager, SearchkitProvider} from 'searchkit'

const host = "http://demo.searchkit.co/api/movies"
const searchkit = new SearchkitManager(host)

class App extends React.Component {
  render() {
    return (
      <SearchkitProvider searchkit={searchkit}>
        <MainContainer {...this.props}>
          {/*<Sidebar />*/}
          <Header />
          <div id='body'>
            <Grid>
              <Row>
                {this.props.children}
              </Row>
            </Grid>
          </div>
          {/*<Footer />*/}
        </MainContainer>
      </SearchkitProvider>

    );
  }
}

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='/home2' component={Home2} />
    <Route path='/report' component={Report} />
    <Route path='/report2' component={Report2} />
    <Route path='/usermanagement/list' component={List} />
    <Route path='/usermanagement/profile' component={Profile} />
  </Route>
);

export default routes;
