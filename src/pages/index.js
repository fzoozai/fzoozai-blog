import React from 'react'
import Link from 'gatsby-link'

import Layout from '../components/layout'
import HomeSvgAnimation from '../components/HomeSvgAnimation'
import CountDown from '../components/CountDown'

const IndexPage = () => (
  <Layout>
    <HomeSvgAnimation />
    <CountDown />
    <br />
    <Link to="/page-2/"><button className="btn btn-primary">Go to page 2</button></Link>
  </Layout>
)

export default IndexPage
