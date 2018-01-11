import React from "react";
import { TagCloud } from "react-tagcloud";
import { Tooltip } from 'react-lightweight-tooltip';
import ReactBubbleChart from 'react-bubble-chart';
import { connect } from 'react-redux';
import * as Actions from '../redux/actions/collab';
import * as Services from '../redux/apis/CollabService';
import * as d3 from 'react-d3';
import {
    Row,
    Col,
    Grid,
    Panel,
    PanelBody,
    PanelContainer,
} from '@sketchpixy/rubix';

var clusterData;

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
    css: 'value',
    prop: 'tooltips',
  }];

//to use variable from cloud obj to manipulate overall size depending on how many docs r present in JSON
var percentage = '100%';

class Clouds extends React.Component {
    constructor(props) {
        super(props);
    }

    MultipleCloud(data) {
        const result = <div><hr />
            <ReactBubbleChart
                className="my-cool-chart"
                colorLegend={colorLegend}
                legend={false}
                data={data}
                onClick={(selectedData) => {this.callAPI(selectedData)}}
                selectedColor="#737373"
                selectedTextColor="#d9d9d9"
                duration="2000"
                tooltip={true}
                tooltipProps={tooltipProps}
                fixedDomain={{ min: -1, max: 1 }} /><hr />
        </div>;

        return result;
    }

    callAPI(selectedData) {
        console.log("selected data label is " + selectedData.label);
        Services.getDocList(selectedData.label).then((result) => {
            this.props.CollabGetDocList(result.data.topic);
        }, reason => {
            toast.error(reason + "");
            console.log(reason);
        });

        Services.getTrendData(selectedData.label).then((result) => {
            this.props.CollabGetTrendData(result.data);
        }, reason => {
            toast.error(reason + "");
            console.log(reason);
        });
    }

    render() {
        return (
            <div>
                {this.MultipleCloud(this.props.bubbleData)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        bubbleData: state.collabModule.bubbleData
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        CollabGetCloud: (result) => {
            dispatch(Actions.CollabGetCloud(result));
        },
        CollabGetDocList: (result) => {
            dispatch(Actions.CollabGetDocList(result));
        },
        CollabGetTrendData: (result) => {
            dispatch(Actions.CollabGetTrendData(result));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Clouds);