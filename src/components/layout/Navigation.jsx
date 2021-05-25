import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {

	return (    
        <>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<a className="navbar-brand" href="http://localhost:3000">React</a>

				<div className="collapse navbar-collapse" id="navbarTogglerDemo03">
					<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
						<li className="nav-item">
							<NavLink className="nav-link" exact to="/">Home</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" exact to="/toggle">Toggle</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" exact to="/login">Login</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" exact to="/from">Form</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" exact to="/onchange">Onchange</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" exact to="/fragments">Fragments</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" exact to="/lazyloading">LazyLoading</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" exact to="/withoutjsx">WithoutJSX</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" exact to="/props">Props</NavLink>
						</li>						
						<li className="nav-item">
							<NavLink className="nav-link" exact to="/createref">CreateRef</NavLink>
						</li>						
						<li className="nav-item">
							<NavLink className="nav-link" exact to="/purecomponent">PureComponent</NavLink>
						</li>						
						<li className="nav-item">
							<NavLink className="nav-link" exact to="/suspense">Suspense</NavLink>
						</li>						
						<li className="nav-item">
							<NavLink className="nav-link" exact to="/hoc">HOC</NavLink>
						</li>						
						<li className="nav-item">
							<NavLink className="nav-link" exact to="/sdctpc">SDCTPC</NavLink>
						</li>
					</ul>
				</div>
			</nav>
        </>
    );
}

export default Navigation;