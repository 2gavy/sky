import React from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import * as Actions from '../redux/actions';
import moment from 'moment';
import map from 'lodash/map';
import filter from 'lodash/filter';

import {
  Row,
  Col,
  Grid,
  Panel,
  PanelBody,
  PanelContainer,
  PanelHeader,
  Icon,
  Button,
} from '@sketchpixy/rubix';


const sources = [{
  text: 'China Daily',
  value: 'chinaDaily'
}, {
  text: 'Kompas',
  value: 'kompas'
}, {
  text: 'Mainichi Shimbun',
  value: 'mainichiShimbun'
}, {
  text: 'The Star',
  value: 'theStar'
}];

const reportFrequencies = [{
  text: 'Today',
  from: moment(),
  to: moment()
}, {
  text: 'Past one week',
  from: moment(),
  to: moment().subtract(7, 'days'),
}, {
  text: 'Past one month',
  from: moment(),
  to: moment().subtract(1, 'months'),
}];


class UserFeedPreference extends React.Component {

  state = {
    sources,
    reportFrequencies,
    selectedSources: [],
    selectedFrequencyReportValue: {},
    isHoveringOverSelectedSource: false,
  };

  componentDidMount() {
      this.props.getSearchPreference();
  }

  addToSource = (source) => () => {
    const selectedSources = filter(this.state.selectedSources, (src) => src.value !== source.value);

    this.setState({
      selectedSources,
      sources: [...this.state.sources, source],
    });
  };

  addToSelectedSources = (source) => () => {

    const sources = filter(this.state.sources, (src) => src.value !== source.value);
    this.setState({
      selectedSources: [...this.state.selectedSources, source],
      sources,
    });
  };

  renderSources = () => {
    return map(this.state.sources, (source, idx) => {
      return (
        <div
          className="userFeedPreference-source"
          key={idx}
          onClick={this.addToSelectedSources(source)}
          onMouseEnter={() => this.setState({isHoveringOverSelectedSource: false})}
        >
          {source.text}
        </div>
      )
    })
  };

  renderSelectedSources = () => {
    return map(this.state.selectedSources, (source, idx) => {
      return (
        <div
          className="userFeedPreference-selectedSource"
          key={idx}
          onClick={this.addToSource(source)}
          onMouseEnter={() => this.setState({isHoveringOverSelectedSource: true})}
        >
          {source.text}
        </div>
      )
    })
  };

  renderSeparator = () => {
    const iconClassName = this.state.isHoveringOverSelectedSource ? 'left-flip' : 'right-flip';
    return (
      <div className="userFeedPreference-separator">
        <Icon bundle='glyphicon' glyph='chevron-right' className={iconClassName} />
      </div>
    )
  };

  renderReportFrequencyOptions = () => {
    return map(this.state.reportFrequencies, (reportFrequency, idx) => {
      return (
        <option value={reportFrequency.value} key={idx}>{reportFrequency.text}</option>
      )
    });
  };

  render() {
    return (
      <Grid className="userFeedPreference-container">
        <PanelContainer collapseBottom controls={false}>
          <Panel>
            <PanelHeader className='bg-green'>
              <Grid>
                <Row>
                  <Col xs={12} className='fg-white'>
                    <h4>Choose from your favorite sources</h4>
                  </Col>
                </Row>
              </Grid>
            </PanelHeader>
            <PanelBody>
              <Row>
                <Col xs={12}>
                  <div className="userFeedPreference-sources">
                    {this.renderSources()}
                  </div>
                  {this.renderSeparator()}
                  <div className="userFeedPreference-selectedSources">
                    {this.renderSelectedSources()}
                  </div>
                </Col>
              </Row>
            </PanelBody>
          </Panel>
        </PanelContainer>
        <div className="userFeedPreference-reportFrequencies">
          <div className="userFeedPreference-label">
            Choose Report Frequency
          </div>
          <div className="userFeedPreference-selectBox">
            <Icon bundle="glyphicon" glyph="menu-down" className="userFeedPreference-chevron-down"/>
            <select
              value={this.state.selectedFrequencyReportValue}
              onChange={(evt)=>this.setState({selectedFrequencyReportValue: evt.target.value})}
            >

              {this.renderReportFrequencyOptions()}
            </select>
          </div>
        </div>
        <div className="userFeedPreference-submit">
          <Button bsStyle="success">Submit</Button>
        </div>
      </Grid>
    );
  }
}


UserFeedPreference.propTypes = {
  userFeedPreference: PropTypes.object,
  getSearchPreference: PropTypes.func,
};



const mapStateToProps = state => {
  return {
    user: state.userModule.loginUser,
    searchPref: state.userModule.searchPref
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUser: () => {
      dispatch(Actions.getUser({}));
    },
    updateUser: () => {
      dispatch(Actions.getUser({}));
    },
    getSearchPreference: () => {
        dispatch(Actions.getSearchPreferenceRequest());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserFeedPreference);
