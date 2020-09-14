import React from 'react';
import classes from './style.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(classes);
//放大 上升 換色
function ScrollAnime() {
    return(
        <>
        <div className={cx('building')}>
            <div className={cx('alphabet')}>
                
            </div>
        </div>
        
        <div className={cx('street')}>
            <div className={cx('fly')}>
                the words are flying
            </div>
        </div>
        <div className={cx('bus')}>
            
            </div>
        </>
    )
}

export default ScrollAnime;