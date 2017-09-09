import React from 'react';

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

class ReportEdit extends React.Component {

  constructor(props) {
    super(props);
    console.log('hi'+this.props.title);
    this.state = {
        docid: "",
        title: "",
        body: "",
    }
}

  handleTitleChange(e) {
    this.setState({ title: e.target.value});
  }

  handleBodyChange(e) {
    this.setState({ body: e.target.value});
  }

  handleSubmit(e) {
    alert('A name was submitted: ' + this.state.title);
    alert('the new body text is:' + this.state.body);
    this.props.router.push("/report/" + this.props.docid)
    e.preventDefault();
  }

  render() {
    return (
      <PanelContainer>
        <Panel>
          <PanelBody>
            <Grid>
              <Row>
                <Col xs={12}>
                  <form onSubmit={this.handleSubmit.bind(this)}>
                    <formGroup>
                      <Col xs={2}>
                        <controlLabel>Title:</controlLabel>
                      </Col>
                      <Col xs={10}>
                        <FormControl
                          type="text"
                          value={this.state.title}
                          placeholder="Mandatory Text"
                          onChange={::this.handleTitleChange}
                        />
                      </Col>
                    </formGroup>

                    <formGroup>
                      <Col xs={2}>
                        <controlLabel>Content:</controlLabel>
                      </Col>
                      <Col xs={10}>
                        <FormControl
                          componentClass="TextArea"
                          value={this.state.body}
                          rows='10'
                          placeholder="Mandatory text"
                          onChange={::this.handleBodyChange}
                        />
                      </Col>
                    </formGroup>
                    <formGroup>
                      <Col xsOffset={10} xs={2}>
                        <Button type="submit">
                          Update
                        </Button>
                      </Col>
                    </formGroup>
                  </form>
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
                    <Button onClick={() => { this.props.router.push("/report/" + this.props.params.reportid) }}>Cancel Edit</Button>
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

export default ReportEdit