import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Register, Signin } from './Screens'
import './Assets/scss/index.scss'

function App() {
  return (
  	<Router>
  		<Switch>
			<Route path='/register'>
				<Register />
			</Route>

			<Route path='/'>
				<Signin />
			</Route>
  		</Switch>
  	</Router>
  );
}

export default App;
