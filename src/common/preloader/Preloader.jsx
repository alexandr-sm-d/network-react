import React from 'react';
import style from './Preloader.module.css';
import preloader from '../../assets/images/preloader.svg'

const Preloader = (props) => {
    return (
        <div className={style.preloader}>
            <img src={preloader}/>
        </div>
    )
}

export default Preloader;