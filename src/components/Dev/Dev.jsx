import React from 'react';
import Counter from './Counter';
import Dialog from './Dialog';
import Pages from './Pages';
import ChoiseFile from './ChoiseFile';

const Dev = props => {

    return (
        <div>
            <h1>Developer window</h1>
            <Dialog />
            {/* <Counter /> */}
            <Pages />
            <ChoiseFile />
        </div>
    )
}

export default Dev