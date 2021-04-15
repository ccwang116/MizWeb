import React, { useState } from "react";
import _ from "lodash";
function About({ total = 12, variant = "secondary" }) {
  /// for demo temporarily,when {index, setIndex,} is pass from props ,it can be remove
  const [index, setIndex] = useState(1);
  ////

  const handelPlus = () => {
    if (index < total) {
      setIndex(index + 1);
    }
  };
  const handelMinus = () => {
    if (index > 1) {
      setIndex(index - 1);
    }
  };
  const handelFirst = () => {
    setIndex(1);
  };
  const handelLast = () => {
    setIndex(total);
  };
  const onPageChange = (number) => {
    setIndex(number);
  };
  const pages = _.range(1, total + 1); //1~12
  if (total === 1) return null;

  function calcDisplayNumFilter(num) {
    if (index < 4) {
      return num > 0 && num < 6;
    }
    if (index > total - 5) {
      return num > 7 && num < total + 1;
    }
    return num > index - 3 && num < index + 3;
  }
  return (
    <>
      about us
      <button type="button">click</button>
      <h1>This is pagination</h1>
      <h1>The CurrentPage Is</h1>
      <h2 style={{ color: "red" }}>{index}</h2>
      <button variant={variant} onClick={handelFirst}>
        ＜＜
      </button>
      <button variant={variant} onClick={handelMinus}>
        ＜
      </button>
      {/* 顯示第一個 */}
      {index > 1 + 4 && (
        <button
          key={1}
          variant={variant}
          onClick={() => onPageChange(1)}
          active={1 === index}
        >
          {1}
        </button>
      )}
      {/* 顯示點點 */}
      {index > 1 + 4 && <button variant={variant}>...</button>}
      {/* 顯示五個 */}
      {pages
        .filter((num) => calcDisplayNumFilter(num))
        .map((page) => (
          <button
            key={page}
            variant={variant}
            onClick={() => onPageChange(page)}
            active={page === index}
          >
            {page}
          </button>
        ))}
      {/* 顯示點點 */}
      {index < total - 4 && <button variant={variant}>...</button>}
      {/* 顯示最後一個 */}
      {index < total - 4 && (
        <button
          key={total}
          variant={variant}
          onClick={() => onPageChange(total)}
          active={total === index}
        >
          {total}
        </button>
      )}
      <button variant={variant} onClick={handelPlus}>
        ＞
      </button>
      <button variant={variant}>＞＞</button>
    </>
  );
}
export default About;
