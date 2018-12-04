import React from 'react';
import { VerticalTimeline, VerticalTimelineElement}  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Skyline from './flag.png';
import { Link } from 'gatsby';
import _ from 'lodash';
//import _ from 'gatsby-plugin-lodash';

const Timeline = (props) => {

        // console.log("_", _);

        const orderedBlogPosts = _.sortBy(props.data, ['node.order']);
        console.log("orderedBlogPosts", orderedBlogPosts);

        // _.chunk(['a', 'b', 'c', 'd'], 2);

    
    return (
        <div>
          <VerticalTimeline>
                    { props.data.map((edge) => {
                        return (
                            <VerticalTimelineElement
                            key={edge.node.slug}
                            className="vertical-timeline-element--work"
                            date={"2018 - present"}
                            iconStyle={{ background: '#E3F4F7', color: '#fff' }}
                            icon={<img src={`https:${edge.node.icon.file.url}`}></img>}
                            style={{justifyContent: 'space-between'}}
                            >
                            <div>
                                <h3 style={{fontFamily: 'Advent Pro'}} className="vertical-timeline-element-title">{edge.node.title}</h3>
                                <h4 style={{fontFamily: 'Advent Pro'}} className="vertical-timeline-element-subtitle"></h4>
                                <p>
                                    {edge.node.content}
                                </p>
                                <Link to={`/blog/${edge.node.slug}`}><button id="readmore" style={{marginTop: '10pt'}} className="btn btn-primary">Read more</button></Link>
                            </div>  
                            </VerticalTimelineElement>
                        )
                    })}
              <VerticalTimelineElement
                  iconStyle={{ background: '#E3F4F7', color: '#fff' }}
                  icon={<img src={Skyline}></img>}
              />
          </VerticalTimeline>
      
        </div>
      )
}

export default Timeline
