import React from 'react';
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
  Col
} from '@sketchpixy/rubix';

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
            <Icon bundle='fontello' glyph='search-8' />
          </NavItem>
          <NavItem>
            <Icon bundle='fontello' glyph='star-1' />
          </NavItem>
          {/*<NavItem>
            <Icon bundle='fontello' glyph='user-female' />
          </NavItem>*/}
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
        <DirectNavItem eventKey={2} path="/report">Latest News</DirectNavItem>
        <DirectNavItem className='hidden-sm' eventKey={3} path="/home2">Technology</DirectNavItem>
      </Nav>
    );
  }
}

class ProfileMenu extends React.Component {
  render() {
    const bullhornIcon = (
      <span>
        <Icon bundle='fontello' glyph='user-female' />
        <Badge className='fg-darkbrown bg-orange notification-badge'>3</Badge>
      </span>
    );
    return (
      <NavDropdownHover noCaret eventKey={3} title={bullhornIcon} id='notifications-menu' className='header-menu'>
        <MenuItem href='#'>
          <Grid>
            <Row>
              <Col xs={2} className='avatar-container' collapseRight>
                <div><img src='/imgs/app/avatars/avatar22.png' width='40' height='40' alt='sarah_patchett' /></div>
                <div className='text-center'>
                  <Label bsStyle='info'>NEW</Label>
                </div>
              </Col>
              <Col xs={10} className='notification-container' collapseLeft collapseRight>
                <div className='time'>
                  <strong className='fg-darkgray50'><Icon bundle='fontello' glyph='chat-5'/></strong>
                </div>
                <div className='message-header'>
                  <strong className='fg-darkgreen45'>Sarah Patchett sent you a private message</strong>
                </div>
                <div className='message-details fg-text'>
                  <span>{"Hey Anna! Sorry for delayed response. I've just finished reading the mail you sent couple of days ago..."}</span>
                </div>
              </Col>
            </Row>
          </Grid>
        </MenuItem>
      </NavDropdownHover>
    );
  }
}

export default class Header extends React.Component {
  render() {
    return (
      <Grid id='navbar' {...this.props}>
        <Row>
          <Col xs={12}>
            <Navbar fixedTop fluid id='rubix-nav-header'>
              <Row>
                <Col xs={3} visible='xs'>
                  {/*<SidebarBtn />*/}
                </Col>
                <Col xs={6} sm={8}>
                  <Brand />
                  <TopicNavigation />
                </Col>
                <Col xs={3} sm={4} collapseRight className='text-right'>
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
