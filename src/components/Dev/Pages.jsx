import React from 'react';
import classesStyle from './Pages.module.css'

const Pages = props => {

    let n = 187;
    let pages = [];
    for (let i = 1; i < n; i++) {
        pages.push(i)
    }
    let leftBorderPage = 11;
    let rightBorderPage = 20;

    return (
        <div className={classesStyle.pages}>
            {pages
                .filter(page => page >= leftBorderPage && page <= rightBorderPage)
                .map(page => <span className={classesStyle.page}>{page}</span>)}
            <div>
                <button>back</button>
                <button>next</button>
            </div>
        </div>
    )
}

export default Pages;