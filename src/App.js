import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Switch } from "react-router-dom";
import Navigation from './components/layout/Navigation';
import Home from './components/Home';
import Toggle from './components/Toggle';
import LoginControl from './components/LoginControl';
import NameForm from './components/NameForm';
import Onchange from './components/Onchange';
import Fragments from './components/Fragments';
import LazyLoading from './components/LazyLoading';
import WithoutJSX from './components/WithoutJSX';
import Props from './components/Props';
import CreateRef from './components/CreateRef';
import PureComponent from './components/PureComp';
import Suspense from './components/ProfilePage';
import HOC from './components/HOC';
import SDCTPC from './components/SDCTPC';

function App() {
	return (
		<>
			<Navigation />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/toggle" component={Toggle} />
				<Route exact path="/login" component={LoginControl} />
				<Route exact path="/from" component={NameForm} />
				<Route exact path="/onchange" component={Onchange} />
				<Route exact path="/fragments" component={Fragments} />
				<Route exact path="/lazyloading" component={LazyLoading} />
				<Route exact path="/withoutjsx" component={WithoutJSX} />
				<Route exact path="/props" component={Props} />
				<Route exact path="/createref" component={CreateRef} />
				<Route exact path="/purecomponent" component={PureComponent} />
				<Route exact path="/suspense" component={Suspense} />
				<Route exact path="/hoc" component={HOC} />
				<Route exact path="/sdctpc" component={SDCTPC} />
			</Switch>
		</>
	);
}

export default App;
