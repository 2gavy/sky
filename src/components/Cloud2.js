import React from "react";
import { TagCloud } from "react-tagcloud";
import { Tooltip } from 'react-lightweight-tooltip';
import ReactBubbleChart from 'react-bubble-chart';
//import * as d3 from 'd3';
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

var clusterDataBubble;

/*
const testData = [
    {
        _id: 'test 1',
        value: 100,
        colorValue: 0.8,
        selected: false
    },
    {
        _id: 'test 2',
        value: 200,
        colorValue: 0.6,
        selected: false
    },
    {
        _id: 'test 3',
        value: 300,
        colorValue: 0.4,
        selected: false
    }
];
*/

const colorLegend = [
  // reds from dark to light
  {color: "#67000d", textColor: '#fee0d2', text: 'Negative'},
  {color: "#a50f15", textColor: '#fee0d2'},
  {color: "#cb181d", textColor: '#fee0d2'},
  "#ef3b2c",
  "#fb6a4a",
  "#fc9272",
  "#fcbba1",
  "#fee0d2",
  //neutral grey
  {color: "#f0f0f0", text: 'Neutral'},
  // blues from light to dark
  "#deebf7",
  "#c6dbef",
  "#9ecae1",
  "#6baed6",
  "#4292c6",
  {color: "#2171b5", textColor: '#deebf7'},
  {color: '#08519c', textColor: '#deebf7'},
  {color: "#08306b", textColor: '#deebf7', text: 'Positive'}
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

  //to use variable from cloud obj to manipulate overall size depending on how many docs r present in JSON
  var percentage = '100%';

function MultipleCloud(data) {
    const result = data.map(cloud => 
    <div style={{width: percentage + "%"}} ><hr/> 
    <ReactBubbleChart
      className="my-cool-chart"
      colorLegend={colorLegend}
      legend={ true }
      data={cloud.terms}
      selectedColor="#737373"
      selectedTextColor="#d9d9d9"
      tooltip={true}
      tooltipProps={tooltipProps}
      fixedDomain={{min: -1, max: 1}}/>
    </div>);

    return result;
}

class Clouds extends React.Component {
    constructor(props) {
        super(props);
        clusterData = this.props.cloudData.cluster.map(data => {
            let term = {colorValue:0, selected:0};
            let terms = [];

            for (var i = 0; i < data.terms.length; i++) {
                term.colorValue=Math.random();
                term.selected=false;
                ({ word: term._id, weight: term.value } = data.terms[i]);
                terms.push(Object.assign({}, term));
            }

            let cloud = { terms: terms, label: data.label, docs: data.docs };

            return cloud;

        });

        for (var i = 0; i < clusterData.length; i++){
            console.log(clusterData[i]);
        }
    }

    render() {
        return (
            <div>
                {MultipleCloud(clusterData)}
            </div>
        );
    }
}

export default Clouds