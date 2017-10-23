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

  class Clouds extends React.Component {
    constructor(props) {
        super(props);
        clusterData = this.props.cloudData.cluster.map(data => {
            let term = {colorValue:0, selected:0};
            let terms = [];

            /*
            for (var i = 0; i < data.terms.length; i++) {
                term.colorValue=Math.random();
                term.selected=false;
                ({ terms: term._id } = data.terms[i]);
                terms.push(Object.assign({}, term));
            }
            */

            /*
            var labelString = data.terms.toString();

            var labelArray = labelString.split(',');

            var overall = '';
    
            for (var i = 0; i < labelArray.length; i++) {
                overall += labelArray[i] + '<br/>';
            }
            */

            let cloud = { _id: data.label, colorValue: Math.random(), displayText: data.terms, terms: data.terms, label: data.label, value: data.weight };

            return cloud;

        });

        for (var i = 0; i < clusterData.length; i++){
            console.log(clusterData[i]);
        }

        this.state = {
            docs: "",
            titles: ""
        }
    }

MultipleCloud(data) {
    const result = <div><hr/> 
    <ReactBubbleChart
      className="my-cool-chart"
      colorLegend={colorLegend}
      legend={ false }
      data={data}
      onClick={()=>this.callAPI()}
      selectedColor="#737373"
      selectedTextColor="#d9d9d9"
      tooltip={true}
      tooltipProps={tooltipProps}
      fixedDomain={{min: -1, max: 1}}/>
    </div>;

    return result;
}

callAPI() {

    //call 2nd api from TDT team here
    //const myData3 = require('test4.json');

    const myData3 = {
        "topic": [
           {
             "label":"D1",
             "terms": [
               "w1",
               "w2",
               "w3",
               "w4",
               "w5",
               "w6",
               "w7",
               "w8",
               "w9",
               "w10",
               "w11",
               "w12",
               "w13",
               "w14",
               "w15",
               "w16",
               "w17",
               "w18",
               "w19",
               "w20"
             ],
             "docs": [
               "Doc1",
               "Doc2",
               "Doc3",
               "Doc4",
               "Doc5",
               "Doc6",
               "Doc7",
               "Doc8",
               "Doc9",
               "Doc10"
             ],
             "titles": [
               "Title1",
               "Title2",
               "Title3",
               "Title4",
               "Title5",
               "Title6",
               "Title7",
               "Title8",
               "Title9",
               "Title10"
             ]
           }
        ]
       }

    var overall = [];

    //console.log("Docs existing inside is " + data.docs);
    //console.log("Titles existing inside is " + data.titles);

    clusterData = myData3.topic.map(data => {

       // var myObj = {
       //     doc: data.docs, //cloud docs
       //     title: data.titles //cloud titles
       // };

        //overall.push(myObj);

        this.setState({ docs: data.docs, titles: data.titles });

    });


} 

display() {

    var docString = this.state.docs.toString();
    var titleString = this.state.titles.toString();

    var docArray = docString.split(',');
    var titleArray = titleString.split(',');

    //let overall = { docs: docArray, titles: titleArray };

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

displayCount() {
    
            var docString = this.state.docs.toString();
            var docArray = docString.split(',');
    
            return docArray.length;
        } 

    render() {
        return (
            <div>
                {this.MultipleCloud(clusterData)}
                <hr/>
                Total Docs: {this.displayCount()}
                {this.state.docs}
            </div>
        );
    }
}

export default Clouds