import React, {Component} from 'react';
import PropTypes from 'prop-types';

class BlogPost extends Component {
  render() {
    const {
      title,
      content
    } = this.props.data.contentfulBlog;
    return (
      <div>
        <button className="btn btn-success">Read more</button>          
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    )
  }
}

BlogPost.propTypes = {
  data: PropTypes.object.isRequired
}

export default BlogPost;

export const pageQuery = graphql`
  query blogPostQuery($slug: String!){
    contentfulBlog(slug: {eq: $slug}) { 
      title
      slug
      content
    }
  }
`
