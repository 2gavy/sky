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
    console.log('hi' + this.props.title);
    this.state = {
      docid: "",
      title: "",
      body: "",
    }
  }

  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  }

  handleBodyChange(e) {
    this.setState({ body: e.target.value });
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
          <form onSubmit={this.handleSubmit.bind(this)}>
            <PanelBody>
              <Grid>
                <Row>
                  <Col xs={12}>
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
                      </Col>
                    </formGroup>

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
                  </Col>

                  <Col xs={8} className='text-right' style={{ paddingTop: 12.5, paddingBottom: 12.5 }}>
                    <div style={{ display: 'inline-block', marginLeft: 25 }}>
                      <Button type="submit">Update</Button>
                      <Button onClick={() => { this.props.router.push("/report/" + this.props.params.reportid) }}>Cancel Edit</Button>
                    </div>
                  </Col>
                </Row>
              </Grid>
            </PanelFooter>
          </form>
        </Panel>
      </PanelContainer>
    );
  }
}

export default ReportEdit