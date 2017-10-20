import React from 'react';
import * as config from '../../appConfig';
import axios from 'axios';
import ReportCreate from '../components/ReportCreate';

import {
    Row,
    Col,
    Icon,
    Grid,
    Panel,
    Button,
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

        axios({
            method: 'get',
            withCredentials: true,
            url: config.REPORT_BACKEND_HOST + '/reports/' + this.props.params.reportid,
            responseType: 'json',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        }).then(function(res) {
            console.log(res);
        })
        // axios().get(config.REPORT_BACKEND_HOST + '/reports/' + this.props.params.reportid)
        //     .then((result) => {
        //         const report = result.data;
        //         if (!report) {
        //             this.props.router.push('/404');
        //         }
        //         this.props.ReportSetFields(report[0]);
        //         console.log(report[0]);
        //     })
    }

    render() {
        return (
            <Grid>
                <PanelContainer plain collapseBottom controls={false}>
                    <Panel horizontal>
                        <Row>
                            <Col xs={12}>
                                <ReportCreate />
                                
                            </Col>
                        </Row>
                    </Panel>
                </PanelContainer>
            </Grid>
        );
    }
}

export default CreateReport
