import React from 'react';
import { Link, withRouter } from 'react-router';
import { updateReport } from '../redux/apis/ReportService';
import DatePicker from 'react-datepicker';
import moment from 'moment';

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

@withRouter
class ReportEdit extends React.Component {

  constructor(props) {
    super(props);
  }

  handleTitleChange(e) {
    this.props.handleTitleChange({ title: e.target.value });
  }

  handleBodyChange(e) {
    this.props.handleBodyChange({ body: e.target.value });
  }
 
  handleDateChange(date) {
    this.props.handleDateChange({ date: date });
  }

  handleSourceChange(e) {
    this.props.handleSourceChange({ source: e.target.value });
  }
  
  handleEntitiesChange(e) {
    this.props.handleEntitiesChange({ entities: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    alert('A new title was submitted: ' + this.props.title);


    updateReport({
      title: this.props.title,
      author: this.props.author,
      source: this.props.source,
      date: '12/02/2017',
      body: this.props.body,
      docid: this.props.docid,
    }).then(value => {
      this.props.router.push("/report/" + this.props.params.reportid);
    }, reason => {
      console.log(reason);
    });
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
                          value={!!this.props.title ? this.props.title : ''}
                          placeholder="Mandatory Text"
                          onChange={this.handleTitleChange.bind(this)}
                        />
                      </Col>
                    </formGroup>

                   <formGroup>
                      <Col xs={2}>
                        <controlLabel>Date:</controlLabel>
                      </Col>
                      <Col xs={10}>
                        <DatePicker dateFormat="DD/MM/YYYY" 
                          selected={this.props.date}
                          placeholder="Mandatory Text"
                          onChange={this.handleDateChange.bind(this)}
                        />
                      </Col>
                    </formGroup>

                    <formGroup>
                      <Col xs={2}>
                        <controlLabel>Source:</controlLabel>
                      </Col>
                      <Col xs={10}>
                        <FormControl
                          type="text"
                          value={!!this.props.source ? this.props.source : ''}
                          placeholder="Mandatory Text"
                          onChange={this.handleSourceChange.bind(this)}
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
                          value={!!this.props.body ? this.props.body : ''}
                          rows='10'
                          placeholder="Mandatory text"
                          onChange={this.handleBodyChange.bind(this)}
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