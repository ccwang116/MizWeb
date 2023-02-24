import React from "react";

function Home(props) {
  //console.log(props)

  return (
    <main className="d-flex justify-content-center">
      <section className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">Welcome</h1>
          <p className="lead text-muted">Explore more</p>
          <p>
            <a href="/quiz" className="btn btn-primary my-2">
              Move to quiz
            </a>
            {/* <a href="#" className="btn btn-secondary my-2">
              Secondary action
            </a> */}
          </p>
        </div>
      </section>
    </main>
  );
}

export default Home;
