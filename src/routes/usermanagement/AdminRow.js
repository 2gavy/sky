import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  Button,
} from '@sketchpixy/rubix';

class AdminRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditable: false,
            showDeleteUserModal:false,
            isDelete:false,
        };
    }

    defaultImg = "data:image/jpeg;base64,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zXoSx2WaYtnjkad+im10L93npw0cO2o5cQ77ayxOyXDuHbbSzslgrpXVhdG4Fr2MaAwgjmCX6+iCsyAgICAgICAgICAgILNbJuJ44sN4httVOyKChmbWB8jgAxj2kOJJ5AFmvqg4DO3NyozQvcNmsolkssMwbBHG079bNroH7vPTjo0d9Tz4BPOR2U7MtcPmWrax99rWh1VI3j7IcxE0+A6nqewCCTEBAQEBAQEBAQEBAQEELZ65FNxtHJfLHGyK/Rt+LDwa2saBwBPR4HI9eR6EBVS41FwAht9c+cfl+/DHTT6g0+rtXMAPy+9x0QYaAgICAgICAgICAgIMy3VFwLZrfQvnP5huQyU0GpNRo7VrCB83vcdEFq8isim4Jjjvl8jZLfpG/Ch+ZtG08wD1eep6ch1JCaUBAQEBAQEBAQEBAQEBAQRnmzkdasyonVcRbbb61ujK1jdRLpybKB8w78x5cEFScY4GvWA7maG80T6Z5J9nKPeimHix/I+XMdQEGhQEBAQEBAQEBAQb7B2Br1jy5iis1E+peCPaSn3YoR4vfyHlzPQFBbbKbI61ZaxNq5S25X17dH1r26CPXm2IfujvzPlwQSYgICAgICAgICAgICAgICAgIMC92G3Ykt0tBdKOGupJPmhnYHNPfse44oIAx3snse6SqwpXiLXU/l9e4lvkyTmPJwPmggvFGA8Q4MlLLzaKqhaDoJnM3oneUjdWn6oNADqNRxHig+oCAgIPhOg1PAeKDf4XwHiHGcoZZrRVVzSdDM1m7E3zkdo0fVBOmBNk9jHR1WK68S6aH8voHEN8nycz5NA80E/2Sw27DduioLXRw0NJH8sMDA1o79z3PFBnoCAgICAgICAgICAgICAgICAgICDxJEyZjmPaHscNC1w1BHcIOIv+SGCcRufJU4fpopnc5aTWB2vj7hAPqEHDXLZJwzUEmiul0oif3XPZK0fVoP3QaWXY9iJ+FiqUDwfQg/o8IEWx7ED8XFUpHgyhA/V5Qbq27JOGacg1t0ulaR+617Imn6NJ+6DubBkhgnDjmSU2H6aWZvKWr1ndr4++SB6BB28cTIWNYxoYxo0DWjQAdgg9oCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICD/2Q==";

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

    render() {
      let close = () => this.setState({ showDeleteUserModal: false});

      return (
        <tr key={this.props.id}>
          <td>{this.props.user.userid}</td>
          <td><img src={this.defaultImg} width='40' height='40'/></td>
          <td>{this.state.isEditable ? this.renderEditableRow('username') : this.props.user.username}</td>
          <td>{this.state.isEditable ? this.renderEditableRow('department') : this.props.user.department}</td>
          <td>{this.props.user.isAdmin ? 'Admin' : ''}</td>
          <td className="adminAction">
            {this.state.isEditable ? null : <a onClick={() => this.setState({isEditable: true})}>edit</a>}
            {this.state.isEditable ? null : <a onClick={()=>this.setState({ showDeleteUserModal: true })}>delete</a> }
            {this.state.isEditable ? <a onClick={this.handleSave}>save</a> : null}
            {this.state.isEditable ? <a onClick={() => this.setState({isEditable: false})}>cancel</a> : null}
          </td>
          <Modal show={this.state.showDeleteUserModal} onHide={close}>
              <Modal.Header closeButton>
                <Modal.Title>Warning!</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>Are you sure you want to delete <b>{this.props.user.username}</b>?</p>
              </Modal.Body>
              <Modal.Footer>
                <Button bsStyle='primary' onClick={this.props.deleteUser(this.props.user.userid)}>Yes</Button>
                <Button onClick={close}>No</Button>
              </Modal.Footer>
            </Modal>
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
