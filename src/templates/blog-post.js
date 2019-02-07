import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Background from '../blog-bg.jpg'
import SimpleSlider from '../components/SimpleSlider'

class BlogPost extends Component {
  render() {
    const { title, content, body, slug, slide } = this.props.data.contentfulBlog

    console.log("slide",slide);
    // console.log("slide", slide.file.url);
    return (
      <div className="container" >
        <h1 style={{fontFamily: 'Advent Pro'}}>{title}</h1>
        <SimpleSlider slide={slide} />
        <p style={{marginTop:"10px", marginLeft:"15px"}}>{body.body}</p>
      </div>
    )
  }
}

BlogPost.propTypes = {
  data: PropTypes.object.isRequired,
}

export default BlogPost

export const pageQuery = graphql`
  query blogPostQuery($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      title
      slug
      content
      body {
        body
      }
      slide {
        title
        file {
          fileName
          url
        }
      }
    }
  }
`
