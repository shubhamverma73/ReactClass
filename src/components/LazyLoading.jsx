import React, {Suspense, lazy} from 'react';
import LazyLoadingB from './lazy/LazyLoadingB';

const LazyLoadingA = lazy(() => import('./lazy/LazyLoadingA'));
const LazyLoadingC = lazy(() => import('./lazy/LazyLoadingC'));

class LazyLoading extends React.Component {

    render() {
        return (
            <>
            <h1>Hello from Lazy Load</h1>
            <Suspense fallback={<div>Please wati for component A ...</div>}>
                <LazyLoadingA />
            </Suspense>
            <LazyLoadingB />
            <Suspense fallback={<div>Please wati for component C ...</div>}>
                <LazyLoadingC />
            </Suspense>
            </>
        );
    }
}

export default LazyLoading;