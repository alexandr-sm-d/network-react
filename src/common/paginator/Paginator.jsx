import React, {useState} from 'react';
import style from './Paginator.module.css';

const Paginator = (props) => {

    let valueOfDisabledForButtonBack = false
    let valueOfDisabledForButtonNext = false

    let pagesCount = Math.ceil(props.totalCountUsers / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const [leftBorderPage, setLeftBorderPage] = useState(1)
    const [rightBorderPage, setRightBorderPage] = useState(10)

    const next = () => {
        setLeftBorderPage(leftBorderPage + 10);
        setRightBorderPage(rightBorderPage + 10);
    }

    const back = () => {
        setLeftBorderPage(leftBorderPage - 10);
        setRightBorderPage(rightBorderPage - 10);
    }

    if (leftBorderPage == 1) {
        valueOfDisabledForButtonBack = true
    } else if (rightBorderPage > pagesCount) {
        valueOfDisabledForButtonNext = true
    }

    return (
        <div className={style.toggle_page}>
            <button onClick={back}
                    className={style.buttons}
                    disabled={valueOfDisabledForButtonBack}
            >back
            </button>

            {pages
                .filter(page => page >= leftBorderPage && page <= rightBorderPage)
                .map((p) => {
                    return <span
                        className={ props.currentPage === p && style.selected}
                        onClick={() => props.onPageChanged(p)}>{p}</span>
                })}

            <button onClick={next}
                    className={style.buttons}
                    disabled={valueOfDisabledForButtonNext}>
                next
            </button>
        </div>
    )
}


export default Paginator;