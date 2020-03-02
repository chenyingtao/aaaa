import React from 'react';
import '../App.css';
import {
	connect
} from 'react-redux'

class jiahao extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div>
			<div>
				+
			</div>
		)
	}
}
var mapStateToProps = function(state) {
	return {
		todos: state
	}
}
export default connect(mapStateToProps)(jiahao);