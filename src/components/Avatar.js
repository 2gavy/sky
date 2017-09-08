import React from 'react';

class Avatar extends React.Component {
  render() {
    return (
      <div className='inbox-avatar'>
        <img src={this.props.src} width='40' height='40' />
        <div className='inbox-avatar-name'>
          <div className='fg-darkgrayishblue75' style={{top: 0}}>{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default Avatar