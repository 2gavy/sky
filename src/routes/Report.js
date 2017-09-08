import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router';
import Flexbox from 'flexbox-react';
import actions from '../redux/actions';
import axios from 'axios';

import Alert from 'react-s-alert';


import {
    ShareButtons,
    generateShareIcon,
} from 'react-share';

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


var report = {
    title: "Trump to North Korea: 'Be very, very nervous'",
    publisher: "Channel News Asia",
    link: "http://www.channelnewsasia.com/news/world/trump-to-north-korea-be-very-very-nervous-9113328",
    body: 'Speaking alongside Vice President Mike Pence at his New Jersey country club, Trump also said China could do "a lot more" to pressure Pyongyang to end its nuclear weapons programme. WASHINGTON: President Donald Trump on Thursday (Aug 10) warned North Korea it should be "very, very nervous" of the consequences if it even thinks of attacking US soil, after nuclear-armed Pyongyang said it was readying missile launch plans on the Pacific territory of Guam. The Republican billionaire dismissed any criticism of his "fire and fury" warning, saying it possibly "wasn\'t tough enough," given threats made by the regime of Kim Jong-Un to both Washington and its allies. Trump also said China, Pyongyang\'s main diplomatic ally, could "do a lot more" to pressure Kim to end his country\'s nuclear weapons and ballistic missile programmes. Trump\'s comments, made from his golf club retreat in New Jersey, came after the North announced a detailed plan to send four missiles over Japan and towards Guam, where some 6,000 US soldiers are based. Pyongyang said the scheme to target the island, a key US military outpost in the western Pacific, was intended to "signal a crucial warning" as "only absolute force" would have an effect on a US leader "bereft of reason." Trump fired back with gusto. "If North Korea does anything in terms of even thinking about an attack on anybody we love or we represent or our allies or us, they can be very, very nervous," he told reporters, with Vice President Mike Pence at his side. "And they should be ... because things will happen to them like they never thought possible." Relations between Washington and Pyongyang have been tense for months, in the wake of the North\'s repeated missile tests, including two successful intercontinental ballistic missile (ICBM) test launches in July. Those launches put the US mainland in range. Some experts believe the second missile could potentially reach New York. The escalating saber-rattling took an unexpected turn on Tuesday when Trump seemed to borrow from the North\'s arsenal of rhetoric, saying it faced "fire and fury like the world has never seen" if it continued to threaten the US. That prompted a defiant Pyongyang to threaten a missile attack on Guam. The war of words has set off diplomatic alarm bells, and raised fears of a miscalculation that could lead to catastrophic consequences on the Korean peninsula and beyond. The region is facing "a mini Cuban missile crisis," John Delury, a professor at Seoul\'s Yonsei University, told AFP. Trump dismissed the notion that his administration was delivering mixed messages and said Washington remained open to negotiations. But he once again suggested that he expected China to "do a lot more" to bring North Korea into line. "I will tell you this, North Korea better get their act together or they\'re going to be in trouble like few nations have ever been in trouble in this world, okay?" he added. The United Nations imposed a seventh set of sanctions on Pyongyang at the weekend that could cost North Korea US$1 billion a year, with even China voting for the US-drafted proposal. The European Union announced on Thursday that it was expanding its North Korean sanctions blacklist. UNUSUAL DETAIL In North Korea, General Kim Rak-Gyom, the commander of the North\'s missile forces, dismissed Trump\'s "fire and fury" remarks as "a load of nonsense," according to Pyongyang\'s official Korean Central News Agency. "Sound dialogue is not possible with such a guy bereft of reason," he added. The military was expected to finalise its Guam plan by mid-August and submit it to Kim for consideration, he said. The unusually precise statement said the four missiles would be launched simultaneously and overfly the Japanese prefectures of Shimane, Hiroshima and Kochi. They would have a flight time of 17 minutes 45 seconds, travel 3,356.7 kilometres and come down 30 to 40 kilometres away from Guam, it said - just outside US territorial waters. Japan, which has in the past warned it would shoot down any North Korean missiles that threaten its territory, responded that it could "never tolerate" provocations from the reclusive state. Professor Yang Moo-Jin of Seoul\'s University of North Korean Studies said the level of detail in Pyongyang\'s statement was unusual. "The North appears to be saying what it is going to do is within international laws," he told AFP. "Therefore, it cannot be ruled out that the North may translate this plan into reality." \'NOT A DARE\' Analysts said a North Korean launch towards Guam would put the US in a dilemma: if it did not try to intercept the missiles, its credibility would be damaged and the North would feel emboldened to carry out a full-range ICBM test. But if an intercept were attempted and failed in any way, it would undermine the effectiveness of the United States\' ballistic missile defence system. Trump said Kim had "disrespected our country greatly" and vowed that he would not tolerate threats against the US, Japan and South Korea. "That\'s not a dare," he said. "That is a statement of fact." Tensions on the Korean peninsula tend to increase when Seoul and Washington launch major military joint exercises, and the next, Ulchi Freedom Guardian, is set to kick off around Aug 21. "Pyongyang\'s interpretation of rhetoric from Washington is different from the way the West regards the North\'s habitual threats," said Hong Hyun-Ik, a senior researcher with the Sejong Institute. "It views such fiery rhetoric from Trump as a matter of life and death."',
    date: '11 Aug 2017 04:09AM',
    entities: ['Donald Trump', 'Mike Pence', 'Kim Rak-Gyom', 'Yang Moo-Jin']
};

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
const MenuButton = require('react-menu-button');

@connect((state) => state)
class Report extends React.Component {
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

        // Bind this to the functions 
		this.handleClick = this.handleClick.bind(this);
		
