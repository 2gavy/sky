import React from 'react';
import { connect } from 'react-redux';

import actions from '../redux/actions';

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

const reports = [{
    title: "Singapore's Smart Nation vision enters 'build' phase, focus on infrastructure, services.",
    publisher: "Channel News Asia",
    link: "http://www.channelnewsasia.com/news/singapore/singapore-s-smart-nation-vision-enters-build-phase-focus-on-infr-8281958",
    content: '"Building the world\'s first Smart Nation is only the beginning of the next phase of Singapore\'s development in information and communications technology," says Minister for Communications and Information Yaacob Ibrahim. SINGAPORE: The Republic\'s Smart Nation vision has entered its "build" phase, which will focus on the infrastructure and services that will serve as the framework for future development. Minister for Communications and Information Yaacob Ibrahim announced this as part of his keynote speech at the Infocomm Media Business Exchange (imbX) opening ceremony on Tuesday (Jun 2). He fleshed out how the Infocomm Media Masterplan - under which the private and public sector cooperates to exploit converging areas in the infocomm and media sectors - will put in place the necessary infrastructure, and touched on three areas of focus: Smart Logistics, Smart Nation Tech Challenges and Smart Health-Assist. Smart Logistics leverage technologies such as the Internet of Things to provide near real-time actionable visibility and improve decision-making capabilities for businesses large and small. "With the intelligence of our devices and the visual images from the camera, we can tell that a machine has broken down, whether due to temperature or vibrations, and maybe that there\'s a fire," said Mr Terry Teh, director Advinno Technologies.',
    date: '02 Jun 2015 11:12AM'
}];

@connect((state) => state)
class Report2 extends React.Component {
    static fetchData(store) {
        return store.dispatch(actions.getReports(reports));
    }

    // Should pass in params.id of report
    _renderReport = () => {
        console.log(this.props.reports);
        return this.props.reports.map((report, index) => {
            return (
                <Grid key={index}>
                    <Row>
                        <Col sm={12}>
                            <PanelContainer>
                                <Panel>
                                    <PanelBody>
                                        <h3 className='fg-black50' style={{ margin: 25, marginTop: 0 }}>{report.title}</h3>
                                        <Grid>
                                            <Row>
                                                <Col xs={6} collapseLeft collapseRight>
                                                    <div className='fg-darkgray50'>
                                                        <small>by {report.publisher} / {report.date}</small>
                                                    </div>
                                                </Col>
                                                <Col xs={6} collapseLeft collapseRight className='text-right'>
                                                    <div className='fg-darkgray25 fg-hover-black50'>
                                                        <small><Icon glyph='icon-ikons-time' style={{ position: 'relative', top: 1 }} /><span> 5 minutes read</span></small>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Grid>
                                        {report.content}
                                    </PanelBody>
                                    <hr style={{ margin: '0' }} />

                                    <PanelFooter>
                                        <Grid>
                                            <Row>
                                                <Col xs={4} style={{ paddingTop: 12.5, paddingBottom: 12.5 }}>
                                                    <div><small><Icon glyph='icon-ikons-hashtag' style={{ position: 'relative', top: 1 }} /> ENTERTAINMENT</small></div>
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
                                                </Col>
                                            </Row>
                                        </Grid>
                                    </PanelFooter>
                                </Panel>
                            </PanelContainer>
                        </Col>
                    </Row>
                </Grid>
            )
        })
    };

    render() {
        return (
            <Grid>
                <PanelContainer plain collapseBottom controls={false}>
                    <Panel horizontal>
                        <PanelLeft>
                            <Row>
                                <Col xs={12}>
                                    {this._renderReport()}
                                </Col>
                            </Row>
                        </PanelLeft>
                        <PanelRight className='hidden-xs' style={{ width: 350 }}>
                            <Grid>
                                <Row>
                                    <Col xs={12} collapseRight>
                                        <PanelContainer controls={false}>
                                            <Panel horizontal>
                                                <PanelLeft style={{ verticalAlign: 'middle' }}>
                                                    <Grid>
                                                        <Row>
                                                            <Col xs={12}>
                                                                <div>
                                                                    <div style={{ paddingTop: 12.5, paddingBottom: 12.5 }}>
                                                                        {"Hi! My name is Pikachu and I can chuuuuu!"}
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </Grid>
                                                </PanelLeft>
                                                <PanelRight className='bg-orange' style={{ verticalAlign: 'middle', padding: 12.5, width: 80 }}>
                                                    <div className='text-center'><Image src='/imgs/app/avatars/avatar12.png' width='40' height='40' style={{ borderRadius: 100 }} /></div>
                                                </PanelRight>
                                            </Panel>
                                        </PanelContainer>

                                        <PanelContainer controls={false}>
                                            <PanelBody style={{ paddingBottom: 25, verticalAlign: 'middle', display: 'block' }}>
                                                <div className='text-center'>
                                                    <Button bsStyle='blue' className='btn-icon' onlyOnHover>
                                                        <Icon glyph='icon-fontello-link' />
                                                    </Button>{' '}
                                                    <Button bsStyle='red' className='btn-icon' onlyOnHover>
                                                        <Icon glyph='icon-fontello-docs' />
                                                    </Button>{' '}
                                                    <Button bsStyle='orange75' className='btn-icon' onlyOnHover>
                                                        <Icon glyph='icon-fontello-print' />
                                                    </Button>
                                                </div>
                                            </PanelBody>
                                        </PanelContainer>
                                    </Col>
                                </Row>
                            </Grid>
                        </PanelRight>
                    </Panel>
                </PanelContainer>
            </Grid>
        );
    }
}

export default Report2;