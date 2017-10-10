import React from 'react';
import { Link, withRouter } from 'react-router';

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
                                                    <small>by {this.props.report.source} / {new Date(Number(this.props.report.captureDatetime) * 1000).toUTCString().slice(0, -7)}</small>
                                                </div>
                                            </Col>
                                            <Col xs={6} collapseLeft collapseRight className='text-right'>
                                                <div className='fg-darkgray25 fg-hover-black50'>
                                                    <small><Icon glyph='icon-ikons-time' style={{ position: 'relative', top: 1 }} /><span> 5 minutes read</span></small>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Grid>
                                    <div dangerouslySetInnerHTML={{__html:this.props.report.content}} />
                                </Col>
                            </Row>
                        </Grid>
                    </PanelBody>
                    <hr style={{ margin: '0' }} />

                    <PanelFooter>
                        <Grid>
                            <Row>
                                <Col xs={4} style={{ paddingTop: 12.5, paddingBottom: 12.5 }}>
                                    {/* Commented away hashtag */}
                                    {/* <div><small><Icon glyph='icon-ikons-hashtag' style={{ position: 'relative', top: 1 }} /> ENTERTAINMENT</small></div> */}
                                </Col>
                                <Col xs={8} className='text-right' style={{ paddingTop: 12.5, paddingBottom: 12.5 }}>
                                    <div style={{ display: 'inline-block', marginLeft: 25 }}>
                                        <Icon style={{ position: 'relative', lineHeight: 0, top: 2 }} glyph='icon-ikons-speech-3' />
                                    </div>{' '}
                                    <div style={{ display: 'inline-block', marginLeft: 25 }}>
                                        <Icon style={{ position: 'relative', lineHeight: 0 }} glyph='icon-fontello-share' />
                                    </div>
                                    <div className='fg-pink' style={{ display: 'inline-block', marginLeft: 25 }}>
                                        <Icon style={{ position: 'relative', lineHeight: 0, top: 2 }} glyph='icon-ikons-heart' /><span> 0</span>
                                    </div>
                                    <div style={{ display: 'inline-block', marginLeft: 25 }}>
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