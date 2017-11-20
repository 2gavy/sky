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
import JsonTable from 'react-json-table';

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

  var columns = [
    {key: 'doc', label: 'Docs'},
    {key: 'doc', label: 'Docs', cell: function( item, columnKey ){
        return <span style={{color: item.color}}>{ item.color }</span>;
    }},
    {key: 'title', label: 'Title'},
    {key: 'title', label: 'Title', cell: function( item, columnKey ){
        return <span style={{color: item.color}}>{ item.color }</span>;
    }}
];

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
            titles: "",
            terms: ""
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
    const myData3 = require('test4.json');

    var overall = [];

    //console.log("Docs existing inside is " + data.docs);
    //console.log("Titles existing inside is " + data.titles);

    clusterData = myData3.topic.map(data => {

       // var myObj = {
       //     doc: data.docs, //cloud docs
       //     title: data.titles //cloud titles
       // };

        //overall.push(myObj);

        this.setState({ docs: data.docs, titles: data.titles, terms: data.terms });

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
            <div>
                {this.MultipleCloud(clusterData)}
                <hr/>
                Total Terms: {this.displayTermsCount()}
                <br/>
                Total Docs: {this.displayDocsCount()}
                <JsonTable rows={this.display()} columns={ columns } className='collab-highlight'/>
            </div>
        );
    }
}

export default Clouds