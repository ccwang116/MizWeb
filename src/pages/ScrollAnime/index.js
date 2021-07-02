import React, { useRef, useEffect, useState, useCallback } from "react";
import classes from "./style.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(classes);
//放大 上升 換色
function ScrollAnime() {
  // const contentBox = useRef();
  const [topnumber, setTopNumber] = useState(0);

  function callAnime() {
    const offset = {
      top: window.scrollY,
      left: window.scrollX,
    };
    const innHeight = window.innerHeight;
    const flyDOM = document.querySelector("#fly");
    const alphabetDOM = document.querySelector("#alphabet");
    const blackDOM = document.querySelector("#black");
    const redDOM = document.querySelector("#red");

    console.log("A", offset);
    console.log("B", innHeight);
    console.log("C", document.documentElement.scrollHeight);
    function calcInterPercentage(num) {
      return ((offset.top - innHeight * num) / innHeight) * 100;
      //0~100
    }
    //clip 100 是沒有 0是填滿
    if (offset.top > innHeight / 2 && offset.top < innHeight * 2) {
      // setTopNumber(2)
      flyDOM.style.top = `calc((100vh - 150px) / 2 - ${calcInterPercentage(
        0.5
      )}px)`;
      flyDOM.style.opacity = calcInterPercentage(0.5) / 100;
    } else if (offset.top > innHeight * 3 && offset.top < innHeight * 4) {
      // setTopNumber(3)
      alphabetDOM.style.transform = `matrix(${
        calcInterPercentage(3) * 0.1
      }, 0, 0, ${calcInterPercentage(3) * 0.1}, 0, 0)`;
      alphabetDOM.style.opacity = calcInterPercentage(2) / 100;
    } else if (offset.top > innHeight * 3.5 && offset.top < innHeight * 4) {
      blackDOM.style.clipPath = `inset(${
        100 - calcInterPercentage(3)
      }% 0px 0px)`;
      redDOM.style.clipPath = `inset(100% 0px 0px)`;
    } else if (offset.top > innHeight * 4 && offset.top < innHeight * 5) {
      blackDOM.style.clipPath = `inset(0% 0px 0px)`;
      redDOM.style.clipPath = `inset(${100 - calcInterPercentage(4)}% 0px 0px)`;
    } else if (offset.top > innHeight * 5 && offset.top < innHeight * 6) {
      redDOM.style.clipPath = `inset(0% 0px 0px)`;
    } else {
      setTopNumber(0);
    }
  }
  function callAnimeForLoop() {
    const offset = {
      top: window.scrollY,
      left: window.scrollX,
    };
    const innHeight = window.innerHeight;
    console.log("A", offset);
    console.log("B", innHeight);
    console.log("C", document.documentElement.scrollHeight);
    function calcInterPercentage(num) {
      return ((offset.top - innHeight * num) / innHeight) * 100;
      //0~100
    }
    const sectionArr = [
      { secClass: "alphabet", animeName: "addActive" },
      { secClass: "fly", animeName: "addActive" },
      { secClass: "white", animeName: "clipPath" },
      { secClass: "black", animeName: "clipPath" },
      { secClass: "red", animeName: "clipPath" },
    ];
    sectionArr.forEach((val, i) => {
      if (
        offset.top > innHeight * (i + 1) &&
        offset.top < innHeight * (i + 2)
      ) {
        let dotheAnime = () => {};
        switch (val.animeName) {
          case "addActive":
            dotheAnime = () => {
              setTopNumber(i + 2);
            };
            break;
          case "clipPath":
            if (i === sectionArr.length - 1) {
              dotheAnime = () => {
                document.querySelector(
                  `#${val.secClass}`
                ).style.clipPath = `inset(0% 0px 0px)`;
              };
            } else if (i === sectionArr.length - 2) {
              dotheAnime = () => {
                document.querySelector(
                  `#${val.secClass}`
                ).style.clipPath = `inset(0% 0px 0px)`;
                document.querySelector(
                  `#${sectionArr[i + 1].secClass}`
                ).style.clipPath = `inset(${
                  100 - calcInterPercentage(i + 1)
                }% 0px 0px)`;
              };
            } else {
              dotheAnime = () => {
                document.querySelector(
                  `#${val.secClass}`
                ).style.clipPath = `inset(0% 0px 0px)`;
                document.querySelector(
                  `#${sectionArr[i + 1].secClass}`
                ).style.clipPath = `inset(${
                  100 - calcInterPercentage(i + 1)
                }% 0px 0px)`;
                document.querySelector(
                  `#${sectionArr[i + 2].secClass}`
                ).style.clipPath = `inset(100% 0px 0px)`;
              };
            }

            break;
          default:
            break;
        }
        dotheAnime();
      } else {
        setTopNumber(0);
      }
    });
  }
  useEffect(() => {
    window.addEventListener("scroll", () => callAnime());
  });
  const target = useRef(); // 加上動畫的地方
  const observer = useRef(); // 觸發動畫的點
  const triggerElement = useCallback((node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (target) {
        // if (entries[0].isIntersecting) {
        //     target.current.classList.add(cx('start'))
        // }
        console.log(entries);
      }
    });
    if (node) observer.current.observe(node);
  }, []);
  return (
    <>
      <section className={cx("bus")} id="bus"></section>

      <section className={cx("street")} ref={target}>
        <div ref={triggerElement} className={cx("trigger")}></div>
        <div className={cx("fly", { active: topnumber === 2 })} id="fly">
          the words are flying
        </div>
      </section>
      <section className={cx("building")} id="scrollCapture" data-amime="5s">
        <div
          className={cx("alphabet", { active: topnumber === 3 })}
          id="alphabet"
        ></div>
      </section>
      {/* 白色黑色紅色 */}
      {/* set offset.top為某值，然後clippath跟著某值去改變。 */}
      <section className={cx("section section-colors theme-dark")}>
        <section className={cx("white", "bigword", "wipe")} id="white">
          <div className={cx("wipe-content")}>
            <p>有白色</p>
          </div>
        </section>
        <section
          className={cx("black", "bigword", "wipe", {
            active: topnumber === 5,
          })}
          id="black"
        >
          <div className={cx("wipe-content")}>
            <p>有黑色</p>
          </div>
        </section>
        <section
          className={cx("red", "bigword", "wipe", { active: topnumber === 6 })}
          id="red"
        >
          <div className={cx("wipe-content")}>
            <p>也有紅色</p>
          </div>
        </section>
      </section>
      {/* <section>

            </section>
            <section>

            </section> */}
    </>
  );
}

export default ScrollAnime;
