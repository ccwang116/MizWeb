import React, { useState } from "react";
import { Card, CardDeck } from "react-bootstrap";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Poker() {
  const [field, setField] = useState(
    "3\nqd 8d 5C 2H 9c 6c 9h 4d 6h AD 7S qh 3c 5S 5H 3D 7C 6d 3h 4s ks as 4C JD TH 9d kd ac TD KC AH 2S 2C TC KH QS 9s js ts 6s"
  );
  const [result, setResult] = useState("Result here");

  const handleSubmit = (e) => {
    e.preventDefault();
    const pokerMap = {
      A: 1,
      J: 10,
      Q: 10,
      K: 10,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      T: 10,
    };
    const arr = field.split("\n");
    const peopleCount = +arr[0];
    const cards = arr[1].split(" ");
    const numberCards = cards.map((e) => pokerMap[e.slice(0, 1).toUpperCase()]);
    console.log(numberCards);
    let count = {};
    for (let i = 0; i < peopleCount; i++) {
      count[i] = 0;
    }
    let rounds = 0;
    while (rounds < numberCards.length) {
      for (let i = 0; i < peopleCount; i++) {
        count[i] += numberCards[rounds + i] ? numberCards[rounds + i] : 0;
        if (count[i] > 21) {
          setResult(`p${i + 1} ${Math.floor(rounds / peopleCount) + 1}`);
          return;
        }
      }
      rounds = rounds + peopleCount;
    }
    console.log(count);
  };
  return (
    <div className="mt-5 text-center d-flex align-items-center flex-column">
      <h5>Poker question</h5>
      <Form onSubmit={handleSubmit} className="w-50 mb-5">
        <Card className="mb-5">
          <Card.Header>
            <Card.Title>Input</Card.Title>
          </Card.Header>
          <Card.Body>
            <Form.Group controlId="formGridText">
              {/* <Form.Label>input</Form.Label> */}
              <Form.Control
                type="text"
                name="input"
                placeholder="Enter input"
                value={field}
                onChange={(e) => setField(e.target.value)}
                as="textarea"
                style={{ minHeight: "90px" }}
              />
            </Form.Group>
          </Card.Body>
        </Card>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Card className="w-50 mb-5">
        <Card.Header>
          <Card.Title>Answer</Card.Title>
        </Card.Header>
        <Card.Body>{result}</Card.Body>
      </Card>
    </div>
  );
}

export default Poker;

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
