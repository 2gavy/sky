import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router';

import actions from '../redux/actions';
import axios from 'axios';

import {
    Tag,
    Row,
    Col,
    Icon,
    Grid,
    Panel,
    Image,
    Button,
    PanelBody,
    PanelLeft,
    PanelRight,
    LoremIpsum,
    InputGroup,
    PanelHeader,
    PanelFooter,
    FormControl,
    PanelContainer,
} from '@sketchpixy/rubix';

@connect((state) => state)
class Generic404NotFound extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Grid>
                <PanelContainer plain collapseBottom controls={false}>
                    <Row>
                        <Col xs={12}>
                            <PanelContainer>
                                <Panel>
                                    <PanelBody>
                                        <Grid>
                                            <Row>
                                                <Col sm={12} className="text-center">
                                                    <Icon style={{ fontSize: 288, lineHeight: 1 }} glyph="icon-mfizz-ghost"></Icon>
                                                    <h1>Page not found!</h1>
                                                    <p>The page you requested cannot be found or no longer exists.</p>
                                                </Col>
                                            </Row>
                                        </Grid>
                                    </PanelBody>
                                    <hr style={{ margin: '0' }} />
                                </Panel>
                            </PanelContainer>
                        </Col>
                    </Row>
                </PanelContainer>
            </Grid>
        );
    }
}

export default Generic404NotFound;