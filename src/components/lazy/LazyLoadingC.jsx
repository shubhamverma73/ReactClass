import React from 'react';
import video from './Song.mp4'

class LazyLoadingC extends React.Component {

    render() {
        return (
            <>
                <h1>Component C</h1>
                <video width="400" controls>
                    <source src={video} type="video/mp4"></source>
                </video>                
            </>
        );
    }
}

export default LazyLoadingC;