import React from "react";

function Quickstart() {
  return (
    <div className="container-fluid bg-dark pt-5">
      <div className="container mb-5  bg-dark text-white">
        <h1 className=" fw-bold fs-1">SET UP</h1>
        <h2 className="pt-5 pb-3 border-top">INSTALL USING YARN, NPM, BOWER</h2>
        <div className="row">
          <div
            style={{ backgroundColor: "#343a46" }}
            className=" rounded-3 col-md-12"
          >
            <p className="fw-bold">
              yarn <span style={{ color: "#6679cc" }}> add </span> MAT
            </p>
          </div>
          <div
            style={{ backgroundColor: "#343a46" }}
            className="mt-3 rounded-3 col-md-12"
          >
            <p className=" fw-bold">
              npm <span style={{ color: "#6679cc" }}> install </span> MAT --save
            </p>
          </div>
          <div
            style={{ backgroundColor: "#343a46" }}
            className="mt-3 rounded-3 col-md-12"
          >
            <p className=" fw-bold">
              bower <span style={{ color: "#6679cc" }}> install </span> MAT
              --save
            </p>
          </div>
        </div>
      </div>
      {/* not full */}
      <div className="container border-top py-5 bg-dark text-white">
        <h2 className="pb-3">CDN SOURCES</h2>
        <div className="row">
          <div className="col-md-12">
            <p className="">CSS</p>
            <p
              className="rounded-3 py-3"
              style={{ backgroundColor: "#343a46" }}
            >
              <code className="text-white ps-3">
                &lt;link href=&quot;https://pkg.com/MAT@2.3.1/dist/MAT.css&quot;
                rel=&quot;stylesheet&quot;&gt;
              </code>
            </p>
          </div>
          <div className="col-md-12">
            <p className="">JS</p>
            <p
              className="rounded-3 py-3"
              style={{ backgroundColor: "#343a46" }}
            >
              <code className="text-white ps-3 ">
                &lt;script
                src=&quot;https://pkg.com/MAT@2.3.1/dist/MAT.js&quot;&gt;&lt;/script&gt;
              </code>
            </p>{" "}
          </div>
        </div>
      </div>

      <div className="container border-top  py-5 bg-dark text-white">
        <h2 className=" pb-3">INITIALIZE MAT</h2>
        <div className="row">
          <div className="col-md-12">
            <p
              className="rounded-3 py-3"
              style={{ backgroundColor: "#343a46" }}
            >
              <code className="text-white ps-3 ">
                &lt;script&gt; MAT.init(); &lt;/script&gt;
              </code>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quickstart;
