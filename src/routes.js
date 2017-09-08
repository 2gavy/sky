import React from 'react';
import classNames from 'classnames';
import { IndexRoute, Route, Redirect } from 'react-router';

import { Grid, Row, Col, MainContainer } from '@sketchpixy/rubix';

/* Common Components */

import Sidebar from './common/sidebar';
import Header from './common/header';
import Footer from './common/footer';

/* Pages */
import Home from './routes/Home';
import Report from './routes/Report';
import EditReport from './routes/EditReport';
import Admin from './routes/usermanagement/Admin';
import Profile from './routes/usermanagement/Profile';
import Generic404NotFound from './routes/404';
import CreateReport from './routes/CreateReport';

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
    <Route path='/report/:reportid' component={Report} />
    <Route path='/editreport/:reportid' component={EditReport} />
    <Redirect from="/report" to="/" />
    <Route path='/usermanagement/list' component={Admin} />
    <Route path='/usermanagement/profile' component={Profile} />
    <Route path='/404' component={Generic404NotFound} />
    <Route path='/CreateReport' component={CreateReport} />
    <Route path="*" component={Generic404NotFound} />
  </Route>
);

export default routes;
