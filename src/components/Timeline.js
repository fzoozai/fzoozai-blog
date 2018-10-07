import React from 'react';

import { VerticalTimeline, VerticalTimelineElement}  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Skyline from './flag.png';
import Route from './path.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TimelineBg from '../timeline-bg.png';
import { Link } from 'gatsby';

const Timeline = (props) => {
    console.log(props);

    return (
        <div>
    



          <VerticalTimeline>
                    {props.data.map((edge) => {
                        return (
                            <VerticalTimelineElement
                            key={edge.node.slug}
                            className="vertical-timeline-element--work"
                            date={"2018 - present"}
                            iconStyle={{ background: '#E3F4F7', color: '#fff' }}
                            icon={<img src={Skyline}></img>}
                            style={{justifyContent: 'space-between'}}
                            >
                            {/* <h1 key={edge.node.slug}>{edge.node.slug}</h1> */}
                            <div>
                                <h3 style={{fontFamily: 'Advent Pro'}} className="vertical-timeline-element-title">{edge.node.title}</h3>
                                <h4 style={{fontFamily: 'Advent Pro'}} className="vertical-timeline-element-subtitle"></h4>
                                <p>
                                    {edge.node.content}
                                </p>
                                <button id="readmore" style={{marginTop: '10pt'}} className="btn btn-primary">Read more</button>
                            </div>  
                            </VerticalTimelineElement>
                        )
                    })}
      
              {/* <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date={"2011 - present"}
                  iconStyle={{ background: '#E3F4F7', color: '#fff' }}
                  icon={<img src={Skyline}></img>}
                  style={{justifyContent: 'space-between'}}
              >
              <div>
                  <h3 style={{fontFamily: 'Advent Pro'}} className="vertical-timeline-element-title">Departure</h3>
                  <h4 style={{fontFamily: 'Advent Pro'}} className="vertical-timeline-element-subtitle">Stuttgart - Atlanta - Chicago</h4>
                  <p>
                  Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                  </p>
                  <button id="readmore" style={{marginTop: '10pt'}} className="btn btn-primary">Read more</button>
              </div>  
              </VerticalTimelineElement>
              <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="2010 - 2011"
                  iconStyle={{ background: '#E3F4F7', color: '#fff' }}
                  icon={<img src={Skyline}></img>}
              >
              <div>
                  <h3 style={{fontFamily: 'Advent Pro'}} className="vertical-timeline-element-title">Test</h3>
                  <h4 style={{fontFamily: 'Advent Pro'}} className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                  <p>
                  Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                  </p>
                  <button id="readmore" style={{marginTop: '10pt'}} className="btn btn-primary">Read more</button>
              </div>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="2010 - 2011"
                  iconStyle={{ background: '#E3F4F7', color: '#fff' }}
                  icon={<img src={Skyline}></img>}
              >
              <div>
                  <h3 style={{fontFamily: 'Advent Pro'}} className="vertical-timeline-element-title">Art Director</h3>
                  <h4 style={{fontFamily: 'Advent Pro'}} className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                  <p>
                  Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                  </p>
                  <Link to="aboutme"><button id="readmore" style={{marginTop: '10pt'}} className="btn btn-primary">Read more</button></Link>
              </div>
              </VerticalTimelineElement> */}
              <VerticalTimelineElement
                  iconStyle={{ background: '#E3F4F7', color: '#fff' }}
                  icon={<img src={Skyline}></img>}
              />
          </VerticalTimeline>
      
        </div>
      )
}

export default Timeline
