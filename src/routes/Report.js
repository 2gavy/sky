import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router';
import ReportDisplay from '../components/ReportDisplay.js';
import Sidebox from '../components/Sidebox.js';
import Entities from '../components/Entities.js';
import actions from '../redux/actions';
import axios from 'axios';
import * as config from '../../appConfig';
import { toast } from 'react-toastify';

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
            captureDatetime: "",
            content: "",
            entities: "",
        }

        // Bind this to the functions 
        this.handleClick = this.handleClick.bind(this);

    }
    componentDidMount() {
        if (!this.props.params.reportid) {
            return
        }

        axios({
            method: 'get',
            url: config.REPORT_BACKEND_HOST + '/reports/' + this.props.params.reportid,
            withCredentials: true,
        }).then((result) => {
            const report = result.data;
            if (!report) {
                this.props.router.push('/404');
            }
            this.setState(report[0]);
        }, reason => {
            toast.error(reason + "");
            console.log(reason);
        });
    }

    handleClick() {
        console.log('in');
    }

    // DON"T REMOVE THIS
    // _getValueFromChildComponent = (res) => {
    //     alert(res);
    // }
    // {<Sidebox propsInParent={this._getValueFromChildComponent} /> Don't remove. To get result from child}
    render() {
        return (
            <Grid>
                <PanelContainer plain collapseBottom controls={false}>
                    <Panel horizontal>
                        <PanelLeft>
                            <ReportDisplay report={this.state} />
                        </PanelLeft>
                        <PanelRight className='hidden-xs' style={{ width: 350 }}>
                            <Sidebox report={this.state} />
                            <Entities entities={this.state.entities} />
                        </PanelRight>
                    </Panel>
                </PanelContainer>
            </Grid >
        );
    }
}

export default Report;