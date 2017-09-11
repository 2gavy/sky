import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router';
import Flexbox from 'flexbox-react';
import actions from '../redux/actions';
import * as Actions from '../redux/actions/reportsjz';
import axios from 'axios';
import ReportEdit from '../components/ReportEdit';
import Sharebox from '../components/sharebox';

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

// @connect((state) => state)
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
                this.props.ReportSetFields({title:'HelloWorld'});
                console.log(report[0]);
            })
    }

      handleTitleChange(e) {
        // this.setState({ title: e.target.value});
      }

      handleBodyChange(e) {
        // this.setState({ body: e.target.value});
      }

      handleSubmit(e) {
        alert('A name was submitted: ' + this.state.title);
        alert('the new body text is:' + this.state.body);
        this.props.router.push("/report/" + this.props.params.reportid)
        e.preventDefault();
      }

    render() {
        const shareUrl = ('http://35.198.208.48:8001/api/reports/' + this.props.params.reportid);

        // var entities = [];
        // if (this.props.entities.length == 0) {
        //     entities.push("None found");
        // } else {
        //     for (var i = 0; i < this.props.entities.length; i++) {
        //         entities.push(<Tag key={i}>{this.props.entities[i]}</Tag>);
        //     }
        // }

        return (
            <Grid>
                <PanelContainer plain collapseBottom controls={false}>
                    <Panel horizontal>
                        <PanelLeft>
                            <Row>
                                <Col xs={12}>
                                    <div>
                                    <h1>{this.props.title + 'no updating'}</h1>
                                    </div>
                                    {/*<ReportEdit docid={this.state.docid} title={'testing title'} body={this.state.body} /> */}
                                    <ReportEdit docid={this.props.docid} title={this.props.title} body={this.props.body} />
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

const mapStateToProps = (state) =>{
    return {
        docid: state.docid,
        title: state.title,
        author: state.author,
        source: state.source,
        body: state.body,
        entities: state.entities
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        ReportFieldTitleEdit: (data) => {
            dispatch(Actions.ReportFieldTitleEdit(data));
        },
        ReportFieldBodyEdit: (data) => {
            dispatch(Actions.ReportFieldBodyEdit(data));
        }, 
        ReportSetFields: (data) => {
            dispatch(Actions.ReportSetFields(data));
        } 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditReport);