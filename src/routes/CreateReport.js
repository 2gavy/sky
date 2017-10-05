import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router';
import Flexbox from 'flexbox-react';
import actions from '../redux/actions';
import * as Actions from '../redux/actions/reportsjz';
import axios from 'axios';
import ReportCreate from '../components/ReportCreate';
import Sharebox from '../components/Sharebox';
import PropTypes from 'prop-types';

import {
    ShareButtons,
    generateShareIcon,
} from 'react-share';

import {
    Tag,
    Row,
    Col,
    Icon,
    Grid,
    Panel,
    Image,
    Button,
    PanelBody,
    PanelLeft,
    PanelRight,
    LoremIpsum,
    InputGroup,
    PanelHeader,
    PanelFooter,
    FormControl,
    PanelContainer,
} from '@sketchpixy/rubix';

class CreateReport extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        if (!this.props.params.reportid) {
            return
        }
        axios.get('http://35.198.208.48:8001/api/reports/' + this.props.params.reportid)
            .then((result) => {
                const report = result.data;
                if (!report) {
                    this.props.router.push('/404');
                }
                // this.setState(report[0]);
                this.props.ReportSetFields(report[0]);
                console.log(report[0]);
            })
    }

    render() {

        return (
            <Grid>
                <PanelContainer plain collapseBottom controls={false}>
                    <Panel horizontal>
                        <PanelLeft>
                            <Row>
                               <Col xs={12}>
                                    <ReportCreate />
                                </Col>
                            </Row>
                        </PanelLeft>
                        <PanelRight className='hidden-xs' style={{ width: 350 }}>
                            <Sharebox shareUrl={this.shareUrl} title={this.props.title} />
                        </PanelRight>
                    </Panel>
                </PanelContainer>
            </Grid>
        );
    }
}

export default CreateReport
