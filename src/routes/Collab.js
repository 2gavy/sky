import React from 'react';
import Clouds from '../components/Clouds';
import Clouds2 from '../components/Cloud2';
// import { connect } from 'react-redux';
import { Tooltip } from 'react-lightweight-tooltip';
import { TagCloud } from "react-tagcloud";
import DocIdList from '../components/DocIdList';
import JsonTable from 'react-json-table';
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

var selectedCloudIDs = ["doc1", "doc2"];

const myData = require('test2.json');

const rankData = [
    {
        id: 0,
        startDate: "yyyy/mm/dd",
        endDate: "yyyy/mm/dd",
        terms: [
            "Fish",
            "Cat",
            "Dog"
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
            "Dog",
            "Fish",
            "Cat"
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
            "Cat",
            "Fish",
            "Dog"
        ],
        docs: [
            "A1213",
            "B123",
            "C123"
        ]
    },
    {
        id: 3,
        startDate: "yyyy/mm/dd",
        endDate: "yyyy/mm/dd",
        terms: [
            "Cat",
            "Fish",
            "Dog"
        ],
        docs: [
            "A1213",
            "B123",
            "C123"
        ]
    }];

//transpose
// var newArray = array[0].map(function(col, i) { 
//     return array.map(function(row) { 
//       return row[i] 
//     })
//   });
//create array
// var viewData = { 
//     employees : [] 
// };

for(var i in rankData) {
    var id = rankData[i].startDate;
    var name = rankData[i].name;
    console.log(id+","+name);
}

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

    setDocList(docList) {
        docList = selectedCloudIDs.map(docid => docid);
    }

    render() {
        return (
            <PanelContainer>
                <Panel>
                    <PanelBody>
                        <Grid>
                            <Row>
                                <Col xs={6}>
                                <Clouds cloudData={myData} setDocList={this.setDocList.bind(this)} />
                                </Col>
                                <Col xs={6}>
                                    <DocIdList docList={selectedCloudIDs} />
                                    <JsonTable rows={rankData}  className='collab-highlight'/>
                                    {<Table bordered={true} striped={true} className='collab-highlight'>
                                        <thead>
                                            <tr>
                                                <th>Date Range 1</th>
                                                <th>Date Range 2</th>
                                                <th>Date Range 3</th>
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
                                    </Table>}
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