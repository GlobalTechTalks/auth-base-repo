import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Granim from 'react-granim'

import { Signup, Signin } from './Modules'
import './Assets/scss/index.scss'

function App() {
  return (
	<>  
		<Granim id="granim"></Granim>	
	  	<Router>
	  		<Switch>
				<Route path='/register'>
					<Signup />
				</Route>

				<Route path='/'>
					<Signin />
				</Route>
	  		</Switch>
	  	</Router>
	</>
  );
}

export default App;
