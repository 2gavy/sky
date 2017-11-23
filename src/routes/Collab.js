import React from 'react';
import ReactBubbleChart from 'react-bubble-chart';
import * as d3 from 'react-d3';
// import { connect } from 'react-redux';
import { Tooltip } from 'react-lightweight-tooltip';
import { TagCloud } from "react-tagcloud";
import DocIdList from '../components/DocIdList';
import JsonTable from 'react-json-table';
import axios from 'axios';
import { toast } from 'react-toastify';
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

const colorLegend = [
    // reds from dark to light
    { color: "#67000d", textColor: '#fee0d2', text: 'Negative' },
    { color: "#a50f15", textColor: '#fee0d2' },
    { color: "#cb181d", textColor: '#fee0d2' },
    "#ef3b2c",
    "#fb6a4a",
    "#fc9272",
    "#fcbba1",
    "#fee0d2",
    //neutral grey
    { color: "#f0f0f0", text: 'Neutral' },
    // blues from light to dark
    "#deebf7",
    "#c6dbef",
    "#9ecae1",
    "#6baed6",
    "#4292c6",
    { color: "#2171b5", textColor: '#deebf7' },
    { color: '#08519c', textColor: '#deebf7' },
    { color: "#08306b", textColor: '#deebf7', text: 'Positive' }
];

var tooltipProps = [{
    css: 'symbol',
    prop: '_id'
}, {
    css: 'value',
    prop: 'value',
    display: 'Last Value'
}, {
    css: 'change',
    prop: 'colorValue',
    display: 'Change'
}];

var columns = [
    { key: 'doc', label: 'Docs' },
    {
        key: 'doc', label: 'Docs', cell: function (item, columnKey) {
            return <span style={{ color: item.color }}>{item.color}</span>;
        }
    },
    { key: 'title', label: 'Title' },
    {
        key: 'title', label: 'Title', cell: function (item, columnKey) {
            return <span style={{ color: item.color }}>{item.color}</span>;
        }
    }
];

//to use variable from cloud obj to manipulate overall size depending on how many docs r present in JSON
var percentage = '100%';

export default class Collab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bubbleData: "",
            trendData:"",
            docs: "",
            titles: "",
            terms: ""
        }

        // var myData2 = require('test3.json');

        axios({
            method: 'get',
            url: 'http://localhost:8001/api/collab/cloud',
            withCredentials: true,
        }).then((result) => {
            var clusterData = result.data.cluster.map(data => {
                let term = { colorValue: 0, selected: 0 };
                let terms = [];
                let cloud = { _id: data.label, colorValue: Math.random(), displayText: data.terms, terms: data.terms, label: data.label, value: data.weight };
                return cloud;
            });
            this.setState({
                bubbleData: clusterData
            })
        }, reason => {
            toast.error(reason + "");
            console.log(reason);
        });

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

    callAPI() {
        //call 2nd api from TDT team here
        axios({
            method: 'get',
            url: 'http://localhost:8001/api/collab/test4',
            params:{ID:'123'} //TODO Change this to the current bubble being selected
        }).then((result) => {
            result.data.topic.map(data => {
                this.setState({ docs: data.docs, titles: data.titles, terms: data.terms });
            });
        }, reason => {
            toast.error(reason + "");
            console.log(reason);
        });

        axios({
            method: 'get',
            url: 'http://localhost:8001/api/collab/trend',
            params:{ID:'123'}
        }).then((result) => {
            this.setState({ trendData: result.data });
        }, reason => {
            toast.error(reason + "");
            console.log(reason);
        });
    }

    display() {
        var docString = this.state.docs.toString();
        var titleString = this.state.titles.toString();
        console.log("display doc string is " + docString);
        var docArray = docString.split(',');
        var titleArray = titleString.split(',');
        var overall = [];
        for (var i = 0; i < docArray.length; i++) {
            var myObj = {
                doc: docArray[i], //cloud docs
                title: titleArray[i] //cloud titles
            };
            overall.push(myObj);
        }
        console.log(overall);
        return overall;
    }

    displayDocsCount() {
        var docString = this.state.docs.toString();
        var docArray = docString.split(',');
        return docArray.length;
    }

    displayTermsCount() {
        var termString = this.state.terms.toString();
        var termArray = termString.split(',');
        return termArray.length;
    }

    render() {
        return (
            <Grid>
                <PanelContainer controls={false}>
                    <Panel>
                        <PanelBody>
                            <Grid>
                                <Row><Col xs={12}>
                                    <h1><b>Work-in-Progress! Come back in Dec!</b></h1>
                                </Col></Row>
                                <Row>
                                    <Col xs={6}>
                                        <div>
                                            <div>
                                                <ReactBubbleChart
                                                    className="my-cool-chart"
                                                    colorLegend={colorLegend}
                                                    legend={false}
                                                    data={this.state.bubbleData}
                                                    onClick={() => this.callAPI()}
                                                    selectedColor="#737373"
                                                    selectedTextColor="#d9d9d9"
                                                    tooltip={true}
                                                    tooltipProps={tooltipProps}
                                                    fixedDomain={{ min: -1, max: 1 }} />
                                            </div>
                                            <hr />
                                            Total Terms: {this.displayTermsCount()}
                                            <br />
                                            Total Docs: {this.displayDocsCount()}
                                            <JsonTable rows={this.display()} columns={columns} className='collab-highlight' />
                                        </div>
                                    </Col>
                                    <Col xs={6}>
                                        <DocIdList docList={selectedCloudIDs} />
                                        <JsonTable rows={this.state.trendData} className='collab-highlight' />
                                    </Col>
                                </Row>
                            </Grid>
                        </PanelBody>
                    </Panel>
                </PanelContainer>
            </Grid>
        );
    }
}