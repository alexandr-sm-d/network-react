import React from 'react';
import Counter from './Counter';
import Dialog from './Dialog';
import Pages from './Pages';

const Dev = props => {

    return (
        <div>
            <h1>Developer window</h1>
            <Dialog />
            {/* <Counter /> */}
            <Pages />
        </div>
    )
}

export default Dev