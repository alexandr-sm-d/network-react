import React from 'react';
import style from './News.module.css'

const News = () => {
    return (
        <div className={style.n}>
            <h4>
                News today:
            </h4>
            <ol>
                <li>Санек взялся за голову.</li>
                <li>Вован переехал в Питер.</li>
            </ol>
        </div>
    )
}

export default News;