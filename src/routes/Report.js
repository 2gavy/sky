import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router';
import ReportDisplay from '../components/ReportDisplay.js';
import Sharebox from '../components/Sharebox.js';
import Entities from '../components/Entities.js';
import actions from '../redux/actions';
import axios from 'axios';
import * as config from '../../appConfig';

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
    PanelContainer,
} from '@sketchpixy/rubix';



@connect((state) => state)
class Report extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            docid: "",
            title: "",
            source: "",
            date: "",
            body: "",
            entities: "",
        }

        // Bind this to the functions 
        this.handleClick = this.handleClick.bind(this);

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
                this.setState(report[0]);
                
            })
    }

    shareUrl = config.FRONTEND_ADDR + "report/" + this.props.params.reportid;
    handleClick() {
        console.log('in');
    }

    // DON"T REMOVE THIS
    // _getValueFromChildComponent = (res) => {
    //     alert(res);
    // }

    render() {
        return (
            <Grid>
                <PanelContainer plain collapseBottom controls={false}>
                    <Panel horizontal>
                        <PanelLeft>
                            <ReportDisplay report={this.state} />
                        </PanelLeft>
                        <PanelRight className='hidden-xs' style={{ width: 350 }}>
                            {/* <Sharebox propsInParent={this._getValueFromChildComponent} /> Don't remove. To get result from child*/}
                            <Sharebox shareUrl={this.shareUrl} title={this.state.title} />
                            <Entities entities={this.state.entities} />
                        </PanelRight>
                    </Panel>
                </PanelContainer>
            </Grid >
        );
    }
}

export default Report;