import React from 'react';
import Clouds from '../components/Clouds';
import Clouds2 from '../components/Cloud2';
// import { connect } from 'react-redux';
import { Tooltip } from 'react-lightweight-tooltip';
import { TagCloud } from "react-tagcloud";
// import actions from '../redux/actions';

import {
    Row,
    Col,
    Grid,
    Panel,
    PanelBody,
    PanelContainer,
    Table,
    Button,
} from '@sketchpixy/rubix';

const myData = require('test2.json');

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
            "term1",
            "term3"
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
            "term3",
            "term4",
            "term1"
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

const DisplayWindows = rankData.map(Element => {
    // console.log(`The ID capture is: ${Element.id}`)
});

export default class Collab extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        // Mouse over event handler
        $('table').on('mouseover', 'td', function () {
            // Store the hovered cell's text in a variable
            var textToMatch = $(this).text();

            // Loop through every `td` element
            $('td').each(function () {
                // Pull selected `td` element's text
                var text = $(this).text();

                // Compare this with initial text and add matching class if it matches
                if (textToMatch === text) {
                    console.log("trigger|" + this.text + "|" + textToMatch + "|" + text);
                    $(this).addClass('matching');
                }
            });
        });

        // Mouse out event handler
        // This simply removes the matching styling
        $('table').on('mouseout', 'td', function () {
            $('.matching').removeClass('matching');
        });
    }

    render() {
        return (
            <PanelContainer>
                <Panel>
                    <PanelBody>
                        <Grid>
                            <Row>
                                <Col xs={6}>
                                <Clouds cloudData={myData} />
                                </Col>
                                <Col xs={6}>
                                    <Table bordered={true} striped={true}>
                                        <thead>
                                            <tr>
                                                <td>Date Range 1</td>
                                                <td>Date Range 2</td>
                                                <td>Date Range 3</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Fish</td>
                                                <td>Dog</td>
                                                <td>Cat</td>
                                            </tr>
                                            <tr>
                                                <td>Cat</td>
                                                <td>Fish</td>
                                                <td>Fish</td>
                                            </tr>
                                            <tr>
                                                <td>Dog</td>
                                                <td>Cat</td>
                                                <td>Dog</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                    {DisplayWindows}
                                </Col>
                            </Row>
                        </Grid>
                    </PanelBody>
                </Panel>
            </PanelContainer>
        );
    }
}