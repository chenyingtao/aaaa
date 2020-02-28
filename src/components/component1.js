import React from 'react'

import '../App.css';
class Compont1 extends React.Component {
	constructor(props) {
		super(props);
		this.onSetx = this.onSetx.bind(this)

	}
	onSetx() {
		if (this.props.shouli - this.props.songli > 0) {
			return true
		} else {
			return false
		}
	}
	render() {
		return (<div className="compont1">
							<div>
								<div>{this.props.li1}</div>
								<div>{this.props.shouli}</div>
							</div>
							<div style={{borderRadius:'50%',background:this.props.colors,height:'2.5rem',width:'2.5rem !important'}}>
								<div>{this.props.li2}</div>
								<div>{this.props.shouli-this.props.songli}</div>
							</div>
							<div>
								<div>{this.props.li3}</div>
								<div>{this.props.songli}</div>
							</div>
					   </div>)
	}
}
export default Compont1