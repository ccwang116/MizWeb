import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import "./styles.module.scss";
function HouseRent() {
  const badgeStyle = {
    background: "#0dcaf0",
    color: "white",
    marginRight: "5px",
  };

  const contentList = [
    "https://drive.google.com/uc?export=view&id=1eDb-Y3t63pt1E2UWpS5OfGZ7rRp87Vzr",
    "https://drive.google.com/uc?export=view&id=1IhQmebrAofS4NfcgmkY8O1LQV5luPEtB",
    "https://drive.google.com/uc?export=view&id=1c3HQzKW-xUet-jhzHZOm3373kQfajM1B",
    "https://drive.google.com/uc?export=view&id=1nWDogztrXs3uLnolc1E00M-iiaZb30NW",
    "https://drive.google.com/uc?export=view&id=1-tf_v0fN5615D0LBdQVsb8-mTabvORw9",
    "https://drive.google.com/uc?export=view&id=11jWzOPf9koGUF3EVF-HpOsP_HX29umh3",
    "https://drive.google.com/uc?export=view&id=1cQBV7HEeCl-OaMz7q_r6lPXjgZChUnNV",
    "https://drive.google.com/uc?export=view&id=1SwghOmqJjsjxwxU3sD71v7z2vJg6QU8I",
    "https://drive.google.com/uc?export=view&id=1yBhkQx2aeb58_hw6pCq6EULFbJrYDTzZ",
  ];
  return (
    <Container fluid="md">
      <div className="mt-5 row">
        <div className="col-md-6">
          <Carousel>
            {contentList.map((item, idx) => (
              <Carousel.Item key={idx}>
                <img
                  className="d-block w-100"
                  src={item}
                  alt={`slide ${idx}`}
                />
                <Carousel.Caption>
                  {/* <h3>召募室友，採光大雅房，可養貓，可開伙</h3> */}
                  <p>召募室友，採光大雅房，可養貓，可開伙</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="col-md-6">
          {" "}
          <Card>
            <Card.Body>
              <Card.Title>召募室友，採光大雅房，可養貓，可開伙</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                頂溪捷運站，生活機能佳
              </Card.Subtitle>
              <Badge bg="success" style={badgeStyle}>
                #可養貓
              </Badge>
              <Badge bg="success" style={badgeStyle}>
                #室內空間大
              </Badge>
              <Badge bg="success" style={badgeStyle}>
                #採光大雅房
              </Badge>
              <Card.Text>
                室友要搬家了，歡迎願意共同愛護生活空間的室友續租～
                <br />
                【地址】新北市永和區保安路（頂溪捷運站二號出口8分鐘）
                <br />
                【房型】雅房 <br />
                【樓層】3F（透天厝） <br />
                【租金】9500 <br />
                【押金】2個月 <br />
                【額外費用】水電費、天然氣費（室友共同分擔） <br />
                【最短租期】1年 <br />
                【可入住時間】即刻入住 <br />
                【房型介紹】
                <br />
                🍀房內有冷氣、對外窗、衣櫃、有抽屜之床架（單人加大）
                採光佳，附有遮光簾
                <br />
                🍀格局方正，坪數約5坪
                <br />
                🍀只需與一位女室友共用衛浴
                <br />
                【公共設備】
                <br />
                ✨廚房：有瓦斯爐、冰箱、烤箱、餐桌椅、流理臺、櫥櫃
                <br />
                ✨客廳：沙發、電視、鞋櫃、茶几
                <br />
                ✨大陽台：洗衣機、洗手台、寬敞的曬衣空間、曬衣架（竿） <br />
                【環境】
                <br /> 🔸交通方便：無論是Go
                Share、Wemo、Ubike都有，個人機車可停門口
                <br />
                🔸附近有獨立書店、美廉社、7-11、全家便利商店、家樂福
                <br />
                🔸對街就有垃圾車經過 <br />
                🔸旁邊有河濱公園可運動 <br />
                【目前室友】 <br />
                一名女生前端工程師 <br />
                一名女生UIUX設計師
                <br />
                一名男生預計出國留學 一隻胖橘貓 <br />
                【寵物】可貓 <br />
                【備註】 <br />
                1. 限女，單人，上班族 <br />
                2. 禁止吸菸、毒 <br />
                3. 有簡單的生活公約須遵守
              </Card.Text>
              <Card.Link href="tel:+886910691540">
                【聯絡方式】0910691540 李先生
              </Card.Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
}

export default HouseRent;
