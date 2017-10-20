import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Flexbox from 'flexbox-react';

import { Link, withRouter } from 'react-router';
import {
    ShareButtons,
    generateShareIcon,
} from 'react-share';
import { ToastContainer, toast } from 'react-toastify';

import {
    Button,
    Icon,
    Row,
    Col,
    Grid,
    Panel,
    PanelBody,
    PanelContainer,
} from '@sketchpixy/rubix';

import { Overlay } from 'react-overlays'

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

function copyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.style.position = 'fixed';
    textArea.style.top = 0;
    textArea.style.left = 0;
    textArea.style.width = '2em';
    textArea.style.height = '2em';
    textArea.style.padding = 0;
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';
    textArea.style.background = 'transparent';
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('hi');
        toast.success('Linked copied!');
    } catch (err) {
        console.log('Oops, unable to copy link');
    }
    document.body.removeChild(textArea);
}

@withRouter
class Sharebox extends React.Component {
    //DON"T REMOVE FOR REFERENCE
    // passResultToParent = () => {
    //     this.props.propsInParent('valueToPassToParent');
    // }
    constructor(props) {
        super(props);
        this.state = { isShareOn: false };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isShareOn: !prevState.isShareOn
        }));
    }

    render() {
        // if (this.state.isShareOn) {
        return (
            <Grid>
                <Row>
                    <Col xs={12} collapseRight>
                        <PanelContainer controls={false}>
                            <PanelBody style={{ paddingBottom: 25, verticalAlign: 'middle', display: 'block' }} className='text-center'>
                                <Button bsStyle='blue' className='btn-icon' onlyOnHover onClick={() => { copyTextToClipboard(location.href) }} >
                                    <Icon glyph='icon-fontello-link' />
                                </Button>{' '}
                                <Button bsStyle='yellow' className='btn-icon' onlyOnHover onClick={this.handleClick} >
                                    <Icon glyph='icon-fontello-share' ref='target' />
                                </Button>{' '}
                                <Overlay
                                    show={this.state.isShareOn}
                                    onHide={() => this.setState({ isShareOn: false })}
                                    placement='top'
                                    container={ReactDOM.findDOMNode(this.refs.target)}
                                    target={props => ReactDOM.findDOMNode(this.refs.target)}
                                >
                                    <Flexbox flexDirection="row" justifyContent="center" minHeight="3vh">
                                        <FacebookShareButton className='btn-icon'
                                            url={this.props.shareUrl}
                                            quote={this.props.title}
                                            className="Facebook__share-button">
                                            <FacebookIcon
                                                size={32}
                                                round />
                                        </FacebookShareButton>

                                        <TwitterShareButton
                                            url={this.props.shareUrl}
                                            title={this.props.title}
                                            className="Demo__some-network__share-button">
                                            <TwitterIcon
                                                size={32}
                                                round />
                                        </TwitterShareButton>

                                        <TelegramShareButton
                                            url={this.props.shareUrl}
                                            title={this.props.title}
                                            className="Demo__some-network__share-button">
                                            <TelegramIcon size={32} round />
                                        </TelegramShareButton>

                                        <WhatsappShareButton
                                            url={this.props.shareUrl}
                                            title={this.props.title}
                                            separator=":: "
                                            className="Demo__some-network__share-button">
                                            <WhatsappIcon size={32} round />
                                        </WhatsappShareButton>
                                    </Flexbox>
                                </Overlay>
                                <Button bsStyle='red' className='btn-icon' onlyOnHover onClick={() => { this.props.router.push("/editreport/" + this.props.params.reportid) }}>
                                    <Icon glyph='icon-fontello-pencil' />
                                </Button>{' '}
                                <Button bsStyle='orange75' className='btn-icon' onlyOnHover onClick={() => {window.print()}}>
                                    <Icon glyph='icon-fontello-print' />
                                </Button>
                            </PanelBody>
                        </PanelContainer>
                        <ToastContainer
                            position="bottom-right"
                            type="default"
                            autoClose={3000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            pauseOnHover
                        />
                    </Col>
                </Row>
            </Grid>
        );
    }



}

Sharebox.propType = {
    onClick: PropTypes.func,
}

export default Sharebox