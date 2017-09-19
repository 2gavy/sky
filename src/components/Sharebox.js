import React from 'react';
import PropTypes from 'prop-types';
import Flexbox from 'flexbox-react';
import {
    ShareButtons,
    generateShareIcon,
} from 'react-share';

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

class Sharebox extends React.Component {
    //DON"T REMOVE FOR REFERENCE
    // passResultToParent = () => {
    //     this.props.propsInParent('valueToPassToParent');
    // }
    constructor(props){
        super(props);
        this.state = {isShareOn:false};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        
        this.setState(prevState=>({
            isShareOn: !prevState.isShareOn
        }));

    }

    render() {

        if(this.state.isShareOn){
        return (
            <Grid>
                <Row>
                    <Col xs={12} collapseRight>
                        <PanelContainer controls={false}>
                            <PanelBody style={{ paddingBottom: 25, verticalAlign: 'middle', display: 'block' }} className='text-center'>
                                <Button bsStyle='blue' className='btn-icon' onlyOnHover>
                                    <Icon glyph='icon-fontello-link' />
                                </Button>{' '}

                                <Button bsStyle='yellow' className='btn-icon' onlyOnHover onClick={this.handleClick} >
                                    <Icon glyph='icon-fontello-share' />
                                </Button>{' '}
                                <Button bsStyle='red' className='btn-icon' onlyOnHover>
                                    <Icon glyph='icon-fontello-docs' />
                                </Button>{' '}
                                <Button bsStyle='orange75' className='btn-icon' onlyOnHover>
                                    <Icon glyph='icon-fontello-print' />
                                </Button>


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
                            </PanelBody>
                        </PanelContainer>
                    </Col>
                </Row>
            </Grid>
        );
    }

    return (
        <Grid>
            <Row>
                <Col xs={12} collapseRight>
                    <PanelContainer controls={false}>
                        <PanelBody style={{ paddingBottom: 25, verticalAlign: 'middle', display: 'block' }} className='text-center'>
                            <Button bsStyle='blue' className='btn-icon' onlyOnHover>
                                <Icon glyph='icon-fontello-link' />
                            </Button>{' '}

                            <Button bsStyle='yellow' className='btn-icon' onlyOnHover onClick={this.handleClick} >
                                <Icon glyph='icon-fontello-share' />
                            </Button>{' '}
                            <Button bsStyle='red' className='btn-icon' onlyOnHover>
                                <Icon glyph='icon-fontello-docs' />
                            </Button>{' '}
                            <Button bsStyle='orange75' className='btn-icon' onlyOnHover>
                                <Icon glyph='icon-fontello-print' />
                            </Button>


                            
                        </PanelBody>
                    </PanelContainer>
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