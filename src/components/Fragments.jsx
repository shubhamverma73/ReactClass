import React from 'react';

class Fragments extends React.Component {
    render() {
        return (
            <>
                Some text.
                <h2>A heading</h2>
                    More text.
                <h2>Another heading</h2>
                    Even more text.
            </>
        );
    }
}


export default Fragments;