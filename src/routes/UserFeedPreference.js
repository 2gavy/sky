import React from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import * as Actions from '../redux/actions';

import {
  Row,
  Col,
  Grid,
  Panel,
  PanelBody,  
  PanelContainer,
  Table,
  Button
} from '@sketchpixy/rubix';


class UserFeedPreference extends React.Component {

  render() {
    return (
      <Grid>
        <PanelContainer collapseBottom controls={false}>
          <Panel>
            <PanelBody>
              <div>Edit feed preference here</div>      
              {/* <Button onClick={vex.dialog.alert('Woah!! This is mixed with Vex :D')}>test</Button> */}
            </PanelBody>
          </Panel>
        </PanelContainer>
      </Grid>
    );
  }
}


UserFeedPreference.propTypes = {
  userFeedPreference: PropTypes.object
};



const mapStateToProps = state => {
  return {
    user: state.userModule.loginUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUser: () => {
      dispatch(Actions.getUser({}));
    },
    updateUser: () => {
      dispatch(Actions.getUser({}));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserFeedPreference);