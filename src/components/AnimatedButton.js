import React from 'react';
import { bounce, bounceInDown} from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import Link from 'gatsby-link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const styles = {
  bounce: {
    animationDuration: '4s',
    animationName: Radium.keyframes(bounceInDown, 'bounceInDown')
  }
}

class Button extends React.Component {
  render() {
      return (
        <StyleRoot>
        <div className="test" style={styles.bounce}>
            <div><Link to="/page-2/"><FontAwesomeIcon icon="angle-double-down" size="5x" color="rgb(245, 245, 245, 0.8)"/></Link></div>
        </div>
        </StyleRoot>
      );
  }
}

export default Button