import React from 'react';
import { Link, withRouter } from 'react-router';
import { toast } from 'react-toastify';
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
} from '@sketchpixy/rubix';

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
        toast.success('Linked copied!');
    } catch (err) {
        console.log('Oops, unable to copy link');
    }
    document.body.removeChild(textArea);
}

@withRouter
class SideBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={12} collapseRight>
                        <PanelContainer controls={false}>
                            <PanelBody style={{ paddingBottom: 25, verticalAlign: 'middle', display: 'block' }} className='text-center'>
                                <Button bsStyle='blue' className='btn-icon' onlyOnHover onClick={() => { copyTextToClipboard(location.href) }} >
                                    <Icon glyph='icon-fontello-link' />
                                </Button>{' '}
                                <ShareButton title={this.props.report.title} docid={this.props.report.docid}/>
                                <Button bsStyle='red' className='btn-icon' onlyOnHover onClick={() => { this.props.router.push("/editreport/" + this.props.params.reportid) }}>
                                    <Icon glyph='icon-fontello-pencil' />
                                </Button>{' '}
                                <Button bsStyle='orange75' className='btn-icon' onlyOnHover onClick={() => { window.print() }}>
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

export default SideBox