import React from 'react';
import classesStyle from './Paginator.module.css';

const Paginator = (props) => {

    let pagesCount = Math.ceil(props.totalCountUsers / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
            <div className={classesStyle.toggle_page}>
                {pages.map((p) => {
                    return <span
                        className={props.currentPage === p && classesStyle.selected}
                        onClick={() => props.onPageChanged(p)}>{p}</span>
                })}
            </div>            
    )
}


export default Paginator;