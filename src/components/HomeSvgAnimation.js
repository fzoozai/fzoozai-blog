import React, { Component } from 'react'
import ReactVivus from 'react-vivus'
import svg from '../test.svg'

class HomeSvgAnimation extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div
        style={{
        }}
      >
        <ReactVivus
          id="foo"
          option={{
            file: svg,
            animTimingFunction: 'EASE',
            type: 'oneByOne',
            start: "autostart",
            onReady: console.log,
            duration: 1000
          }}
          style={{
          }}
          callback={console.log}
        />
      </div>
    )
  }
}

export default HomeSvgAnimation
