import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router';
import Flexbox from 'flexbox-react';
import actions from '../redux/actions';
import * as Actions from '../redux/actions/reportsjz';
import axios from 'axios';
import ReportEdit from '../components/ReportEdit';
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

class EditReport extends React.Component {
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

    handleTitleChange(title) {
        this.props.ReportSetFields(title);
    }

    handleBodyChange(content) {
        this.props.ReportSetFields(content);
    }

    handleDateChange(date) {
        this.props.ReportSetFields(date);
    }

    handleSourceChange(source) {
        this.props.ReportSetFields(source);
    }

    handleEntitiesChange(entities) {
        this.props.ReportSetFields(entities);
    }

    render() {
        const shareUrl = ('http://35.198.208.48:8001/api/reports/' + this.props.params.reportid);

        return (
            <Grid>
                <PanelContainer plain collapseBottom controls={false}>
                    <Panel horizontal>
                        <PanelLeft>
                            <Row>
                                <Col xs={12}>
                                    <ReportEdit handleTitleChange={this.handleTitleChange.bind(this)} handleBodyChange={this.handleBodyChange.bind(this)} handleDateChange={this.handleDateChange.bind(this)} handleSourceChange={this.handleSourceChange.bind(this)} handleEntitiesChange={this.handleEntitiesChange.bind(this)} docid={this.props.docid} title={this.props.title} body={this.props.content} date={this.props.date} source={this.props.source} entities={this.props.entities}/>
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



const mapStateToProps = (state) => {
    return {
        docid: state.reportsjzModule.docid,
        title: state.reportsjzModule.title,
        date: state.reportsjzModule.date,
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
    date: PropTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(EditReport);
