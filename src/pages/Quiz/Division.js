import React, { useState } from "react";
import Quiz from "../../components/Quiz";

function Division() {
  const [field, setField] = useState("");
  const [result, setResult] = useState("Result here");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(result);
  };
  return (
    <>
      <div className="w-50 text-center m-auto">
        問題描述：
        將0~9九個數字分成兩群，每群5個數字。這兩群的數字組合而成兩個5位數的整數（若0在最前
        面，則其中之一會變成4位數，例如02413 ） ＞令這兩個數字分別為n1,
        n2。今給定一個整數N， 若n1/ n2== N，則該組整數n1, n2是我們要的答案之一。
        請將所有符合的數字逐列列舉，其中n1需由小到大列出。若無解答，則請列出"No
        solution for N." <br />
        <b>輸入說明： </b>
        <br />
        輸入為數字N <br />
        <b>輸出說明： </b>
        <br />
        每行包含兩個答案的數字，形如：若n1/ n2== N，數字前綴補0.
        前面的數字n1需由小到大列出
        <table className="table w-50 text-left m-auto">
          <thead className="thead-light">
            <tr>
              <th className="w-50">輸入範例</th>
              <th>輸出範例</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>27</td>
              <td>
                39852/01476 = 27
                <br /> 49572/01836 = 27
                <br /> 69741/02583 = 27 <br /> 96714/03582 = 27
              </td>
            </tr>
            <tr>
              <td>11</td>
              <td>No solutions for 11.</td>
            </tr>
            <tr>
              <td>7</td>
              <td>
                16758/02394 = 7 <br /> 18459/02637 = 7 <br /> 31689/04527 = 7{" "}
                <br /> 36918/05274 = 7<br />
                37926/05418 = 7 <br /> 41832/05976 = 7 <br /> 53298/07614 = 7
                <br /> 98532 / 14076 = 7
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Quiz
        field={field}
        setField={setField}
        result={result}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default Division;

// (1)Sample Input:
// 3
// qd 8d 5C 2H 9c 6c 9h 4d 6h AD 7S qh 3c 5S 5H 3D 7C 6d 3h 4s ks as 4C JD TH 9d kd ac TD KC AH 2S 2C TC KH QS 9s js ts 6s

// Sample Output:
// p1 4

// (2)Sample Input:
// 4
// AC 8s 5h qh KD 6D 6H 4C 7H 2H QC 5D 3C JH 5C TD 7D 7S ts qs 6c tc 4s 4h as js th ah 2C 8D QD KC 7C 2D KS 4D JD 3S 8C 9C

// Sample Output:
// p2 4

// (3)Sample Input:
// 5
// 4c 2s 2c jh qh qd ks 8C 6D 6H 7H 5C 6C 6S KH 8S 4D 8H 2D kd 9c 3s 3D 2H JD TS 4H AD 4s 7d 9d AC ah TH 8D QC 9s 3c jc 7s

// Sample Output:
// p4 3
