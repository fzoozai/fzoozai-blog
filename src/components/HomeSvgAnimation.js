import React, {Component} from 'react';
import ReactVivus from 'react-vivus';
import svg from '../welcome.svg';

class HomeSvgAnimation extends Component {
    componentDidMount() {
		console.log("I am there");
    }
    render() {
        return (
			<div>
				<ReactVivus
					id="foo"
					option={{
					file: svg,
					animTimingFunction: 'EASE',
					type: 'oneByOne',
					onReady: console.log
					}}
					style={{ height: '100px', width: '100px' }}
					callback={console.log}
				/>
		  	</div>
        )
    }
}

export default HomeSvgAnimation
