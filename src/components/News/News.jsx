import React from 'react';
import classesStyle from './News.module.css'

const News = () => {
    return (
        <div className={classesStyle.n}>
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