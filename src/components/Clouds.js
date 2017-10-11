import React from "react";
import { TagCloud } from "react-tagcloud";
import {
    Row,
    Col,
    Grid,
    Panel,
    PanelBody,
    PanelContainer,
} from '@sketchpixy/rubix';


var clusterData;

/* const data = {
    rainbow1: [
        { value: "jQuery", count: 25 }, { value: "MongoDB", count: 18 },
        { value: "JavaScript", count: 38 }, { value: "React", count: 30 },
        { value: "Nodejs", count: 28 }, { value: "Express.js", count: 25 },
        { value: "HTML5", count: 33 }, { value: "CSS3", count: 20 },
        { value: "Webpack", count: 22 }, { value: "Babel.js", count: 7 },
        { value: "ECMAScript", count: 25 }, { value: "Jest", count: 15 },
        { value: "Mocha", count: 17 }, { value: "React Native", count: 27 },
        { value: "Angular.js", count: 30 }, { value: "TypeScript", count: 15 },
        { value: "Flow", count: 30 }, { value: "NPM", count: 11 },
    ], rainbow2: [
        { value: "jQuery", count: 25 }, { value: "MongoDB", count: 18 },
        { value: "JavaScript", count: 38 }, { value: "React", count: 30 },
        { value: "Nodejs", count: 28 }, { value: "Express.js", count: 25 },
        { value: "HTML5", count: 33 }, { value: "CSS3", count: 20 },
        { value: "Webpack", count: 22 }, { value: "Babel.js", count: 7 },
        { value: "ECMAScript", count: 25 }, { value: "Jest", count: 15 },
        { value: "Mocha", count: 17 }, { value: "React Native", count: 27 },
        { value: "Angular.js", count: 30 }, { value: "TypeScript", count: 15 },
        { value: "Flow", count: 30 }, { value: "NPM", count: 11 },
    ], rainbow3: [
        { value: "jQuery", count: 25 }, { value: "MongoDB", count: 18 },
        { value: "JavaScript", count: 38 }, { value: "React", count: 30 },
        { value: "Nodejs", count: 28 }, { value: "Express.js", count: 25 },
        { value: "HTML5", count: 33 }, { value: "CSS3", count: 20 },
        { value: "Webpack", count: 22 }, { value: "Babel.js", count: 7 },
        { value: "ECMAScript", count: 25 }, { value: "Jest", count: 15 },
        { value: "Mocha", count: 17 }, { value: "React Native", count: 27 },
        { value: "Angular.js", count: 30 }, { value: "TypeScript", count: 15 },
        { value: "Flow", count: 30 }, { value: "NPM", count: 11 },
    ]
};

function MultipleCloud(data) {
    let result = [];
    for (var rainbow in data) {
        result.push(<TagCloud minSize={12}
            maxSize={35}
            tags={data[rainbow]}
            className="simple-cloud"
            onClick={tag => alert(`'${tag.value}' was selected!`)} />)
    }
    return result;
}
 */
/* const data = [[
  { value: "jQuery", count: 25 }, { value: "MongoDB", count: 18 },
  { value: "JavaScript", count: 38 }, { value: "React", count: 30 },
  { value: "Nodejs", count: 28 }, { value: "Express.js", count: 25 },
  { value: "HTML5", count: 33 }, { value: "CSS3", count: 20 },
  { value: "Webpack", count: 22 }, { value: "Babel.js", count: 7 },
  { value: "ECMAScript", count: 25 }, { value: "Jest", count: 15 },
  { value: "Mocha", count: 17 }, { value: "React Native", count: 27 },
  { value: "Angular.js", count: 30 }, { value: "TypeScript", count: 15 },
  { value: "Flow", count: 30 }, { value: "NPM", count: 11 },
], [
  { value: "Cloud", count: 25 }, { value: "Tag", count: 18 },
  { value: "Arya", count: 38 }, { value: "Theon", count: 30 },
  { value: "Jon", count: 28 }, { value: "Snow", count: 25 },
  { value: "HTML5", count: 33 }, { value: "CSS3", count: 20 },
  { value: "Webpack", count: 22 }, { value: "Babel.js", count: 7 },
  { value: "ECMAScript", count: 25 }, { value: "Jest", count: 15 },
  { value: "Mocha", count: 17 }, { value: "React Native", count: 27 },
  { value: "Angular.js", count: 30 }, { value: "TypeScript", count: 15 },
  { value: "Flow", count: 30 }, { value: "NPM", count: 11 },
], [
  { value: "NightWatch", count: 25 }, { value: "CastleBlack", count: 18 },
  { value: "KingsLanding", count: 38 }, { value: "Winterfell", count: 30 },
  { value: "Nodejs", count: 28 }, { value: "Express.js", count: 25 },
  { value: "HTML5", count: 33 }, { value: "CSS3", count: 20 },
  { value: "Webpack", count: 22 }, { value: "Babel.js", count: 7 },
  { value: "ECMAScript", count: 25 }, { value: "Jest", count: 15 },
  { value: "Mocha", count: 17 }, { value: "React Native", count: 27 },
  { value: "Angular.js", count: 30 }, { value: "TypeScript", count: 15 },
  { value: "Flow", count: 30 }, { value: "NPM", count: 11 },
]]; */

function MultipleCloud(data) {
    const result = data.map(cloud =>
        <TagCloud minSize={12}
            maxSize={35}
            tags={cloud}
            className="simple-cloud"
            onClick={tag => alert(`'${tag.value}' was selected!`)} />
    );

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
                terms.push(Object.assign({},term));
            }
            return terms;
        });

        for (var i = 0; i < clusterData.length; i++)
            console.log(clusterData[i]);
    }

    render() {
        return (
            <PanelContainer>
                <Panel>
                    <PanelBody>
                        <Grid>
                            <Row>
                                <Col xs={12}>
                                    {MultipleCloud(clusterData)}
                                </Col>
                            </Row>
                        </Grid>
                    </PanelBody>
                </Panel>
            </PanelContainer>
        );
    }
}

export default Clouds

