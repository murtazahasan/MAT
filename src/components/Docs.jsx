import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Docs.module.css";

function Docs() {
  return (
    <>
      <div className="container-fluid bg-dark py-5">
        <div className=" text-center bg-dark my-5 py-5 text-white">
          <img
            data-aos="zoom-in-right"
            data-aos-duration="1500"
            className="d-block mx-auto mb-4 rounded-circle"
            src="MATf.png"
            alt="LOGO"
            width="132"
            height="82"
          />
          <h1
            data-aos="zoom-in-right"
            data-aos-duration="1000"
            className="display-5 fw-bold text-white"
          >
            My Animaton Tool
          </h1>
          <div className="col-lg-6 mx-auto">
            <p
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="lead mb-4"
            >
              Quickly animate and customize sites with MAT, the world’s most
              popular animation open source toolkit, featuring a wide range of
              dynamic effects and seamless integration with any language model.
              Unleash creativity like never before!.
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              {/* <button
                data-aos="zoom-in-up"
                data-aos-duration="1500"
                type="button"
                className="btn btn-primary rounded-4 btn-lg px-4 gap-3"
              >
                <NavLink
                  style={{ textDecoration: "none" }}
                  className="text-white"
                  to="Learn"
                >
                  Learn
                </NavLink>
              </button> */}
             
             <NavLink
               data-aos="zoom-in"
               data-aos-duration="1500"
                  style={{ textDecoration: "none" }}
                    className="text-white"
                  to="Learn"
                > <button
                type="button"
                className= {`${styles.small} btn btn-primary rounded-4 btn-lg px-4 gap-3 `}
              >  Learn</button>
                 
                </NavLink>

                <NavLink
                data-aos="zoom-in"
                data-aos-duration="1500"
                  style={{ textDecoration: "none" }}
                    className="text-white"
                  to="Quickstart"
                > <button
                type="button"
                className= {`${styles.small} btn btn-outline-secondary rounded-4  btn-lg px-4 `}
              >  Quick start</button>
                 
                </NavLink>
              
            </div>
          </div>
        </div>

        {/*  */}
        {/*  */}

        <div className="px-4 pt-5 my-5  text-center  bg-dark text-white">
          <h1
            data-aos="zoom-in-right"
            data-aos-duration="1500"
            className="display-4 fw-bold text-white pt-5"
          >
            Add animations everywhere
          </h1>
          <div className="col-lg-6 mx-auto">
            <p
              data-aos="zoom-in-left"
              data-aos-duration="1500"
              className="lead mb-4"
            >
              Animations for Every Language: Welcome to Our Diverse Collection.
              Discover a World of Motion: Explore Our Vast Animation Repository.
              From Python to Java, We’ve Got Your Code Covered with Animated
              Magic!.
            </p>
          </div>

          <div className="container">
            <div className="row no-gutters">
              <div className="col-md-6">
                <img
                  className="img-fluid rounded"
                  src="homeimg.PNG"
                  alt="Home Image"
                />
              </div>
              <div className="col-md-6">
                <img
                  className="img-fluid rounded"
                  src="crop.gif"
                  alt="Crop Image"
                />
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        {/*  */}

        <div className="container mb-5  bg-dark text-white">
          <h1
            data-aos="zoom-in-right"
            data-aos-duration="1500"
            className=" fw-bold fs-1"
          >
            SET UP
          </h1>
          <h2
            data-aos="zoom-in-right"
            data-aos-duration="1500"
            className="pt-5 pb-3 border-top"
          >
            INSTALL USING YARN, NPM, BOWER
          </h2>
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
                npm <span style={{ color: "#6679cc" }}> install </span> MAT
                --save
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
          <h2
            data-aos="zoom-in-right"
            data-aos-duration="1500"
            className="pb-3"
          >
            CDN SOURCES
          </h2>
          <div className="row">
            <div className="col-md-12">
              <p className="">CSS</p>
              <p
                className="rounded-3 px-3 py-3"
                style={{ backgroundColor: "#343a46" }}
              >
                <code className="text-white ps-3">
                  <span style={{ color: "#149eca" }}> &lt;link </span>
                  href=&quot;https://pkg.com/MAT@2.3.1/dist/MAT.css&quot;
                  rel=&quot;stylesheet&quot;
                  <span style={{ color: "#149eca" }}>&gt; </span>
                </code>
              </p>
            </div>
            <div className="col-md-12">
              <p className="">JS</p>
              <p
                className="rounded-3 px-3 py-3"
                style={{ backgroundColor: "#343a46" }}
              >
                <code className="text-white ps-3 ">
                  <span style={{ color: "#149eca" }}> &lt;script </span>
                  src=&quot;https://pkg.com/MAT@2.3.1/dist/MAT.js&quot;&gt;
                  <span style={{ color: "#149eca" }}>&lt;/script&gt; </span>
                </code>
              </p>{" "}
            </div>
          </div>
        </div>

        <div className="container border-top  py-5 bg-dark text-white">
          <h2
            data-aos="zoom-in-right"
            data-aos-duration="1500"
            className=" pb-3"
          >
            INITIALIZE MAT
          </h2>
          <div className="row">
            <div className="col-md-12">
              <p
                className="rounded-3 py-3"
                style={{ backgroundColor: "#343a46" }}
              >
                <code className="text-white ps-3 ">
                  {/* &lt;script&gt; MAT.init(); &lt;/script&gt; */}
                  <span style={{ color: "#149eca" }}>&lt;script&gt; </span>
                  MAT.init();
                  <span style={{ color: "#149eca" }}> &lt;/script&gt; </span>
                </code>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Docs;
