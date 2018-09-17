import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Background from '../chicago-bg.jpeg'

import Navbar from './Navbar'
import './layout.css'
import './main.scss'

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div
        style={{
          backgroundImage: `url(${Background})`,
          height: "100vh",
          backgroundRepeat: "no-repeat center center fixed",
          backgroundSize: 'cover'
          // display: 'flex',
          // flexDirection: 'column'
        }}
      >
        {/* <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'React developer' },
            {
              name: 'keywords',
              content:
                'Chicago',
            },
          ]}
        /> */}
        {/* <Navbar siteTitle={data.site.siteMetadata.title} /> */}
        <div>
          {children}
        </div>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
