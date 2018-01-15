import React from 'react';
import ReactBubbleChart from 'react-bubble-chart';
import * as d3 from 'react-d3';
import { connect } from 'react-redux';
import { Tooltip } from 'react-lightweight-tooltip';
import { TagCloud } from "react-tagcloud";
import DocIdList from '../components/DocIdList';
import JsonTable from 'react-json-table';
import axios from 'axios';
import { toast } from 'react-toastify';
import * as Actions from '../redux/actions/collab';
import * as Services from '../redux/apis/CollabService';
import Cloud2 from '../components/Cloud2';

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

class Collab extends React.Component {
    constructor(props) {
        super(props);

        Services.getCloud().then((result) => {
            console.log("the result: " + result.data.cluster);
            this.props.CollabGetCloud(result.data.cluster);
        }, reason => {
            console.log("no result");
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

    display() {
        /*
        var docString = this.props.docs.toString();
        var titleString = this.props.titles.toString();
        console.log("title string is " + titleString);
        //var docArray = docString.split(',');
        //var titleArray = titleString.split(',');
        */

        var overall = [];
        for (var i = 0; i < this.props.docs.length; i++) {
            var myObj = {
                doc: this.props.docs[i], //cloud docs
                title: this.props.titles[i] //cloud titles
            };
            overall.push(myObj);
        }
        console.log(overall);
        return overall;
    }

    displayDocsCount() {
       /*
        var docArray = [];
        if (this.props.docs.toString()){
        var docString = this.props.docs.toString();
        docArray = docString.split(',');
        }
        */
        return this.props.docs.length;
    }

    render() {
        return (
            <Grid>
                <PanelContainer controls={false}>
                    <Panel>
                        <PanelBody>
                            <Grid>
                                <Row><Col xs={12}>
                                    <div>
                                    </div>
                                </Col>
                                </Row>
                                 <Row>
                                    <Col xs={9}>
                                        <div>
                                            <Cloud2 />
                                        </div>
                                    </Col>
                                    <Col xs={3}>
                                        <div>
                                            Total Docs: {this.displayDocsCount()}
                                            <JsonTable rows={this.display()} columns={columns} className='collab-highlight' />
                                        </div>
                                    </Col>
                                </Row>
                                 <Row>
                                    <Col xs={2}>
                                    </Col>
                                    <Col xs={12}>
                                         Weekly Trending
                                        <JsonTable rows={this.props.trendData} className='collab-highlight' />
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


const mapStateToProps = (state) => {
    return {
        bubbleData: state.collabModule.bubbleData,
        trendData: state.collabModule.trendData,
        docs: state.collabModule.docs,
        titles: state.collabModule.titles
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        CollabGetCloud: (result) => {
            dispatch(Actions.CollabGetCloud(result));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Collab);