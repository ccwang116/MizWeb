import React,{useRef, useEffect, useState} from 'react';
import classes from './style.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(classes);
//放大 上升 換色
function ScrollAnime() {
    // const contentBox = useRef();
    // const [topnumber,setTopNumber]= useState(0)
    function calcWH() {
    const offset = { 
                    top: window.scrollY, 
                    left: window.scrollX, 
                };
    console.log(offset);
    }
    useEffect(() => {
        window.addEventListener("scroll",()=>calcWH());
    },);
    
    return(
        <>
        <div className={cx('building')} id="scrollCapture" data-amime="5s">
            <div className={cx('alphabet')}>
                
            </div>
        </div>
        
        <div className={cx('street')}>
            <div className={cx('fly')}>
                the words are flying
            </div>
        </div>
        <div className={cx('bus')} id="bus" >
            
            </div>
        </>
    )
}

export default ScrollAnime;