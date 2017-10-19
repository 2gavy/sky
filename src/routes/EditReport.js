import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router';
import Flexbox from 'flexbox-react';
import * as config from '../../appConfig';
import actions from '../redux/actions';
import * as Actions from '../redux/actions/reportsjz';
import axios from 'axios';
import ReportEdit from '../components/ReportEdit';
import Sharebox from '../components/Sharebox';
import PropTypes from 'prop-types';
import Moment from 'moment';

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


class EditReport extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        if (!this.props.params.reportid) {
            return
        }
        axios.get(config.REPORT_BACKEND_HOST + '/reports/' + this.props.params.reportid)
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

    handleTitleChange(title) {
        this.props.ReportSetFields(title);
    }

    handleContentChange(content) {
        this.props.ReportSetFields(content);
    }

    handleDateChange(captureDatetime) {
        this.props.ReportSetFields(captureDatetime);
    }

    handleSourceChange(source) {
        this.props.ReportSetFields(source);
    }

    handleEntitiesChange(entities) {
        this.props.ReportSetFields(entities);
    }

    render() {
        console.log(`REDUX docid: ${this.props.docid} title= ${this.props.title} body= ${this.props.content} captureDatetime= ${this.props.captureDatetime} source= ${this.props.source} entities=${this.props.entities}`);
        const shareUrl = (config.REPORT_BACKEND_HOST + '/reports/' + this.props.params.reportid);

        return (
            <Grid>
                <PanelContainer plain collapseBottom controls={false}>
                    <Panel horizontal>
                        <Row>
                            <Col xs={12}>
                                <ReportEdit handleTitleChange={this.handleTitleChange.bind(this)} handleContentChange={this.handleContentChange.bind(this)} handleDateChange={this.handleDateChange.bind(this)} handleSourceChange={this.handleSourceChange.bind(this)} handleEntitiesChange={this.handleEntitiesChange.bind(this)} docid={this.props.docid} title={this.props.title} content={this.props.content} captureDatetime={this.props.captureDatetime} source={this.props.source} entities={this.props.entities} />
                            </Col>
                        </Row>
                    </Panel>
                </PanelContainer>
            </Grid>
        );
    }
}



const mapStateToProps = (state) => {
    return {
        docid: state.reportsjzModule.docid,
        title: state.reportsjzModule.title,
        captureDatetime: Moment(state.reportsjzModule.captureDatetime, "DD/MM/YYYY"),
        source: state.reportsjzModule.source,
        content: state.reportsjzModule.content,
        entities: state.reportsjzModule.entities
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        ReportSetFields: (data) => {
            dispatch(Actions.ReportSetFields(data));
        }
    }
}

EditReport.PropTypes = {
    docid: PropTypes.string,
    title: PropTypes.string,
    source: PropTypes.string,
    content: PropTypes.string,
    entities: PropTypes.array,
    captureDatetime: PropTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(EditReport);
