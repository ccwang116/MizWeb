import React from "react";
import Button from "react-bootstrap/Button";
import Poker from "../../pages/Quiz/Poker";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import WaysToClimb from "../../pages/Quiz/WaysToClimb";
import Division from "../../pages/Quiz/Division";

const QuizLayout = () => {
  const history = useHistory();
  const location = useLocation();
  const routes = [
    {
      path: "1",
      component: Poker,
      exact: true,
      title: "Poker",
    },
    {
      path: "2",
      component: WaysToClimb,
      exact: true,
      title: "WaysToClimb",
    },
    {
      path: "3",
      component: Division,
      exact: true,
      title: "Division",
    },
  ];
  const pathnames = location.pathname.split("/");
  return (
    <>
      <div className="my-3 w-100 d-flex justify-content-center">
        {routes.map((route) => (
          <Button
            variant={pathnames[2] === route.path ? "primary" : "light"}
            onClick={() => history.push(`/quiz/${route.path}`)}
            className="mr-2"
          >
            {route.title}
          </Button>
        ))}
      </div>
      <div className="w-100 d-flex justify-content-center">
        <h5>
          {routes.find((e) => e.path === pathnames[2])?.title ||
            "Please Click One"}
        </h5>
      </div>
      <Switch>
        {routes.map((route, key) => (
          <Route
            key={`route_${key}`}
            path={`/quiz/${route.path}`}
            exact={route.exact}
            render={() => {
              return <route.component />;
            }}
          />
        ))}
      </Switch>
    </>
  );
};

export default QuizLayout;
