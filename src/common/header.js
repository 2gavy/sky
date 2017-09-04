import React from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

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
            {/* <div className="input-group" >
              <input className="form-control" placeholder="Search" />
              <div className="input-group-addon plain" style={{ width: '35%' }}>
                <button role="button" className="btn btn-default" type="button">
                  <span>Search </span>
                  <Icon bundle='fontello' glyph='search' />
                </button>
              </div>
            </div> */}
            <SearchBox placeholder="Search" autofocus={true} searchOnChange={true} prefixQueryFields={["actors^1", "type^2", "languages", "title^10"]} />
          </NavItem>
          <NavItem className='hidden-xs'>
            <Icon bundle='fontello' glyph='star-1' />
          </NavItem>
          <ProfileMenu />
        </Nav>
        <Nav>
          <NavItem className='logout' href='#'>
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
        <DirectNavItem eventKey={1} path="/">Home</DirectNavItem>
        <DirectNavItem className='hidden-sm' eventKey={2} path="/report/068115">Sample Report</DirectNavItem>
        {/* <DirectNavItem className='hidden-sm' eventKey={3} path="/home2">Technology</DirectNavItem> */}
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
        <MenuItem>
          Edit Feed Preference
            {/* <Row>
              <Col xs={2} className='avatar-container' collapseRight>
                <div><img src='/imgs/app/avatars/avatar22.png' width='40' height='40' alt='sarah_patchett' /></div>
                <div className='text-center'>
                  <Label bsStyle='info'>NEW</Label>
                </div>
              </Col>
              <Col xs={10} className='notification-container' collapseLeft collapseRight>
                <div className='time'>
                  <strong className='fg-darkgray50'><Icon bundle='fontello' glyph='chat-5' /></strong>
                </div>
                <div className='message-header'>
                  <strong className='fg-darkgreen45'>Sarah Patchett sent you a private message</strong>
                </div>
                <div className='message-details fg-text'>
                  <span>{"Hey Anna! Sorry for delayed response. I've just finished reading the mail you sent couple of days ago..."}</span>
                </div>
              </Col>
            </Row> */}

        </MenuItem>

        <MenuItem onClick={() => {this.props.router.push("/usermanagement/list") }}>
          Admin
        </MenuItem>

        <MenuItem>
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
                <Col md={6} sm={5} xs={6}>
                  <Brand />
                  <TopicNavigation />
                </Col>
                <Col md={6} sm={7} xs={3} collapseRight className='text-right'>
                    {  !!this.props.loginUser.username &&
                      <span>Welcome, {this.props.loginUser.username} </span>
                    }
                  <HeaderNavigation />
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
        loginUser: state.users.loginUser,
        ownProps: ownProps,
    };
};

const mapDispatchToProps = () => {
    return {
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
