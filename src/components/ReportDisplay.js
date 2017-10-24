import React from 'react';
import { Link, withRouter } from 'react-router';
import ShareButton from './ShareButton.js';
import {
    Button,
    Icon,
    Row,
    Col,
    Grid,
    Panel,
    PanelBody,
    PanelContainer,
    PanelHeader,
    PanelFooter,
} from '@sketchpixy/rubix';

@withRouter
class ReportDisplay extends React.Component {
    render() {
        return (
            <PanelContainer>
                <Panel>
                    <PanelBody>
                        <Grid>
                            <Row>
                                <Col xs={12}>
                                    <h3 className='fg-black50' style={{ marginTop: 0 }}>{this.props.report.title}</h3>
                                    <Grid>
                                        <Row>
                                            <Col xs={6} collapseLeft collapseRight>
                                                <div className='fg-darkgray50'>
                                                    <small>by {this.props.report.source} / {this.props.report.captureDatetime}</small>
                                                </div>
                                            </Col>
                                            <Col xs={6} collapseLeft collapseRight className='text-right'>
                                                <div className='fg-darkgray25 fg-hover-black50'>
                                                    <small><Icon glyph='icon-ikons-time' style={{ position: 'relative', top: 1 }} /><span> 5 minutes read</span></small>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Grid>
                                    <div dangerouslySetInnerHTML={{ __html: this.props.report.content }} />
                                </Col>
                            </Row>
                        </Grid>
                    </PanelBody>
                    <hr style={{ margin: '0' }} />

                    <PanelFooter>
                        <Grid>
                            <Row>
                                <Col xs={12} className='text-right' style={{ paddingTop: 12.5, paddingBottom: 12.5 }}>
                                    <div className='fg-pink' style={{ display: 'inline-block'}}>
                                        <Icon style={{ position: 'relative', lineHeight: 0, top: 2 }} glyph='icon-ikons-heart' /><span> 0</span>
                                    </div>
                                    <div style={{ display: 'inline-block', marginLeft: 10 }}>
                                        <Button bsStyle='yellow' onlyOnHover className='btn-icon'>
                                            <Icon style={{ position: 'relative', top: 2 }} glyph='icon-ikons-speech-3' />
                                        </Button>
                                    </div>
                                    <div style={{ display: 'inline-block', marginLeft: 10 }}>
                                        <ShareButton title={this.props.report.title} reportid={this.props.report.reportid} />
                                    </div>
                                    <div style={{ display: 'inline-block', marginLeft: 10 }}>
                                        <Button onClick={() => { this.props.router.push("/editreport/" + this.props.params.reportid) }}>Edit Report</Button>
                                    </div>
                                </Col>
                            </Row>
                        </Grid>
                    </PanelFooter>
                </Panel>
            </PanelContainer>
        );
    }
}

export default ReportDisplay