import React from 'react';
import PropTypes from 'prop-types';

class AdminRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditable: false,
        };
    }

    renderEditableRow = (key) => {
      return (
        <input
          type="text"
          className="adminInput"
          defaultValue={this.props.user[key]}
          onChange={this.props.handleChange(key)}
          
        />
      )
    }

    handleSave = () => {
        //Dispatch newly edited user object for saving
        this.props.updateUsers(this.props.user.userid);
        this.setState({isEditable: false})
    }
  //   handleDelete = (userid) => {
  //     this.props.deleteUser(this.props.user.userid);
  //     this.setState({isEditable: false})
  // };

    render() {
      return (
        <tr key={this.props.id}>
          <td>{this.props.user.userid}</td>
          <td><img src={this.props.user.profilePic} width='40' height='40'/></td>
          <td>{this.state.isEditable ? this.renderEditableRow('username') : this.props.user.username}</td>
          <td>{this.state.isEditable ? this.renderEditableRow('department') : this.props.user.department}</td>
          <td>{this.props.user.isAdmin ? 'Admin' : ''}</td>
          <td className="adminAction">
            {this.state.isEditable ? null : <a onClick={() => this.setState({isEditable: true})}>edit</a>}
            {this.state.isEditable ? null : <a onClick={this.props.deleteUser(this.props.user.userid)}>delete</a> }
            {this.state.isEditable ? <a onClick={this.handleSave}>save</a> : null}
            {this.state.isEditable ? <a onClick={() => this.setState({isEditable: false})}>cancel</a> : null}
          </td>
        </tr>
      );
    }
};

AdminRow.propTypes = {
    handleChange: PropTypes.func,
    id: PropTypes.number,
    user: PropTypes.object,
    updateUsers: PropTypes.func,
    deleteUser: PropTypes.func,
};

export default AdminRow;
