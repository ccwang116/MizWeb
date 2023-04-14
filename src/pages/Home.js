import React from "react";
import GameLink from "../components/GameLink";

function Home(props) {
  //console.log(props)

  return (
    <main className="d-flex justify-content-center">
      <section className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">Welcome</h1>
          <p className="lead text-muted">Explore more</p>
          <GameLink />
        </div>
      </section>
    </main>
  );
}

export default Home;
