import React from "react";

function Learn() {
  return (
    <div className="container-fluid py-5 bg-dark text-white">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h1
            data-aos="zoom-in-right"
            data-aos-duration="1500"
            className="fw-bold fs-1 pb-2"
          >
            Start
          </h1>
          <p
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            className="fw-normal lead pb-3"
          >
            Welcome to the MAT documentation! This page will give you an
            introduction to the 80% of MAT concepts that you will use on a daily
            basis.
          </p>
          <div
            style={{ backgroundColor: "#343a46" }}
            className="card rounded-4 text-white shadow-lg  p-3 mb-4"
          >
            <h3 className="fw-bold fs-2 py-2 ps-2">You will learn</h3>
            <ul data-aos="zoom-in-right" data-aos-duration="1500" className=" ">
              <li className="fw-bold">How to apply a big to small animation</li>
              <li className="fw-bold">Big to small by howering</li>
              <li className="fw-bold">
                How can I animate the gradual increase in height
              </li>
              <li className="fw-bold">Height increase by hovering</li>
              <li className="fw-bold">
                How can I create an animation that gradually increases the width
              </li>
              <li className="fw-bold"> width increase by hovering</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h2
            data-aos="zoom-in-right"
            data-aos-duration="1500"
            className="pt-5 pb-2 fw-bold fs-1"
          >
            Applying big to small animation
          </h2>
          <p data-aos="zoom-in" data-aos-duration="1600" className="fs-5 pb-3">
            By using this syntax, anything can start big and then become small,
            and vice versa, in a continuous cycle.
          </p>
          <div className="row">
            <div className="col-md-6">
              <img
                data-aos="zoom-in-up"
                data-aos-duration="1500"
                src="L1.PNG"
                alt="CODE HAI"
                style={{ height: "140px", width: "586px" }}
                className="img-fluid rounded pb-4"
              />
            </div>
            <div className="col-md-6">
              <img
                src="s-to-b.gif"
                alt="OUTPUT HAI"
                style={{ height: "115px", width: "586px" }}
                className="img-fluid rounded "
              />{" "}
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h2 className="pt-5 pb-2 fw-bold fs-1">
            Howering on big to small animation
          </h2>
          <p className="fs-5 pb-3">
            By hovering, anything can start big and then become small, and vice
            versa, in a continuous cycle.
          </p>
          <div className="row">
            <div className="col-md-6">
              <img
                data-aos="zoom-in-right"
                data-aos-duration="1500"
                src="L2.PNG"
                alt="CODE HAI"
                className="img-fluid rounded pb-4"
              />
            </div>
            <div className="col-md-6">
              <img
                src="h-s-to-b.gif"
                alt="OUTPUT HAI"
                style={{ height: "115px", width: "586px" }}
                className="img-fluid rounded  "
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h2 className="pt-5 pb-2 fw-bold fs-1"> Increasing the height</h2>
          <p className="fs-5 pb-3">
            By employing this syntax, objects can initiate at a larger scale and
            subsequently transition to a smaller one, or vice versa, in an
            uninterrupted cycle.
          </p>
          <div className="row">
            <div className="col-md-6">
              <img
                data-aos="zoom-in-right"
                data-aos-duration="1500"
                src="L3.PNG"
                alt="CODE HAI"
                style={{ height: "140px", width: "586px" }}
                className="img-fluid rounded pb-4"
              />
            </div>
            <div className="col-md-6">
              <img
                src="h.gif"
                alt="OUTPUT HAI"
                style={{ height: "115px", width: "586px" }}
                className="img-fluid rounded  "
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h2 className="pt-5 pb-2 fw-bold fs-1">
            {" "}
            Height increase by hovering
          </h2>
          <p className="fs-5 pb-3">
            Through hovering, objects can initiate at a larger scale and
            subsequently transition to a smaller one, or vice versa, in a
            continuous cycle.
          </p>
          <div className="row">
            <div className="col-md-6">
              <img
                data-aos="zoom-in-right"
                data-aos-duration="1500"
                src="L4.PNG"
                alt="CODE HAI"
                style={{ height: "140px", width: "586px" }}
                className="img-fluid rounded pb-4"
              />
            </div>
            <div className="col-md-6">
              <img
                src="h-h.gif"
                alt="OUTPUT HAI"
                style={{ height: "115px", width: "586px" }}
                className="img-fluid rounded  "
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h2 className="pt-5 pb-2 fw-bold fs-1">Increasing the width</h2>
          <p className="fs-5 pb-3">
            By utilizing this syntax, width can begin at a larger scale and then
            transition to a smaller one, and vice versa, in an ongoing cycle.
          </p>
          <div className="row">
            <div className="col-md-6">
              <img
                data-aos="zoom-in-right"
                data-aos-duration="1500"
                src="L5.PNG"
                alt="CODE HAI"
                style={{ height: "140px", width: "586px" }}
                className="img-fluid rounded pb-4"
              />
            </div>
            <div className="col-md-6">
              <img
                src="w.gif"
                alt="OUTPUT HAI"
                style={{ height: "115px", width: "586px" }}
                className="img-fluid rounded  "
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center pb-5">
        <div className="col-lg-8">
          <h2 className="pt-5 pb-2 fw-bold fs-1">
            Hower to Increase the width
          </h2>
          <p className="fs-5 pb-3">
            By employing this syntax, width can initiate at a larger scale and
            subsequently transition to a smaller one, or vice versa, in an
            uninterrupted cycle.
          </p>
          <div className="row">
            <div className="col-md-6">
              <img
                data-aos="zoom-in-right"
                data-aos-duration="1500"
                src="L6.PNG"
                alt="CODE HAI"
                style={{ height: "140px", width: "586px" }}
                className="img-fluid rounded pb-4"
              />
            </div>
            <div className="col-md-6">
              <img
                src="h-w.gif"
                alt="OUTPUT HAI"
                style={{ height: "115px", width: "586px" }}
                className="img-fluid rounded  "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Learn;
