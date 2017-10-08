import React from 'react';
import { connect } from 'react-redux';
import actions from '../redux/actions';

import {
  Button,
  Row,
  Col,
  Grid,
  Panel,
  PanelBody,
  PanelContainer,
  LoremIpsum,
  TimelineBody,
  TimelineIcon,
  TimelineView,
  TimelineItem,
  TimelineTitle,
  TimelineHeader,
} from '@sketchpixy/rubix';

import { extend } from 'lodash'
import {
  RefinementListFilter, Pagination,
  HierarchicalMenuFilter, HitsStats, SortingSelector, NoHits,
  ResetFilters, RangeFilter, NumericRefinementListFilter,
  ViewSwitcherHits, DynamicRangeFilter,
  InputFilter, SelectedFilters,
  ActionBar, ActionBarRow
} from 'searchkit'

const SelectedFilter = (props) => (
  <div className={props.bemBlocks.option()
    .mix(props.bemBlocks.container("item"))
    .mix(`selected-filter--${props.filterId}`)()}>
    <div className={props.bemBlocks.option("name")}>{props.labelKey}: {props.labelValue}</div>
    <div className={props.bemBlocks.option("remove-action")} onClick={props.removeFilter}>x</div>
  </div>
)

const ReportHitsListItem = (props) => {
  const { bemBlocks, result } = props
  let url = "http://localhost:8080/report/"
  const source: any = extend({}, result._source, result.highlight)

  return (
    <PanelContainer controls={false} style={{width: "100%"}}>
      <a href={url + source.docid} target="_blank">
        <Panel horizontal>
          <PanelBody>
            <TimelineView withHeader className={'border-hover-blue tl-blue'}>
              <TimelineItem>
                <TimelineHeader className={'bg-hover-yellow'} >
                  <TimelineIcon className={'bg-blue fg-white'} glyph='icon-fontello-chat-1' />
                  <TimelineTitle>
                    {/*Code change for ES: Convert epoch to human readable date/time}*/}
                    {new Date(Number(source.reportDatetime) * 1000).toUTCString().slice(0, -7)}
                  </TimelineTitle>
                </TimelineHeader>
                <TimelineBody>
                  <ul>
                    <li>
                      <div className={bemBlocks.item().mix(bemBlocks.container("item"))} data-qa="hit">
                        {/* Code change for ES: Comment out image display*/}
                        <div className={bemBlocks.item("details")}>
                          {/* Code change for ES: Change attributes to overt report attributes */}
                          <h2 className={bemBlocks.item("title")} dangerouslySetInnerHTML={{ __html: source.title }}></h2>
                          <h3 className={bemBlocks.item("subtitle")}>Source: {source.source} <br /> Author: {source.authors.author}</h3>
                          {/* <div className={bemBlocks.item("text")} dangerouslySetInnerHTML={{ __html: source.reportDatetime}}></div> */}
                        </div>
                      </div>
                    </li>
                  </ul>
                </TimelineBody>
              </TimelineItem>
            </TimelineView>
          </PanelBody>
        </Panel>
      </a>
    </PanelContainer>
  )
}

@connect((state) => state)
class Home extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col className='hidden-xs' sm={3} md={2}>
            <PanelContainer controls={false}>
              <Panel>
                <PanelBody>
                  <Grid>
                    <Row>
                      <Col xs={12}>
                        {/* Code change for ES: Faceted search for entities */}
                        <RefinementListFilter id="entities" title="ENTITIES" field="entities" operator="AND" size={30} />
                      </Col>
                    </Row>
                  </Grid>
                </PanelBody>
              </Panel>
            </PanelContainer>
          </Col>
          <Col xs={12} sm={9} md={10}>
            <ActionBar className='hidden-xs' >
              <ActionBarRow>
                <HitsStats translations={{ "hitstats.results_found": "{hitCount} reports found" }} />
                <SortingSelector options={[
                  /* Code change for ES: sort options */
                  { label: "Relevance", field: "_score", order: "desc" },
                  { label: "Latest Reports", field: "reportDatetime", order: "desc" },
                  { label: "Earliest Reports", field: "reportDatetime", order: "asc" }
                ]} />
              </ActionBarRow>
              <ActionBarRow>
                <SelectedFilters itemComponent={SelectedFilter} />
                <ResetFilters />
              </ActionBarRow>
            </ActionBar>
            {/* Code change for ES: search result settings*/}
            <ViewSwitcherHits hitsPerPage={10} highlightFields={["title"]} hitComponents={[{ key: "list", title: "Results List", itemComponent: ReportHitsListItem }]} scrollTo="body" />
            <NoHits suggestionsField={"title"} />
            <Pagination showNumbers={true} showLast={true} pageScope={4}/>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Home;