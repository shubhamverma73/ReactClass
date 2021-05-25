import React, { useState } from 'react';

function HOC() {
	return (
		<div>
			<h1>HOC </h1>
			<HOCRed cmp={Counter} />
			<HOCGreen cmp={Counter} />
			<HOCBlue cmp={Counter} />
		</div>
	);
}
function HOCRed(props) {
	return <div style={{ backgroundColor: 'red', width: 100 }}>Red<props.cmp /></div>
}
function HOCGreen(props) {
	return <div style={{ backgroundColor: 'green', width: 100 }}>Grren<props.cmp /></div>
}
function HOCBlue(props) {
	return <div style={{ backgroundColor: 'blue', width: 100 }}>blue <props.cmp /></div>
}
function Counter() {
	const [count, setCount] = useState(0)
	return <div>
		<h3>{count}</h3>
		<button type="button" onClick={() => setCount(count + 1)}>Update</button>
	</div>
}

export default HOC;

/*
A higher-order component (HOC) is an advanced technique in React for reusing component logic.
HOCs are not part of the React API, per se. They are a pattern that emerges from React’s compositional nature.

Concretely, a higher-order component is a function that takes a component and returns a new component.
*/