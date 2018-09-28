import React from 'react'
import Link from 'gatsby-link'

import Layout from '../components/layout'
import HomeSvgAnimation from '../components/HomeSvgAnimation'
import CountDown from '../components/CountDown'

const IndexPage = () => (
  <Layout>
    <div style={{display:'flex', flexDirection: 'column', height: '100vh', justifyContent: 'center', alignItems: 'center'}}>
      <HomeSvgAnimation />
      <div>
        <div style={{display:'flex', flexDirection:'column', justifyContent: 'space-between'}}>
          <div><CountDown /></div>
          <div><Link to="/page-2/"><button className="btn btn-primary">Go to page 2</button></Link></div>
        </div>
      </div>
    </div>    
  </Layout>
)

export default IndexPage
