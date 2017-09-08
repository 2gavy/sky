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
          onChange={this.props.handleChange}
          value={this.props.user[key]}
        />
      )
    }

    handleSave = () => {
        //Dispatch newly edited user object for saving
        // this.props.updateUsers(this.prop.users);
        this.setState({isEditable: false})
    }

    render() {
      return (
        <tr key={this.props.id}>
          <td>{this.props.id}</td>
          <td><img src={this.props.user.profilePic} width='40' height='40'/></td>
          <td>{this.state.isEditable ? this.renderEditableRow('name') : this.props.user.name}</td>
          <td>{this.state.isEditable ? this.renderEditableRow('department') : this.props.user.department}</td>
          <td>{this.props.user.accessRights.join(', ')}</td>
          <td className="adminAction">
            {this.state.isEditable ? null : <a onClick={() => this.setState({isEditable: true})}>edit</a>}
            {this.state.isEditable ? null : <a href="/delete">delete</a> }

            {this.state.isEditable ? <a onClick={this.handleSave}>save</a> : null}
            {this.state.isEditable ? <a onClick={() => this.setState({isEditable: false})}>cancel</a> : null}
          </td>
        </tr>
      );
    }
};

AdminRow.propTypes = {
    handleChange: PropTypes.func,
    id: PropTypes.string,
    user: PropTypes.object,
};

export default AdminRow;