import React, {PureComponent} from 'react';

class PureComp extends React.PureComponent { //React.PureComponent will render only once if updated value are same 

    constructor() {
        super();
        this.state = {
            data: 10
        }
    }
      
    render(props) {
        console.log(this.state); // On React.Component it will render again and again on each button click
        return (
            <div>
                <h1>Pure component {this.state.data} </h1>
                <button onClick={() => {this.setState({data: 20})}}>Update Value</button>
            </div>
        ); //For + 1 this.state.data +1
    }    
}

/*
If your React component’s render() function renders the same result given the same props and state,
you can use React.PureComponent for a performance boost in some cases.
*/

export default PureComp;