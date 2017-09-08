import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router';
import Flexbox from 'flexbox-react';
import actions from '../redux/actions';
import axios from 'axios';

import {
    ShareButtons,
    generateShareIcon,
} from 'react-share';

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

const {
    FacebookShareButton,
    TwitterShareButton,
    TelegramShareButton,
    WhatsappShareButton,
  } = ShareButtons;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const TelegramIcon = generateShareIcon('telegram');
const WhatsappIcon = generateShareIcon('whatsapp');

@connect((state) => state)
class Report extends React.Component {
    constructor(props) {
        super(props);
     
        this.state = {
            docid: "",
            title: "",
            source: "",
            date: "",
            body: "",
            entities: "",
        }

        // Bind this to the functions 
		this.handleClick = this.handleClick.bind(this);
        
    }
    componentDidMount() {
        if (!this.props.params.reportid) {
            return
        }
        axios.get('http://35.198.208.48:8001/api/reports/' + this.props.params.reportid)
            .then((result) => {
                const report = result.data;
                if (!report) {
                    this.props.router.push('/404');
                }
                this.setState(report[0]);
            })
    }

    handleClick() {
        console.log('in');
        this.setState({modalIsOpen: true});
      }

    render() {  
        const shareUrl = ('http://35.198.208.48:8001/api/reports/' + this.props.params.reportid);
        const title = this.state.title;

        var entities = [];
        if (entities|| this.state.entities.length == 0) {
            entities.push("None found");
        } else {
            for (var i = 0; i < this.state.entities.length; i++) {
                entities.push(<Tag key={i}>{this.state.entities[i]}</Tag>);
            }
        }

        return (
            <Grid>
                <PanelContainer plain collapseBottom controls={false}>
                    <Panel horizontal>
                        <PanelLeft>
                            <Row>
                                <Col xs={12}>
                                    <PanelContainer>
                                        <Panel>
                                            <PanelBody>
                                                <Grid>
                                                    <Row>
                                                        <Col xs={12}>
                                                            <h3 className='fg-black50' style={{ marginTop: 0 }}>{this.state.title}</h3>
                                                            <Grid>
                                                                <Row>
                                                                    <Col xs={6} collapseLeft collapseRight>
                                                                        <div className='fg-darkgray50'>
                                                                            <small>by {this.state.source} / {this.state.date}</small>
                                                                        </div>
                                                                    </Col>
                                                                    <Col xs={6} collapseLeft collapseRight className='text-right'>
                                                                        <div className='fg-darkgray25 fg-hover-black50'>
                                                                            <small><Icon glyph='icon-ikons-time' style={{ position: 'relative', top: 1 }} /><span> 5 minutes read</span></small>
                                                                        </div>
                                                                    </Col>
                                                                </Row>
                                                            </Grid>
                                                            <p style={{ marginTop: 25 }}>{this.state.body}</p>
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
                                                                <Button onClick={() => {this.props.router.push("/editreport/" + this.props.params.reportid)}}>Edit Report</Button>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Grid>
                                            </PanelFooter>
                                        </Panel>
                                    </PanelContainer>
                                </Col>
                            </Row>
                        </PanelLeft>
                        <PanelRight className='hidden-xs' style={{ width: 350 }}>
                            <Grid>
                                <Row>
                                    <Col xs={12} collapseRight>
                                        <PanelContainer controls={false}>
                                            <PanelBody style={{ paddingBottom: 25, verticalAlign: 'middle', display: 'block' }}>
                                                <div className='text-center'>


                                                    <Button bsStyle='yellow' className='btn-ion' onlyOnHover onClick={this.handleClick} >
                                                        <Icon glyph='icon-fontello-share' />
                                                    </Button>{' '}
                                              
                                               
                                                    <Flexbox flexDirection="row" justifyContent="center" minHeight="3vh">
                                                    <FacebookShareButton  className='btn-icon'
                                                        url={shareUrl}
                                                        quote={title}
                                                        className="Facebook__share-button">
                                                        <FacebookIcon
                                                            size={32}
                                                            round />
                                                    </FacebookShareButton>

                                                    <TwitterShareButton
                                                        url={shareUrl}
                                                        title={title}
                                                        className="Demo__some-network__share-button">
                                                        <TwitterIcon
                                                            size={32}
                                                            round />
                                                    </TwitterShareButton>

                                                    <TelegramShareButton
                                                        url={shareUrl}
                                                        title={title}
                                                        className="Demo__some-network__share-button">
                                                        <TelegramIcon size={32} round />
                                                    </TelegramShareButton>

                                                    <WhatsappShareButton
                                                        url={shareUrl}
                                                        title={title}
                                                        separator=":: "
                                                        className="Demo__some-network__share-button">
                                                        <WhatsappIcon size={32} round />
                                                    </WhatsappShareButton>
                                                    </Flexbox>





                                                  {/* <Button bsStyle='red' className='btn-icon' onlyOnHover>
                                                        <Icon glyph='icon-fontello-docs' />
                                                    </Button>{' '}
                                                    <Button bsStyle='orange75' className='btn-icon' onlyOnHover>
                                                        <Icon glyph='icon-fontello-print' />
                                                    </Button>
                                                    */}
                                                </div>
                                            </PanelBody>
                                        </PanelContainer>

                                    <PanelContainer controls={false}>
                                        <PanelBody style={{ paddingBottom: 12.5 }}>
                                            <Grid>
                                                <Row>
                                                    <Col xs={12} className='text-center'>
                                                        <div className='text-uppercase text-left blog-sidebar-heading'>
                                                            <small>Entities</small>
                                                        </div>
                                                        {entities}
                                                    </Col>
                                                </Row>
                                            </Grid>
                                        </PanelBody>
                                    </PanelContainer>
                                </Col>
                            </Row>
                        </Grid>
                    </PanelRight>
                    </Panel>
                </PanelContainer>
            </Grid >
        );
    }
}

export default Report;