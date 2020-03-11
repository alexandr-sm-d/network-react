import React from 'react';
import classesStyle from './Preloader.module.css';
import preloader from '../../assets/images/preloader.svg'

const Preloader = (props) => {
    return (
        <div className={classesStyle.preloader}>
            <img src={preloader}/>
        </div>
    )
}

export default Preloader;