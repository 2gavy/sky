import React from 'react';
import ReactDOM from 'react-dom';
import Flexbox from 'flexbox-react';
import PropTypes from 'prop-types';
import {
    ShareButtons,
    generateShareIcon,
} from 'react-share';
import { toast } from 'react-toastify';
import * as config from '../../appConfig';
import {
    Button,
    Icon,
    Grid,
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

class ShareButton extends React.Component {
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
        return (
                <Button bsStyle='yellow' className='btn-icon' onlyOnHover onClick={this.handleClick} >
                    <Icon glyph='icon-fontello-share' ref='target' />
                    <Overlay
                    show={this.state.isShareOn}
                    onHide={() => this.setState({ isShareOn: false })}
                    placement='top'
                    container={ReactDOM.findDOMNode(this.refs.target)}
                    target={props => ReactDOM.findDOMNode(this.refs.target)}
                >
                    <Flexbox flexDirection="row" justifyContent="center" minHeight="3vh">
                        <FacebookShareButton className='btn-icon'
                            url={config.FRONTEND_ADDR + "report/" +this.props.docid}
                            quote={this.props.title}
                            className="Facebook__share-button">
                            <FacebookIcon
                                size={32}
                                round />
                        </FacebookShareButton>

                        <TwitterShareButton
                            url={config.FRONTEND_ADDR + "report/" +this.props.docid}
                            title={this.props.title}
                            className="Demo__some-network__share-button">
                            <TwitterIcon
                                size={32}
                                round />
                        </TwitterShareButton>

                        <TelegramShareButton
                            url={config.FRONTEND_ADDR + "report/" +this.props.docid}
                            title={this.props.title}
                            className="Demo__some-network__share-button">
                            <TelegramIcon size={32} round />
                        </TelegramShareButton>

                        <WhatsappShareButton
                            url={config.FRONTEND_ADDR + "report/" +this.props.docid}
                            title={this.props.title}
                            separator=":: "
                            className="Demo__some-network__share-button">
                            <WhatsappIcon size={32} round />
                        </WhatsappShareButton>
                    </Flexbox>
                </Overlay>
                </Button>
        );
    }
}

ShareButton.propType = {
    onClick: PropTypes.func,
}

export default ShareButton