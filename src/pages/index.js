import React from 'react'
import Link from 'gatsby-link'

import Layout from '../components/layout'
import HomeSvgAnimation from '../components/HomeSvgAnimation'
import Timeline from '../components/Timeline'
import CountDown from '../components/CountDown'
import Image from '../yosemite.jpeg'
import BackgroundVideo from '../chicago.mp4'
import Background from '../chicago-bg.jpeg'


const IndexPage = () => (
  <Layout>
    <div>
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

       <div style={{display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <HomeSvgAnimation />
        <div>
          <div style={{display:'flex', flexDirection:'column', justifyContent: 'space-between'}}>
            <div><CountDown /></div>
            <div><Link to="/page-2/"><button className="btn btn-primary">Go to page 2</button></Link></div>
          </div>
        </div>
        </div>
      </div>

      <Timeline />

      

      {/* <video className='videoTag' autoPlay loop muted>
          <source src={BackgroundVideo} type='video/mp4' />
      </video> */}
    </div>    
  </Layout>
)

export default IndexPage
