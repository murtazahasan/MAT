import React from "react";

function Community() {
  return (
    <>
      <div className="container-fluid bg-dark text-white ">
        <div className="container col-xxl-8 px-4 py-5 ">
          <div className="row flex-lg-row- align-items-center g-5 py-5">
            <div className="col-lg-6">
              <h1
                data-aos="zoom-in-right"
                data-aos-duration="1500"
                className="display-3 fw-bold lh-1 mb-5"
              >
                MAT COMMUNITY
              </h1>
              <p
                data-aos="zoom-in-right"
                data-aos-duration="1500"
                className="lead"
              >
                my animation tool has a community of millions of developers. On
                this page we’ve listed some communities that you can be a part
                of; see the other pages in this section for additional
                materials.
              </p>
            </div>
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                data-aos="zoom-in-right"
                data-aos-duration="1500"
                src="groupdis.gif"
                alt="Vector Art"
                className="w-100 "
              />
            </div>
          </div>
        </div>
      </div>

      {/*  */}

      <div
        className="container-fluid py-5 bg-dark d-flex flex-column  align-items-center"
        data-bs-theme="dark"
      >
        <div className="container bg-dark pb-4 text-white w-75">
          <h2
            data-aos="zoom-in-right"
            data-aos-duration="1500"
            className="pb-2 fs-1 fw-bold "
          >
            Mat society
          </h2>
          <p className="lead">
            MAT society is a vibrant and inclusive hub where creators,
            developers, and animation enthusiasts come together. Here,
            collaboration knows no bounds! Whether you’re a seasoned
            professional or a curious learner,{" "}
            <span style={{ color: "#149eca" }}> MAT community</span> offers:
          </p>
        </div>
        <div className="container bg-dark pb-4 text-white w-75">
          <h2
            data-aos="zoom-in-right"
            data-aos-duration="1500"
            className="pb-2 fs-1 fw-bold "
          >
            Code of Conduct
          </h2>
          <p className="lead">
            Before participating in{" "}
            <span style={{ color: "#149eca" }}> MAT communities</span> , please
            read our Code of Conduct. We have adopted the Contributor Covenant
            and we expect that all community members adhere to the guidelines
            within.
          </p>
        </div>
        <div className="container bg-dark pb-4 text-white w-75">
          <h2
            data-aos="zoom-in-right"
            data-aos-duration="1500"
            className="pb-2 fs-1 fw-bold "
          >
            Stack Overflow
          </h2>
          <p className="lead">
            Stack Overflow is a popular forum to ask code-level questions or if
            you’re stuck with a specific error.{" "}
            <span style={{ color: "#149eca" }}> Read through</span> the existing
            questions tagged with <span style={{ color: "#149eca" }}> MAT</span>{" "}
            or ask your own!
          </p>
        </div>
        <div className="container bg-dark pb-4 text-white w-75">
          <h2
            data-aos="zoom-in-right"
            data-aos-duration="1500"
            className="pb-2 fs-1 fw-bold "
          >
            Popular Discussion Forums
          </h2>
          <p className="lead">
            There are many online forums which are a great place for discussion
            about best practices and application architecture as well as the
            future of MAT. If you have an answerable code-level question, Stack
            Overflow is usually a better fit.
          </p>
          <ul style={{ color: "#149eca" }}>
            <li>DEV’s MAT community </li>
            <li>Hashnode’s MAT community</li>
            <li>MATiflux online chat</li>
            <li>Reddit’s MAT community</li>
          </ul>
        </div>
        <div className="container bg-dark pb-4 text-white w-75">
          <h2
            data-aos="zoom-in-right"
            data-aos-duration="1500"
            className="pb-2 fs-1 fw-bold "
          >
            News{" "}
          </h2>
          <p className="lead">
            For the latest news about MAT, follow{" "}
            <span style={{ color: "#149eca" }}>@MAT</span> on Twitter and the
            official MAT blog on this website.
          </p>
        </div>
      </div>
    </>
  );
}

export default Community;
