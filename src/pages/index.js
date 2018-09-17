import React from 'react'
import Link from 'gatsby-link'

import Layout from '../components/layout'
import HomeSvgAnimation from '../components/HomeSvgAnimation'
import CountDown from '../components/CountDown'

const IndexPage = () => (
  <Layout>
    <div style={{display:'flex', flexDirection: 'column', height: '100vh', justifyContent:'center'}}>
      <div style={{flexShrink: 0}}><HomeSvgAnimation /></div>
      <div>
        <div style={{display:'flex', flexDirection:'column', height: '30vh', justifyContent: 'space-between'}}>
          <div><CountDown /></div>
          <div style={{marginLeft: '5pt'}}><Link to="/page-2/"><button className="btn btn-primary">Go to page 2</button></Link></div>
        </div>
        </div>
    </div>    
  </Layout>
)

export default IndexPage
