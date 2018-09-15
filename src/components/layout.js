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
      }}
      >
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'React developer' },
            {
              name: 'keywords',
              content:
                'Chicago',
            },
          ]}
        />
        <Navbar siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
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
