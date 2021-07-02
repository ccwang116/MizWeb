import React, { useState } from "react";
import { Navbar, Card, InputGroup, Button, FormControl } from "react-bootstrap";
import PlusMinusBtn from "../components/PlusMinusBtn";
function SongCh() {
  const [fields, setFields] = useState({});
  const [total, setTotal] = useState(0);
  const [ship, setShip] = useState(0);
  const infoList = [
    {
      title: "雞翅",
      description: "",
      price: 100,
      id: "g001",
    },
    {
      title: "雞脖子",
      description: "",
      price: 50,
      id: "g001",
    },
  ];
  const productsList = infoList.map((ele, idx) => ({
    ...ele,
    label: "prod" + idx,
  }));
  const handleFields = (e, label, pri) => {
    let temp = fields;
    temp[label] = {};
    temp[label]["amount"] = e;
    temp[label]["price"] = pri;
    setFields(temp);

    //move to somewhere
    calculateTotal(temp);
  };
  const calculateTotal = (obj) => {
    let res = 0;
    Object.values(obj).map((ele) => {
      res += ele.amount * ele.price;
    });

    setTotal(res + calculateShip());
  };
  const calculateShip = () => {
    setShip(100);
    return 100;
  };

  return (
    <>
      <div className="container justify-content-center w-100">
        <h5 className="justify-content-center w-100 text-center bg-light py-4">
          松村滷味訂購內容
        </h5>
      </div>
      {productsList.map((e) => (
        <Card className="w-100" bg="light" border="light">
          <Card.Body>
            <Card.Title>{e.title}</Card.Title>
            {/* <Card.Text>(包)</Card.Text> */}
            <div className="d-flex justify-content-between w-100">
              <span className="text-muted">${e.price}</span>
              <PlusMinusBtn
                prodLabel={e.label}
                price={e.price}
                onChange={handleFields}
              />
            </div>
          </Card.Body>
        </Card>
      ))}
      <Navbar className="footer mt-auto py-3 bg-light" fixed="bottom">
        <div className="container align-items-end">
          <div>
            <div className="text-muted">運費:${ship}</div>
            <span className="text-muted">TOTAL</span>
            <h3>${total}</h3>
          </div>
          <Button className="mb-2" variant="primary">
            分享
          </Button>
        </div>
      </Navbar>
    </>
  );
}

export default SongCh;
