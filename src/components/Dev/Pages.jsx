import React, {useCallback, useState} from 'react';
import style from './Pages.module.css'

const Pages = props => {

    let valueOfDisabledForButtonBack = false
    let valueOfDisabledForButtonNext = false

    let n = 187;
    let pages = [];
    for (let i = 1; i <= n; i++) {
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
    } else if (rightBorderPage > n) {
        valueOfDisabledForButtonNext = true
    }

    return (
        <div className={style.pages}>
            <button onClick={back}
                    className={style.buttons}
                    disabled={valueOfDisabledForButtonBack}
            >back
            </button>
            {pages
                .filter(page => page >= leftBorderPage && page <= rightBorderPage)
                .map(page => {
                    return (<span className={style.page}>{page}</span>)
                })}
            <button onClick={next}
                    className={style.buttons}
                    disabled={valueOfDisabledForButtonNext}
            >next
            </button>
        </div>
    )
}

export default Pages;