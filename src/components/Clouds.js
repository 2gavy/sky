import React from "react";
import { TagCloud } from "react-tagcloud";
import { Tooltip } from 'react-lightweight-tooltip';
import { ReactBubbleChart } from 'react-bubble-chart';
import * as d3 from 'd3';

import {
    Row,
    Col,
    Grid,
    Panel,
    PanelBody,
    PanelContainer,
} from '@sketchpixy/rubix';


var clusterData;

var clusterDataBubble;

var colorLegend = [
    //reds from dark to light
    {color: "#67000d", text: 'Negative', textColor: "#ffffff"}, "#a50f15", "#cb181d", "#ef3b2c", "#fb6a4a", "#fc9272", "#fcbba1", "#fee0d2",
    //neutral grey
    {color: "#f0f0f0", text: 'Neutral'},
    // blues from light to dark
    "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", {color: "#08306b", text: 'Positive', textColor: "#ffffff"}
  ];

function MultipleCloud(data) {
    const result = data.map(cloud => 
    <div><hr/><Tooltip content={cloud.label}>
        <TagCloud minSize={12}
            maxSize={35}
            tags={cloud.terms}
            className="simple-cloud"
            onClick={tag => alert(`'${tag.value}' was selected!`)} />
    </Tooltip><hr/> 
    </div>);

    return result;
}

function MultipleCloudBubble(data) {
    const result = data.map(cloud => 
    <div><hr/><ReactBubbleChart
      colorLegend={colorLegend}
      data={cloud.terms}
      selectedColor="#737373"
      selectedTextColor="#d9d9d9"
      fixedDomain={{min: -1, max: 1}}
    /><hr/> 
    </div>);

    return result;
}

class Clouds extends React.Component {
    constructor(props) {
        super(props);
        clusterData = this.props.cloudData.cluster.map(data => {
            let term = {};
            let terms = [];

            for (var i = 0; i < data.terms.length; i++) {
                ({ word: term.value, weight: term.count } = data.terms[i]);
                terms.push(Object.assign({}, term));
            }

            let cloud = { terms: terms, label: data.label, docs: data.docs };

            return cloud;

        });
        clusterDataBubble = this.props.cloudData.cluster.map(data => {
            let term = {_id:0, colorValue:0, selected:true};
            let terms = [];

            for (var i = 0; i < data.terms.length; i++) {
                term._id = i;
                term.colorValue = i;
                term.selected = true;
                ({ word: term._id, weight: term.value } = data.terms[i]);
                terms.push(Object.assign({}, term));
            }

            let cloud = { terms: terms, label: data.label, docs: data.docs };

            return cloud;
        });

        for (var i = 0; i < clusterDataBubble.length; i++)
            console.log(clusterDataBubble[i]);
    }

    render() {
        return (
            <div>
                {MultipleCloud(clusterData)}
                {/* {MultipleCloudBubble(clusterDataBubble)} */}
            </div>
        );
    }
}

export default Clouds

