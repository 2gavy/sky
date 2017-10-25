import React from 'react';

import {
    Icon,
    Tag,
    Row,
    Col,
    Grid,
    PanelBody,
    PanelContainer,
} from '@sketchpixy/rubix';


class Entities extends React.Component {

    //to remove duplicates 
    remove_duplicates(arr) {
        var obj = {};
        var ret_arr = [];
        for (var i = 0; i < arr.length; i++) {
            obj[arr[i]] = true;
        }
        for (var key in obj) {
            ret_arr.push(key);
        }
        return ret_arr;
    }

    render() {
        var entitiesTagCloud = [];
        if (!this.props.entities || this.props.entities.length == 0) {
            entitiesTagCloud.push("None found");
        } else {
            var entityString = this.props.entities.toString();

            var entitiesArray = entityString.split(',');
            var uniqueEntitiesArray = [];
            var overall = [];

            uniqueEntitiesArray = this.remove_duplicates(entitiesArray);

            for (var i = 0; i < uniqueEntitiesArray.length; i++) {
                overall.push(<Tag>{uniqueEntitiesArray[i]}</Tag>);
            }

        }

        return (
            <Grid>
                <Row>
                    <Col xs={12} collapseRight>
                        <PanelContainer controls={false}>
                            <PanelBody style={{ paddingBottom: 12.5 }}>
                                <Grid>
                                    <Row>
                                        <Col xs={12} className='text-center'>
                                            <div className='text-uppercase text-left blog-sidebar-heading'>
                                                <small>Entities</small>
                                            </div>
                                            {overall}
                                        </Col>
                                    </Row>
                                </Grid>
                            </PanelBody>
                        </PanelContainer>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Entities