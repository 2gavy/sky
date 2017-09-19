import React from 'react';
// import { connect } from 'react-redux';
// import { TagCloud } from "react-tagcloud";
// import actions from '../redux/actions';

import {
    Row,
    Col,
    Grid,
    Panel,
    PanelBody,
    PanelContainer,
} from '@sketchpixy/rubix';

const rankData = [
    {
        id: 0,
        startDate: "yyyy/mm/dd",
        endDate: "yyyy/mm/dd",
        terms: [
            "term1",
            "term2",
            "term3"
        ],
        docs: [
            "A1213",
            "B123",
            "C123"
        ]
    },
    {
        id: 1,
        startDate: "yyyy/mm/dd",
        endDate: "yyyy/mm/dd",
        terms: [
            "term4",
            "term5",
            "term6"
        ],
        docs: [
            "A1213",
            "B123",
            "C123"
        ]
    },
    {
        id: 2,
        startDate: "yyyy/mm/dd",
        endDate: "yyyy/mm/dd",
        terms: [
            "term7",
            "term8",
            "term9"
        ],
        docs: [
            "A1213",
            "B123",
            "C123"
        ]
    },
    {
        id: 2,
        startDate: "yyyy/mm/dd",
        endDate: "yyyy/mm/dd",
        terms: [
            "term7",
            "term8",
            "term9"
        ],
        docs: [
            "A1213",
            "B123",
            "C123"
        ]
    }];


export default class Collab extends React.Component {
    render() {
        return (
            <PanelContainer>
                <Panel>
                    <PanelBody>
                        <Grid>
                            <Row>
                                <Col xs={12}>
                                    <p>hello</p>
                                </Col>
                            </Row>
                        </Grid>
                    </PanelBody>
                </Panel>
            </PanelContainer>
        );
    }
}