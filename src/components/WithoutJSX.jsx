import React from 'react';

class WithoutJSX extends React.Component {    
    render(props) {
        return React.createElement('div', props, `Hello World`);
    }    
}

export default WithoutJSX;