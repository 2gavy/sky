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
