import React, { useState } from "react";
import Quiz from "../../components/Quiz";

function WaysToClimb() {
  const [field, setField] = useState("");
  const [result, setResult] = useState("Result here");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(result);
  };
  return (
    <>
      <div className="w-50 text-center m-auto">
        問題描述:
        建中有個習慣，爬樓梯時會一階一階爬，也會一次爬二階，當他遇到樓梯有N階時他有幾種不
        同的爬法來爬完N階， 0小於N小於等於20
        <br />
        <b>輸入說明： </b>
        <br />
        輸入一個N代表樓梯階數 <br />
        <b>輸出說明： </b>
        <br />
        輸出有總共幾種不同的爬法
        <table className="table w-50 text-left m-auto">
          <thead className="thead-light">
            <tr>
              <th className="w-50">輸入範例</th>
              <th>輸出範例</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>5</td>
              <td>8</td>
            </tr>
            <tr>
              <td>10</td>
              <td>89</td>
            </tr>
            <tr>
              <td>20</td>
              <td>10946</td>
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

export default WaysToClimb;

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
