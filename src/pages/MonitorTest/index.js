import React, { useEffect, useState, useRef } from "react";
import { Card } from "react-bootstrap";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useLocation } from "react-router-dom";

function MonitorTest() {
  const testScreen = useRef();
  const location = useLocation();

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenId, setFullscreenId] = useState(0);
  const [index, setIndex] = useState(1);
  const [displayList, setDisplayList] = useState([]);

  const buttonList = [
    {
      id: 1,
      title: "Test Pattern",
      bg: "url(https://www.eizo.be/monitor-test/img/testscreen_border.svg)",
    },
    { id: 2, title: "Defective Pixels-Black", bg: "black" },
    { id: 3, title: "Defective Pixels-White", bg: "white" },
    { id: 4, title: "Defective Pixels-Red", bg: "rgb(255,0,0)" },
    { id: 5, title: "Defective Pixels-Green", bg: "rgb(0,255,0)" },
    { id: 6, title: "Defective Pixels-Blue", bg: "rgb(0,0,255)" },
    { id: 7, title: "Uniformity", bg: "rgb(128,128,128)" },
    { id: 8, title: "Color Distances", bg: "none" },
    { id: 9, title: "Gradients", bg: "none" },
    { id: 10, title: "Sharpness", bg: "none" },
    {
      id: 11,
      title: "Viewing Angle",
      bg: "radial-gradient(ellipse at center,rgba(255,255,255,1) 0,rgba(255,255,255,0) 66%)",
    },
    { id: 12, title: "Gamma", bg: "none" },
    { id: 13, title: "Response Time", bg: "none" },
  ];
  const showList = [1, 2, 7, 8, 9];
  const makeFull = (id) => {
    if (testScreen.current) {
      testScreen.current.requestFullscreen();
      setFullscreenId(id);
      if (displayList.findIndex((e) => e === id) !== -1) {
        setIndex(displayList.findIndex((e) => e === id));
      } else {
        setIndex(0);
      }
    }
  };
  const handleUp = () => {
    if (index > 0) {
      setIndex(index - 1);
      setFullscreenId(displayList[index - 1]);
    }
  };
  const handleDown = () => {
    if (index < displayList.length - 1) {
      setIndex(index + 1);
      setFullscreenId(displayList[index + 1]);
    }
  };
  const handleChange = (id, checked) => {
    const defectiveList = [2, 3, 4, 5, 6];
    if (id === 2) {
      if (checked) {
        let newSortList = [...new Set([...displayList, ...defectiveList])];
        setDisplayList(newSortList);
      } else {
        let newList = displayList.filter((e) => !defectiveList.includes(e));
        setDisplayList(newList);
      }
    } else {
      if (checked) {
        let newSortList = [...new Set([...displayList, id])];
        setDisplayList(newSortList);
      } else {
        let newList = displayList.filter((e) => e !== id);
        setDisplayList(newList);
      }
    }
  };
  const handleSelectAll = (checked) => {
    if (checked) {
      setDisplayList(buttonList.map((e) => e.id));
    } else {
      setDisplayList([]);
    }
  };
  function openNewWindow() {
    window.open(
      `http://localhost:3006${location.pathname}`,
      "_blank",
      "toolbar=yes,scrollbars=yes,resizable=yes,top=0,left=0,width=1200,height=600"
    );
  }
  const renderItem = (item) => (
    <div key={item.id} className="col col-md-12 py-md-1 align-items-center">
      <div className="row justify-content-md-between align-items-center">
        <div key={item.id} className="col col-md-2">
          <Button
            variant="link"
            size="sm"
            onClick={() => {
              handleChange(item.id, true);
              makeFull(item.id);
            }}
          >
            <i className="fa-solid fa-circle-play"></i>
          </Button>
        </div>
        <div key={item.id} className="col col-md-auto ">
          <label
            className="form-check-label"
            for={`flexCheckChecked_${item.id}`}
          >
            {item.id === 2 ? "Defective Pixels" : item.title}
          </label>
        </div>
        <div key={item.id} className="d-flex col col-md-2 align-items-center">
          <Form.Check
            type={"checkbox"}
            id={`flexCheckChecked_${item.id}`}
            checked={displayList.some((e) => e === item.id)}
            onChange={(e) => handleChange(item.id, e.target.checked)}
          />
        </div>
      </div>
    </div>
  );
  useEffect(() => {
    handleSelectAll(true);
    function onFullscreenChange() {
      setIsFullscreen(Boolean(document.fullscreenElement));
    }

    document.addEventListener("fullscreenchange", onFullscreenChange);

    return () =>
      document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);
  return (
    <main className="d-flex justify-content-center">
      <section className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">Monitor Test</h1>
          <p className="lead text-muted">
            Choose the test(s) you would like to carry out
          </p>
          <Form>
            <div className="w-50 row justify-content-md-start mx-auto ">
              <div className="col col-md-6 ">
                {buttonList
                  .filter((e) => showList.includes(e.id))
                  .map((item) => renderItem(item))}
              </div>
              <div className="col col-md-6 ">
                {buttonList
                  .slice(9, buttonList.length)
                  .map((item) => renderItem(item))}
                <div className="col col-md-12  text-right d-flex py-md-1 align-self-end justify-content-md-end">
                  <label className="nav-link btn" for={`flexCheckChecked_all`}>
                    <u>
                      {displayList.length === buttonList.length
                        ? "select none"
                        : "select all"}
                    </u>
                  </label>
                  <Form.Check
                    type={"checkbox"}
                    id={`flexCheckChecked_all`}
                    checked={displayList.length === buttonList.length}
                    onChange={(e) => handleSelectAll(e.target.checked)}
                    className={"d-none"}
                  />
                </div>
              </div>
            </div>
          </Form>
          <Button
            className="mr-2"
            variant="outline-primary"
            onClick={() => openNewWindow()}
          >
            Open test on additional monitor
          </Button>
          <Button
            onClick={() => makeFull(displayList[0])}
            disabled={!displayList.length}
          >
            Start test
          </Button>
          <div ref={testScreen}>
            <div
              className={`position-fixed control ${
                isFullscreen ? "d-box" : "d-none"
              }`}
              style={{ left: "60px", bottom: "250px", color: "white" }}
            >
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <ul className="nav flex-column">
                    {displayList.map((num, idx) => (
                      <li
                        className={` ${
                          index === idx && "active"
                        } nav-item dropdown-item`}
                      >
                        {buttonList.find((e) => num === e.id).title}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <Button onClick={handleUp}>
                <i className="fa-solid fa-chevron-up"></i>
              </Button>
              <div>
                {index + 1}/{displayList.length}
              </div>
              <Button onClick={handleDown}>
                <i className="fa-solid fa-chevron-down"></i>
              </Button>
            </div>
            {buttonList.map((test) => (
              <div
                key={test.id}
                className={`testscreen1 ${
                  isFullscreen && fullscreenId === test.id ? "d-box" : "d-none"
                }`}
                style={{
                  background: test.bg,
                  width: "100vw",
                  height: "100vh",
                }}
              >
                <div
                  className="card border-primary mb-3 position-absolute"
                  style={{ maxWidth: "24rem", right: "100px", bottom: "250px" }}
                >
                  <div className="card-body text-primary">
                    <h5 className="card-title">{test.title}</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default MonitorTest;
