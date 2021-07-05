import React, { useState } from "react";
import { Navbar, Card, Modal, Button, FormControl } from "react-bootstrap";
import PlusMinusBtn from "../components/PlusMinusBtn";
function PopButton() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} size="sm" className="mb-3">
        備註
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="container justify-content-center w-100">
            <h5 className="w-100 text-center bg-light py-4">運費計算方式</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="p-2">
            小箱（10包以下） 運費160元
            <br />
            中箱（11~35包） 運費225元
            <br />
            大箱（35包以上） 運費290元 <br />
            配送的產品金額滿2000元 免運費(優惠)
            <br />
            備註：10包內若有訂全雞、全鴨、太空鴨，其運費最低以中箱計價。需付運費者可將(運費與商品金額)一併匯款
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            關閉
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
function SongCh() {
  const [fields, setFields] = useState({});
  const [total, setTotal] = useState(0);
  const [ship, setShip] = useState(0);
  const [shareWords, setShareWords] = useState(
    encodeURI("Hi , 我想訂購松村滷味")
  );
  const infoList = [
    {
      title: "鴨翅",
      description: "",
      price: 100,
      id: "g001",
    },
    {
      title: "鴨腱(胗)",
      description: "",
      price: 100,
      id: "g001",
    },
    {
      title: "雞翅",
      description: "",
      price: 100,
      id: "g001",
    },
    {
      title: "雞腿",
      description: "",
      price: 100,
      id: "g001",
    },
    {
      title: "翅小腿",
      description: "",
      price: 100,
      id: "g001",
    },
    {
      title: "雞腱(胗)",
      description: "",
      price: 100,
      id: "g001",
    },
    {
      title: "鴨舌頭",
      description: "",
      price: 100,
      id: "g001",
    },
    {
      title: "鴨腳",
      description: "",
      price: 50,
      id: "g001",
    },
    {
      title: "雞腳",
      description: "",
      price: 50,
      id: "g001",
    },
    {
      title: "雞脖子",
      description: "",
      price: 50,
      id: "g001",
    },
    {
      title: "豆干",
      description: "",
      price: 50,
      id: "g001",
    },
    {
      title: "鴨米血",
      description: "",
      price: 60,
      id: "g001",
    },
    {
      title: "百頁豆腐",
      description: "",
      price: 60,
      id: "g001",
    },
    {
      title: "鴨頭",
      description: "",
      price: 30,
      id: "g001",
    },
    {
      title: "滷蛋",
      description: "",
      price: 50,
      id: "g001",
    },
  ];
  const productsList = infoList.map((ele, idx) => ({
    ...ele,
    label: "prod" + idx,
  }));
  const handleFields = (e, data) => {
    let temp = fields;
    temp[data.label] = {};
    temp[data.label]["amount"] = +e;
    temp[data.label]["price"] = data.price;
    temp[data.label]["title"] = data.title;
    setFields(temp);

    //move to somewhere
    calculateTotal(temp);
  };
  const calculateTotal = (obj) => {
    let text = "";
    let res = 0;
    Object.values(obj).map((ele) => {
      res += ele.amount * ele.price;
      if (ele.amount !== 0) {
        text += `${ele.title}要${ele.amount}包、`;
      }
    });
    text += "謝謝。";
    setTotal(res + calculateShip(obj));
    setShareWords(encodeURI(`Hi , 我想訂購松村滷味：${text}`));
  };
  const calculateShip = (obj) => {
    let shipPrice = 0;
    let price = 0;
    let packs = 0;
    Object.values(obj).map((ele) => {
      packs += ele.amount;
      price += ele.amount * ele.price;
    });
    if (price >= 2000 || price === 0) {
      shipPrice = 0;
    } else if (packs >= 36) {
      shipPrice = 290;
    } else if (packs >= 11) {
      shipPrice = 225;
    } else {
      shipPrice = 160;
    }
    setShip(shipPrice);
    return shipPrice;
  };

  return (
    <>
      <div className="container justify-content-center w-100">
        <h5 className="text-center bg-light py-4">松村滷味訂購內容</h5>
      </div>
      {productsList.map((e) => (
        <Card className="w-100" bg="light" border="light">
          <Card.Body>
            <Card.Title>{e.title}</Card.Title>
            {/* <Card.Text>(包)</Card.Text> */}
            <div className="d-flex justify-content-between w-100">
              <span className="text-muted">${e.price}</span>
              <PlusMinusBtn data={e} onChange={handleFields} />
            </div>
          </Card.Body>
        </Card>
      ))}
      <div style={{ height: "121px" }} />
      <Navbar className="footer mt-auto py-3 bg-light" fixed="bottom">
        <div className="container align-items-start">
          <div>
            <div className="text-muted">
              運費:${ship} 金額:${total - ship}
            </div>
            <span className="text-muted">TOTAL</span>
            <h3>${total}</h3>
          </div>
          <div className="d-flex flex-column">
            <PopButton />
            <iframe
              data-lang="zh_Hant"
              data-type="share-a"
              data-ver="3"
              data-url={decodeURI(shareWords)}
              data-color="default"
              data-size="small"
              data-count="false"
              data-line-it-id="0"
              scrolling="no"
              frameborder="0"
              allowtransparency="true"
              className="line-it-button"
              src={`https://social-plugins.line.me/widget/share?url=${shareWords}&amp;buttonType=share-a&amp;size=small&amp;count=false&amp;color=default&amp;lang=zh_Hant&amp;type=share&amp;ver=3&amp;id=0&amp;origin=http%3A%2F%2Flocalhost%3A3006%2Fsongch&amp;title=Miz%20Web`}
              title="Share this page on LINE."
              style={{
                width: "62px",
                height: "20px",
                visibility: "visible",
                position: "static !important",
                opacity: " 1 !important",
              }}
            ></iframe>
          </div>
          {/* <Button className="mb-2" variant="primary">
            分享
          </Button> */}
          {/* 原本的line提供作法，但不會動態更動 */}
          {/* <div
            className="line-it-button"
            data-lang="zh_Hant"
            data-type="share-a"
            data-ver="3"
            data-url={shareWords}
            data-color="default"
            data-size="small"
            data-count="false"
            style="display: none;"
          ></div> */}
          {/* 可以動態更動的作法 */}
        </div>
      </Navbar>
    </>
  );
}

export default SongCh;
