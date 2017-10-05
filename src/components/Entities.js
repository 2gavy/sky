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
    render() {
        var entitiesTagCloud = [];
        if (!this.props.entities || this.props.entities.length == 0) {
            entitiesTagCloud.push("None found");
        } else {
            for (var i = 0; i < this.props.entities.length; i++) {
                entitiesTagCloud.push(<Tag key={i}>{this.props.entities[i]}</Tag>);
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
                                            {entitiesTagCloud}
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