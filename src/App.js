import React from 'react';
import './App.css';
import {
	HashRouter,
	Route,
	NavLink,
	Switch
} from 'react-router-dom'
import {
	connect
} from 'react-redux'
import Index from './router-components/index'
import Router1 from './router-components/router1'
import Router2 from './router-components/router2'
import Router3 from './router-components/router3'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			info: ''
		}
	}
	render() {
		return (
			<HashRouter>
    <div  className="box">
		<Switch>
		  <Route exact strict path="/" component={Index}>
		  </Route>
		  <Route exact strict path="/router1" component={Router1}>	
		  </Route>
		  <Route exact strict path="/router2" component={Router2}>
		  </Route>
		  <Route exact strict path="/router3" component={Router3}>
		  </Route>
		  <Route exact strict path="/jiahao" component={Inputer}>
		  </Route>
		  <Route>
			  404页面！
		  </Route>
		</Switch>
    </div>
    <div className="nav">
		<NavLink to="/" >首页</NavLink>
		<NavLink to="/router1">礼账</NavLink>
		<NavLink to="/jiahao">+</NavLink>
		<NavLink to="/router2">礼事</NavLink>
		<NavLink to="/router3">我的</NavLink>
	</div>
    </HashRouter>
		)
	}
}


export default connect(mapStateToProps)(App);
