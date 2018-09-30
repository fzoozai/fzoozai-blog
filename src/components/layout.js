import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Background from '../chicago-bg.jpeg'

import Navbar from './Navbar'
import './layout.css'
import './main.scss'

import { elastic as Menu } from 'react-burger-menu'

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

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
          // backgroundImage: `url(${Background})`,
          // height: "100vh",
          // backgroundRepeat: "no-repeat center center fixed",
          // backgroundSize: 'cover'
          // display: 'flex',
          // flexDirection: 'column'
        }}
      >
      <Menu styles={ styles }>
        <nav style={{display:'flex', flexDirection:'column'}}>
          <a id="about" className="bm-item" href="/about">About Me</a>
          <a id="contact" className="bm-item" href="/contact">Blog</a>
          <a className="bm-item--small" href="">Contact</a>
          <a id="home" className="bm-item" href="/">World Horizon</a>
        </nav>
      </Menu>
      <main id="page-wrap">
          <div>
            {children}
          </div>
      </main>
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
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
