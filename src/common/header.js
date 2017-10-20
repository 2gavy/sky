import React from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import {logoutUserRequest} from '../redux/actions/users';
import { Link, withRouter } from 'react-router';
import l20n, { Entity } from '@sketchpixy/rubix/lib/L20n';

import {
  Label,
  SidebarBtn,
  Dispatcher,
  NavDropdown,
  NavDropdownHover,
  Navbar,
  Nav,
  NavItem,
  MenuItem,
  Badge,
  Button,
  Icon,
  Grid,
  Row,
  Radio,
  Col,
  FormControl
} from '@sketchpixy/rubix';

import {
  SearchBox
} from 'searchkit'

class Brand extends React.Component {
  render() {
    return (
      <Navbar.Header {...this.props}>
        <Navbar.Brand tabIndex='-1'>
          <a href='/'>
            <img src='/imgs/common/logo.png' alt='rubix' width='111' height='28' />
          </a>
        </Navbar.Brand>
      </Navbar.Header>
    );
  }
}
@withRouter
class HeaderNavigation extends React.Component {
  render() {
    return (
      <Nav pullRight>
        <Nav className='hidden-xs'>
          <NavItem>
            {/*Code change for ES: SearchBox*/}
            {/*<SearchBox placeholder="Search" autofocus={true} searchOnChange={true} prefixQueryFields={["actors^1", "type^2", "languages", "title^10"]} />*/}
            <SearchBox placeholder="Search" autofocus={true} searchOnChange={true} queryFields={["content","title"]} />
          </NavItem>
          <NavItem className='hidden-xs' href='/CreateReport'>
            <Icon bundle='fontello' glyph='plus-circle' />
          </NavItem>
          <ProfileMenu onLogout={this.props.onLogout} />
        </Nav>
        <Nav>
          <NavItem className='logout' href='#' onClick={() => this.props.onLogout()}>
            <Icon bundle='fontello' glyph='off-1' />
          </NavItem>
        </Nav>
      </Nav>
    );
  }
}

@withRouter
class DirectNavItem extends React.Component {
  render() {
    var currentLocation = this.props.location.pathname;
    return (
      <NavItem className={this.props.className} href={this.props.path} to={this.props.path} componentClass={Link}>
        {this.props.children}
      </NavItem>
    );
  }
}

@withRouter
class TopicNavigation extends React.Component {
  render() {
    return (
      <Nav bsStyle="pills" className='nav-orange75 hidden-xs' pullLeft>
        <DirectNavItem eventKey={1} path="/home">Home</DirectNavItem>
        <DirectNavItem className='hidden-sm' eventKey={2} path="/report/0000000000002194">Sample</DirectNavItem>
        <DirectNavItem className='hidden-sm' eventKey={2} path="/Collab">Collab</DirectNavItem>
      </Nav>
    );
  }
}

@withRouter
class ProfileMenu extends React.Component {
  render() {
    const bullhornIcon = (
      <span>
        <Icon bundle='fontello' glyph='user-female' />
        <Badge className='fg-darkbrown bg-orange notification-badge'></Badge>
      </span>
    );
    return (
      <NavDropdownHover noCaret eventKey={3} title={bullhornIcon} id='notifications-menu' className='header-menu'>
        <MenuItem onClick={() => {this.props.router.push("/usermanagement/profile") }}>
          Edit Profile
        </MenuItem>
        <MenuItem onClick={() => {this.props.router.push("/userFeedPreference") }}>
          Edit Feed Preference
        </MenuItem>
        <MenuItem onClick={() => {this.props.router.push("/usermanagement/list") }}>
          Admin
        </MenuItem>

        <MenuItem onClick={() => this.props.onLogout()}>
            Log Out
        </MenuItem>
      </NavDropdownHover>
    );
  }
}

class Header extends React.Component {
  render() {
    return (

      <Grid id='navbar' {...this.props.ownProps}>
        <Row>
          <Col md={12} sm={12} xs={12}>
            <Navbar fixedTop fluid id='rubix-nav-header'>
              <Row>
                <Col xs={3} visible='xs'>
                </Col>
                <Col md={6} sm={4} xs={6}>
                  <Brand />
                  <TopicNavigation />
                </Col>
                <Col md={6} sm={8} xs={3} collapseRight className='text-right'>
                  <HeaderNavigation onLogout={this.props.onLogout} />
                </Col>
              </Row>
            </Navbar>
          </Col>
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
    return {
        ownProps: ownProps,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => {
            dispatch(logoutUserRequest());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
