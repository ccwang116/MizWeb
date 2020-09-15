import React,{useRef, useEffect, useState} from 'react';
import classes from './style.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(classes);
//放大 上升 換色
function ScrollAnime() {
    // const contentBox = useRef();
    const [topnumber,setTopNumber]= useState(0)
    function calcWH() {
        const offset = { 
                        top: window.scrollY, 
                        left: window.scrollX, 
                    };
        console.log("A",offset);
        console.log("B",window.innerHeight);
        console.log("C",document.documentElement.scrollHeight);
        if(offset.top > 968 / 2 &&offset.top < 968 * 2 ){
            setTopNumber(2)
        }else if(offset.top > 968 * 2 &&offset.top < 968 * 2.5 )
        {
            setTopNumber(3)
        }else if(offset.top > 968 * 3 &&offset.top < 968 * 4 )
        {
            setTopNumber(4)
        }else if(offset.top > 968 * 4 &&offset.top < 968 * 5 )
        {
            setTopNumber(5)
        }else if(offset.top > 968 * 5 &&offset.top < 968 * 6 )
        {
            setTopNumber(6)
        }else{
            setTopNumber(0)
        }

    }
    useEffect(() => {
        window.addEventListener("scroll",()=>calcWH());
    },);
    
    return(
        <>
        <section className={cx('building')} id="scrollCapture" data-amime="5s">
            <div className={cx('alphabet',{'active':topnumber==3})}>
                
            </div>
        </section>
        
        <section className={cx('street')}>
            <div className={cx('fly',{'active':topnumber==2})}>
                the words are flying
            </div>
        </section>
        <section className={cx('bus')} id="bus" >
            
        </section>
        {/* 白色黑色紅色 */}
    {/* set offset.top為某值，然後clippath跟著某值去改變。 */}
        <section className={cx('white','bigword',{'active':topnumber==4})}  >
            <p>有白色</p>
            
        </section>
        <section className={cx('black','bigword',{'active':topnumber==5})}  >
            <p>有黑色</p>
            
        </section>
        <section className={cx('red','bigword',{'active':topnumber==6})}  >
            <p>也有紅色</p>
            
        </section>
        <section>
            
        </section>
        <section>
            
        </section>
        </>
    )
}

export default ScrollAnime;