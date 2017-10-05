import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Flexbox from 'flexbox-react';
import actions from '../redux/actions';
import * as Actions from '../redux/actions/reports';
import { Link, withRouter } from 'react-router';
import { createReport } from '../redux/apis/ReportService';

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
class ReportCreate extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      docid: "",
      title: "",
      source: "",
      date: "",
      body: "",
      entities: ""
  }
  this.onSubmit = this.onSubmit.bind(this);
  }

  getValidationState() {
            //const length = this.state.value.length;
            //if (length > 10) return 'success';
            //else if (length > 5) return 'warning';
            //else if (length > 0) return 'error';
      }
    
    onTitleChange(event) {
      this.props.reportFieldsTitleCreate({
           title: event.target.value
      });
    }
    
    onSourceChange(event) {
      this.props.reportFieldsSourceCreate({
           source: event.target.value
      });
    }

    onAuthorChange(event) {
      this.props.reportFieldsAuthorCreate({
           author: event.target.value
      });
    }
    
    onDateChange(event) {
      this.props.reportFieldsDateCreate({
           date: event.target.value
      });
    }
    
    onContentChange(event) {
      this.props.reportFieldsContentCreate({
           content: event.target.value
      });
    }

    onSubmit(event) {
      //this.setState({ title: event.target.value, source: event.target.value });
      console.log("title is " + this.props.title);
      console.log("author is " + this.props.author);
      createReport({
          "title": this.props.title,
          "author": this.props.author,
          "source": this.props.source,
          "date": '12/02/2017',
          "body": this.props.content,
          "docid": '12345678',
      }).then(function (response) {
          console.log(response);
      })
      .catch(function (error) {
          console.log(error);
      });
  } 

  handleChange(e) {
    console.log(e.target.value);
    this.setState({ title: e.target.value });
    this.setState({ source: e.target.value });
}

  render() {
    return (
      <PanelContainer>
        <Panel>
          <form>
            <PanelBody>
              <Grid>
                <Row>
                  <Col xs={12}>
                    <formGroup>
                      <Col xs={2}>
                        <controlLabel>Title:</controlLabel>
                      </Col>
                      <Col xs={10}>
                      <FormControl type="text" placeholder="Input Title" id="title" className="form-control" value={!!this.props.title ? this.props.title : ''} onChange={ ::this.onTitleChange } />
                      </Col>
                    </formGroup>

                    <formGroup>
                      <Col xs={2}>
                        <controlLabel>Date:</controlLabel>
                      </Col>
                      <Col xs={10}>
                        <FormControl
                          type="text"
                          value={!!this.props.date ? this.props.date : ''}
                          placeholder="Mandatory Text"
                          onChange={ ::this.onDateChange }
                        />
                      </Col>
                    </formGroup>

                    <formGroup>
                      <Col xs={2}>
                        <controlLabel>Source:</controlLabel>
                      </Col>
                      <Col xs={10}>
                      <FormControl type="text" placeholder="Input Source" id="source" className="form-control" value={!!this.props.source ? this.props.source : ''} onChange={ ::this.onSourceChange } />
                      </Col>
                    </formGroup>

                    <formGroup>
                      <Col xs={2}>
                        <controlLabel>Author:</controlLabel>
                      </Col>
                      <Col xs={10}>
                      <FormControl type="text" placeholder="Input Author" id="author" className="form-control" value={!!this.props.author ? this.props.author : ''} onChange={ ::this.onAuthorChange } />
                      </Col>
                    </formGroup>

                    <formGroup>
                      <Col xs={2}>
                        <controlLabel>Content:</controlLabel>
                      </Col>
                      <Col xs={10}>
                        <FormControl
                          componentClass="TextArea"
                          value={!!this.props.content ? this.props.content : ''}
                          rows='10'
                          placeholder="Input HTML content here..."
                          onChange={ ::this.onContentChange }
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
                      <Button onClick={this.onSubmit}>Upload</Button>
                      <Button onClick={() => {}}>Cancel</Button>
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

ReportCreate.propType = {
  title: PropTypes.string,
  author: PropTypes.string,
  source: PropTypes.string,
  date: PropTypes.date,
  content: PropTypes.string,
}

const mapStateToProps = (state) => {
  return {
      title: state.reportsModule.title,
      author: state.reportsModule.author,
      source: state.reportsModule.source,
      date: state.reportsModule.date,
      content: state.reportsModule.content,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      reportFieldsTitleCreate: (data) => {
          dispatch(Actions.reportFieldsTitleCreate(data));
      },
      reportFieldsAuthorCreate: (data) => {
          dispatch(Actions.reportFieldsAuthorCreate(data));
      },
      reportFieldsSourceCreate: (data) => {
          dispatch(Actions.reportFieldsSourceCreate(data));
      },
      reportFieldsDateCreate: (data) => {
          dispatch(Actions.reportFieldsDateCreate(data));
      },
      reportFieldsContentCreate: (data) => {
          dispatch(Actions.reportFieldsContentCreate(data));
      },
      reportCreateRequest: (data) => {
          dispatch(Actions.reportCreateRequest(data));
      },  
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ReportCreate);