		this.saveMenuRef = this.saveMenuRef.bind(this)
        this.state = { choice: null }
        
    }
    componentDidMount() {
        if (!this.props.params.reportid) {
            return
        }
        axios.get('http://35.198.208.48:8001/api/reports/' + this.props.params.reportid)
            .then((result) => {
                const report = result.data;
                if (!report) {
                    this.props.router.push('/404');
                }
                this.setState(report[0]);
            })
    }

    handleClick() {
        console.log('test');
      }

    saveMenuRef (ref) {
    this.menu = ref
    }
    
    componentDidMount () {
    this.menu.on('choose', choice => {
        this.setState({ choice: choice.innerText })
    })
    }

    render() { 
        const shareUrl = ('http://35.198.208.48:8001/api/reports/' + this.props.params.reportid);
        const title = this.state.title;

        let label = 'Difficulty'
        
        if (this.state.choice) {
            label += ' ' + this.state.choice
        }

        var entities = [];
        if (this.state.entities.length == 0) {
            entities.push("None found");
        } else {
            for (var i = 0; i < this.state.entities.length; i++) {
                entities.push(<Tag key={i}>{this.state.entities[i]}</Tag>);
            }
        }

        return (
            <Grid>
                <PanelContainer plain collapseBottom controls={false}>
                    <Panel horizontal>
                        <PanelLeft>
                            <Row>
                                <Col xs={12}>
                                    <PanelContainer>
                                        <Panel>
                                            <PanelBody>
                                                <Grid>
                                                    <Row>
                                                        <Col xs={12}>
                                                            <h3 className='fg-black50' style={{ marginTop: 0 }}>{this.state.title}</h3>
                                                            <Grid>
                                                                <Row>
                                                                    <Col xs={6} collapseLeft collapseRight>
                                                                        <div className='fg-darkgray50'>
                                                                            <small>by {this.state.source} / {this.state.date}</small>
                                                                        </div>
                                                                    </Col>
                                                                    <Col xs={6} collapseLeft collapseRight className='text-right'>
                                                                        <div className='fg-darkgray25 fg-hover-black50'>
                                                                            <small><Icon glyph='icon-ikons-time' style={{ position: 'relative', top: 1 }} /><span> 5 minutes read</span></small>
                                                                        </div>
                                                                    </Col>
                                                                </Row>
                                                            </Grid>
                                                            <p style={{ marginTop: 25 }}>{this.state.body}</p>
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
                                                        </Col>
                                                    </Row>
                                                </Grid>
                                            </PanelFooter>
                                        </Panel>
                                    </PanelContainer>
                                </Col>
                            </Row>
                        </PanelLeft>
                        <PanelRight className='hidden-xs' style={{ width: 350 }}>
                            <Grid>
                                <Row>
                                    <Col xs={12} collapseRight>
                                        <PanelContainer controls={false}>
                                            <PanelBody style={{ paddingBottom: 25, verticalAlign: 'middle', display: 'block' }}>
                                                <div className='text-center'>


                                                    <Button bsStyle='yellow' cclassName='btn-ion' onlyOnHover onClick={this.handleClick} >
                                                        <Icon glyph='icon-fontello-share' />
                                                    </Button>{' '}
                                              
                                               
                                                    <MenuButton
                                                        id='difficulty'
                                                        label={label}
                                                        menuRef={this.saveMenuRef}
                                                    >

                                                    <Flexbox flexDirection="row" justifyContent="center" minHeight="3vh">
                                                        <FacebookShareButton  className='btn-icon'
                                                            url={shareUrl}
                                                            quote={title}
                                                            className="Demo__some-network__share-button">
                                                            <FacebookIcon
                                                                size={32}
                                                                round />
                                                        </FacebookShareButton>

                                                        <TwitterShareButton
                                                            url={shareUrl}
                                                            title={title}
                                                            className="Demo__some-network__share-button">
                                                            <TwitterIcon
                                                                size={32}
                                                                round />
                                                        </TwitterShareButton>

                                                        <TelegramShareButton
                                                            url={shareUrl}
                                                            title={title}
                                                            className="Demo__some-network__share-button">
                                                            <TelegramIcon size={32} round />
                                                        </TelegramShareButton>

                                                        <WhatsappShareButton
                                                            url={shareUrl}
                                                            title={title}
                                                            separator=":: "
                                                            className="Demo__some-network__share-button">
                                                            <WhatsappIcon size={32} round />
                                                        </WhatsappShareButton>
                                                    </Flexbox>

                                                    </MenuButton>



                                                  {/* <Button bsStyle='red' className='btn-icon' onlyOnHover>
                                                        <Icon glyph='icon-fontello-docs' />
                                                    </Button>{' '}
                                                    <Button bsStyle='orange75' className='btn-icon' onlyOnHover>
                                                        <Icon glyph='icon-fontello-print' />
                                                    </Button>
                                                    */}
                                                </div>
                                            </PanelBody>
                                        </PanelContainer>

                                        <PanelContainer controls={false}>
                                            <PanelBody style={{ paddingBottom: 12.5 }}>
                                                <Grid>
                                                    <Row>
                                                        <Col xs={12} className='text-center'>
                                                            <div className='text-uppercase text-left blog-sidebar-heading'>
                                                                <small>Entities</small>
                                                            </div>
                                                            {entities}
                                                        </Col>
                                                    </Row>
                                                </Grid>
                                            </PanelBody>
                                        </PanelContainer>
                                    </Col>
                                </Row>
                            </Grid>
                        </PanelRight>
                    </Panel>
                </PanelContainer>
            </Grid>
        );
    }
}

export default Report;