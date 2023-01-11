import React from "react";

function Home(props) {
  //console.log(props)

  return (
    <main className="d-flex justify-content-center">
      <section class="jumbotron text-center">
        <div class="container">
          <h1 class="jumbotron-heading">Welcome</h1>
          <p class="lead text-muted">Explore more</p>
          <p>
            <a href="/quiz" class="btn btn-primary my-2">
              Move to quiz
            </a>
            {/* <a href="#" class="btn btn-secondary my-2">
              Secondary action
            </a> */}
          </p>
        </div>
      </section>
    </main>
  );
}

export default Home;
