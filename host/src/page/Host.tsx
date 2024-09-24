import { useState } from "react";

export default () => {
  return (
    <div className="container mt-3">
      <div className="row">
        <section className="wow fadeInRight" data-wow-delay="0.5s">
          <div className="col-lg-12">
            <h1 className="page-header">Module federation host module </h1>
          </div>
        </section>
        <div className="col-md-4">
          <section className="wow fadeInDown" data-wow-delay="0.5s">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4>
                  <i className="fa fa-fw fa-check"></i> Bootstrap v3.2.0
                </h4>
              </div>
              <div className="panel-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Itaque, optio corporis quae nulla aspernatur in alias at
                  numquam rerum ea excepturi expedita tenetur assumenda
                  voluptatibus eveniet incidunt dicta nostrum quod?
                </p>
                <a href="#" className="btn btn-default">
                  Learn More
                </a>
              </div>
            </div>
          </section>
        </div>

        <div className="col-md-4">
          <section className="wow fadeInDown" data-wow-delay="0.5s">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4>
                  <i className="fa fa-fw fa-gift"></i> Free &amp; Open Source
                </h4>
              </div>
              <div className="panel-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Itaque, optio corporis quae nulla aspernatur in alias at
                  numquam rerum ea excepturi expedita tenetur assumenda
                  voluptatibus eveniet incidunt dicta nostrum quod?
                </p>
                <a href="#" className="btn btn-default">
                  Learn More
                </a>
              </div>
            </div>
          </section>
        </div>

        <div className="col-md-4">
          <section className="wow fadeInDown" data-wow-delay="0.5s">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4>
                  <i className="fa fa-fw fa-compass"></i> Easy to Use
                </h4>
              </div>
              <div className="panel-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Itaque, optio corporis quae nulla aspernatur in alias at
                  numquam rerum ea excepturi expedita tenetur assumenda
                  voluptatibus eveniet incidunt dicta nostrum quod?
                </p>
                <a href="#" className="btn btn-default">
                  Learn More
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12">
          <section className="wow fadeInRight" data-wow-delay="0.5s">
            <h2 className="page-header">Portfolio Heading</h2>
          </section>
        </div>
        {[1, 2, 3, 4, 5, 6].map((_, i) => {
          return (
            <div className="col-md-4 col-sm-6 mb-3">
              <section className="w-100" >
                <img
                  className="w-100"
                  src="http://placehold.it/700x450"
                  alt=""
                />
              </section>
            </div>
          );
        })}
      </div>

      <div className="row">
        <div className="col-lg-12">
          <section className="wow fadeInRight" data-wow-delay="0.5s">
            <h2 className="page-header">Modern Business Features</h2>
          </section>
        </div>
        <div className="col-md-6">
          <section className="wow fadeInDown" data-wow-delay="0.5s">
            <p>The Modern Business template by Start Bootstrap includes:</p>
            <ul>
              <li>
                <strong>Bootstrap v3.2.0</strong>
              </li>
              <li>jQuery v1.11.0</li>
              <li>Font Awesome v4.1.0</li>
              <li>Working PHP contact form with validation</li>
              <li>Unstyled page elements for easy customization</li>
              <li>17 HTML pages</li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Corporis, omnis doloremque non cum id reprehenderit, quisquam
              totam aspernatur tempora minima unde aliquid ea culpa sunt.
              Reiciendis quia dolorum ducimus unde.
            </p>
          </section>
        </div>
        <div className="col-md-6">
          <section className="wow fadeInDown" data-wow-delay="0.5s">
            <img
              className="img-responsive"
              src="http://placehold.it/700x450"
              alt=""
            />
          </section>
        </div>
      </div>

      <hr />

      <div className="well">
        <div className="row">
          <div className="col-md-8">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestias, expedita, saepe, vero rerum deleniti beatae veniam
              harum neque nemo praesentium cum alias asperiores commodi.
            </p>
          </div>
          <div className="col-md-4">
            <a className="btn btn-lg btn-default btn-block" href="#">
              Call to Action
            </a>
          </div>
        </div>
      </div>

      <hr />

      <footer>
        <div className="row">
          <div className="col-lg-12">
            <p>Copyright &copy; Your Website 2014</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
