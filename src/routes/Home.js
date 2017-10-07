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
  ViewSwitcherHits, ViewSwitcherToggle, DynamicRangeFilter,
  InputFilter, GroupedSelectedFilters,
  ActionBar, ActionBarRow
} from 'searchkit'

const ReportHitsListItem = (props) => {
  const { bemBlocks, result } = props
  let url = "http://www.imdb.com/title/" + result._source.imdbId
  const source: any = extend({}, result._source, result.highlight)

  var now = new Date();
  var weekday = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
  var month = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var posts = ['blue', 'green', 'yellow', 'black', 'red'];

  return (
    // <div className={bemBlocks.item().mix(bemBlocks.container("item"))} data-qa="hit">
    //   <div className={bemBlocks.item("poster")}>
    //     <img alt="presentation" data-qa="poster" src={result._source.poster} />
    //   </div>
    //   <div className={bemBlocks.item("details")}>
    //     <a href={url} target="_blank"><h2 className={bemBlocks.item("title")} dangerouslySetInnerHTML={{ __html: source.title }}></h2></a>
    //     <h3 className={bemBlocks.item("subtitle")}>Released in {source.year}, rated {source.imdbRating}/10</h3>
    //     <div className={bemBlocks.item("text")} dangerouslySetInnerHTML={{ __html: source.plot }}></div>
    //   </div>
    // </div>

    <PanelContainer controls={false}>
      <Panel>
        <PanelBody>
          <TimelineView withHeader className={'border-hover-blue tl-blue'}>
            <TimelineItem>
              <TimelineHeader className={'bg-hover-yellow'}>
                <TimelineIcon className={'bg-blue fg-white'} glyph='icon-fontello-chat-1' />
                <TimelineTitle>
                  {/*Code change for ES: Convert epoch to human readable date/time}*/}
                  {/*now.getDate() + " " + month[now.getMonth()] + " " + now.getFullYear() + " " + now.getHours() + ":" + now.getMinutes()}*/}
                  {
                      new Date(Number(source.reportDatetime)*1000).toUTCString()            
                  }
                </TimelineTitle>
              </TimelineHeader>
              <TimelineBody>
                <ul>
                  <li>
                    {/* <LoremIpsum query='2s' /> */}
                    <div className={bemBlocks.item().mix(bemBlocks.container("item"))} data-qa="hit">
                      {/* Code change for ES: Comment out image display
                      <div className={bemBlocks.item("poster")}>
                        <img alt="presentation" data-qa="poster" src={result._source.poster} />
                      </div>*/}
                      <div className={bemBlocks.item("details")}>
                        {/* Code change for ES: Change attributes to overt report attributes
                        <a href={url} target="_blank"><h2 className={bemBlocks.item("title")} dangerouslySetInnerHTML={{ __html: source.title }}></h2></a>
                        <h3 className={bemBlocks.item("subtitle")}>Released in {source.year}, rated {source.imdbRating}/10</h3>
                        <div className={bemBlocks.item("text")} dangerouslySetInnerHTML={{ __html: source.plot }}></div>*/}
                        <a href={url} target="_blank"><h2 className={bemBlocks.item("title")} dangerouslySetInnerHTML={{ __html: source.title }}></h2></a>
                        <h3 className={bemBlocks.item("subtitle")}>Source: {source.source} <br/> Author: {source.authors.author}</h3>
                        <div className={bemBlocks.item("text")} dangerouslySetInnerHTML={{ __html: source.docid}}></div>
                      </div>
                    </div>
                  </li>
                </ul>
              </TimelineBody>
            </TimelineItem>
          </TimelineView>
        </PanelBody>
      </Panel>
    </PanelContainer>
  )
}
@connect((state) => state)
class Home extends React.Component {
  _getPosts() {
    var now = new Date();
    var weekday = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    var month = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var posts = ['blue', 'green', 'yellow', 'black', 'red'];

    return posts.map((post, index) => {
      return (
        <PanelContainer>
          <Panel>
            <PanelBody>
              <TimelineView withHeader className={'border-hoverblue tl-' + post} key={index}>
                <TimelineItem>
                  <TimelineHeader className={'bg-hover' + post}>
                    <TimelineIcon className={'bg-' + post + ' fg-white'} glyph='icon-fontello-chat-1' />
                    <TimelineTitle>
                      {now.getDate() + " " + month[now.getMonth()] + " " + now.getFullYear() + " " + now.getHours() + ":" + now.getMinutes()}
                    </TimelineTitle>
                  </TimelineHeader>
                  <TimelineBody>
                    <ul>
                      <li>
                        <LoremIpsum query='2s' />
                      </li>
                    </ul>
                  </TimelineBody>
                </TimelineItem>
              </TimelineView>
            </PanelBody>
          </Panel>
        </PanelContainer>
      );
    });
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={4} sm={3} md={3}>
            <PanelContainer controls={false}>
              <Panel>
                <PanelBody>
                  <Grid>
                    <Row>
                      <Col xs={12}>
                        {/* Code change for ES: Faceted search for entities
                        <HierarchicalMenuFilter fields={["type.raw", "genres.raw"]} title="Categories" id="categories" />
                        <DynamicRangeFilter field="metaScore" id="metascore" title="Metascore" rangeFormatter={(count) => count + "*"} />
                        <RangeFilter min={0} max={10} field="imdbRating" id="imdbRating" title="IMDB Rating" showHistogram={true} />
                        <InputFilter id="writers" searchThrottleTime={500} title="Writers" placeholder="Search writers" searchOnChange={true} queryFields={["writers"]} />
                        <RefinementListFilter id="actors" title="Actors" field="actors.raw" size={10} />
                        <RefinementListFilter translations={{ "facets.view_more": "View more writers" }} id="writers" title="Writers" field="writers.raw" operator="OR" size={10} />
                        <RefinementListFilter id="countries" title="Countries" field="countries.raw" operator="OR" size={10} />
                        <NumericRefinementListFilter id="runtimeMinutes" title="Length" field="runtimeMinutes" options={[
                          { title: "All" },
                          { title: "up to 20", from: 0, to: 20 },
                          { title: "21 to 60", from: 21, to: 60 },
                          { title: "60 or more", from: 61, to: 1000 }
                        ]} />*/}
                        <RefinementListFilter id= "entities" title="ENTITIES" field="entities" operator="OR" size={10}/>
                      </Col>
                    </Row>
                  </Grid>
                </PanelBody>
              </Panel>
            </PanelContainer>
          </Col>
          <Col md={9}>
            {/* {this._getPosts()} */}
            <ActionBar>
              <ActionBarRow>
                <HitsStats translations={{
                  "hitstats.results_found": "{hitCount} reports found"
                }} />
                <ViewSwitcherToggle />

                <SortingSelector options={[
                  {/* Code change for ES: sort options
                  { label: "Relevance", field: "_score", order: "desc" },
                  { label: "Latest Releases", field: "released", order: "desc" },
                  { label: "Earliest Releases", field: "released", order: "asc" */},
                  { label: "Relevance", field: "_score", order: "desc" },
                  { label: "Latest Reports", field: "reportDatetime", order: "desc" },
                  { label: "Earliest Reports", field: "reportDatetime", order: "asc" }
                ]} />
              </ActionBarRow>
              {/*<ActionBarRow>
                <GroupedSelectedFilters /><ResetFilters />
              </ActionBarRow>*/}
            </ActionBar>
            <br/><br/>
            {/* Code change for ES: search result settings
            <ViewSwitcherHits
              hitsPerPage={12} highlightFields={["title", "plot"]}
              sourceFilter={["plot", "title", "poster", "imdbId", "imdbRating", "year"]
              hitComponents={[
                { key: "list", title: "List", itemComponent: MovieHitsListItem },
                { {key:"grid", title:"Grid", itemsComponent:MovieHitsGridItem, defaultOption:true}
              ]
              scrollTo="body"
            />*/}
            <ViewSwitcherHits
              hitsPerPage={12} highlightFields={["title"]}
              hitComponents={[
                { key: "list", title: "Results List", itemComponent: ReportHitsListItem }
              ]}
              scrollTo="body"
            />
            <NoHits suggestionsField={"title"} />
            <Pagination showNumbers={true} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Home;