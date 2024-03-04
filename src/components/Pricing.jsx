import React from "react";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";

function Pricing() {
  return (
    <>
      <div className="container-fluid py-3 bg-dark" data-bs-theme="dark">
        <div className="container">
          <header>
            <div className="pricing-header  p-3 pb-md-4 mx-auto text-center">
              <h1
                data-aos="zoom-in-right"
                data-aos-duration="1500"
                className="display-3  fw-bold text-white"
              >
                Pricing
              </h1>
              <p
                data-aos="zoom-in"
                data-aos-duration="1500"
                className="fs-5 text-muted"
              >
                Quickly build an effective animations for your potential
                customers with this animations example. It’s built with default
                animations classes and utilities with little customization.
              </p>
            </div>
          </header>

          <main>
            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
              <div className="col">
                <div
                  data-aos="zoom-in-right"
                  data-aos-duration="1500"
                  className="card mb-4 rounded-3 shadow-sm"
                  data-bs-theme="dark"
                >
                  <div className="card-header py-3">
                    <h4 className="my-0 fw-normal">Free</h4>
                  </div>
                  <div className="card-body">
                    <h1 className="card-title pricing-card-title">
                      $0
                      <small className="text-muted fw-light">/mo</small>
                    </h1>
                    <ul className="list-unstyled mt-3 mb-4">
                      <li>10 users included</li>
                      <li>2 GB of storage</li>
                      <li>Email support</li>
                      <li>Help center access</li>
                    </ul>
                    <button
                      type="button"
                      className="w-100 btn btn-lg btn-outline-primary"
                    >
                      Sign up for free
                    </button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                  className="card mb-4 rounded-3 shadow-sm"
                  data-bs-theme="dark"
                >
                  <div className="card-header py-3">
                    <h4 className="my-0 fw-normal">Pro</h4>
                  </div>
                  <div className="card-body">
                    <h1 className="card-title pricing-card-title">
                      $15
                      <small className="text-muted fw-light">/mo</small>
                    </h1>
                    <ul className="list-unstyled mt-3 mb-4">
                      <li>20 users included</li>
                      <li>10 GB of storage</li>
                      <li>Priority email support</li>
                      <li>Help center access</li>
                    </ul>
                    <button
                      type="button"
                      className="w-100 btn btn-lg btn-primary"
                    >
                      Get started
                    </button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                  className="card mb-4 rounded-3 shadow-sm border-primary"
                  data-bs-theme="dark"
                >
                  <div className="card-header py-3 text-bg-primary border-primary">
                    <h4 className="my-0 fw-normal">Enterprise</h4>
                  </div>
                  <div className="card-body">
                    <h1 className="card-title pricing-card-title">
                      $29
                      <small className="text-muted fw-light">/mo</small>
                    </h1>
                    <ul className="list-unstyled mt-3 mb-4">
                      <li>30 users included</li>
                      <li>15 GB of storage</li>
                      <li>Phone and email support</li>
                      <li>Help center access</li>
                    </ul>
                    <button
                      type="button"
                      className="w-100 btn btn-lg btn-primary"
                    >
                      Contact us
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <h2
              data-aos="zoom-in"
              data-aos-duration="1500"
              className="display-3 fw-normal pt-5 text-white text-center"
            >
              Compare plans
            </h2>

            <div
              data-aos="zoom-in-right"
              data-aos-duration="1500"
              className="table-responsive py-5"
            >
              <table className="table table-dark text-center">
                <thead>
                  <tr>
                    <th style={{ width: "10%" }}></th>
                    <th style={{ width: "16%" }}>Free</th>
                    <th style={{ width: "16%" }}>Pro</th>
                    <th style={{ width: "16%" }}>Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" className="text-end">
                      Public
                    </th>
                    <td>
                      <TiTick />{" "}
                    </td>
                    <td>
                      <TiTick />
                    </td>
                    <td>
                      <TiTick />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="text-end">
                      Private
                    </th>
                    <td>
                      <RxCross2 />
                    </td>
                    <td>
                      <RxCross2 />
                    </td>
                    <td>
                      <TiTick />
                    </td>
                  </tr>
                </tbody>

                <tbody>
                  <tr>
                    <th scope="row" className="text-end">
                      Permissions
                    </th>
                    <td>
                      <RxCross2 />
                    </td>
                    <td>
                      <RxCross2 />
                    </td>
                    <td>
                      <TiTick />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="text-end">
                      Sharing
                    </th>
                    <td>
                      {" "}
                      <TiTick />
                    </td>
                    <td>
                      <TiTick />
                    </td>
                    <td>
                      <TiTick />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="text-end">
                      Extra Security
                    </th>
                    <td>
                      {" "}
                      <RxCross2 />
                    </td>
                    <td>
                      <TiTick />
                    </td>
                    <td>
                      <TiTick />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>

      {/*  */}

      {/* <div className="table-responsive">
  <table className="table table-dark text-center">
    <thead>
      <tr>
        <th style={{width: '34%'}}></th>
        <th style={{width: '22%'}}>Free</th>
        <th style={{width: '22%'}}>Pro</th>
        <th style={{width: '22%'}}>Enterprise</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row" className="text-end">
          Public
        </th>
        <td>
          <svg className="bi" width="24" height="24">
            <use xlinkHref="#check"></use>
          </svg>
        </td>
        <td>
          <svg className="bi" width="24" height="24">
            <use xlinkHref="#check"></use>
          </svg>
        </td>
        <td>
          <svg className="bi" width="24" height="24">
            <use xlinkHref="#check"></use>
          </svg>
        </td>
      </tr>
      <tr>
        <th scope="row" className="text-end">
          Private
        </th>
        <td></td>
        <td>
          <svg className="bi" width="24" height="24">
            <use xlinkHref="#check"></use>
          </svg>
        </td>
        <td>
          <svg className="bi" width="24" height="24">
            <use xlinkHref="#check"></use>
          </svg>
        </td>
      </tr>
    </tbody>

    <tbody>
      <tr>
        <th scope="row" className="text-end">
          Permissions
        </th>
        <td>
          <svg className="bi" width="24" height="24">
            <use xlinkHref="#check"></use>
          </svg>
        </td>
        <td>
          <svg className="bi" width="24" height="24">
            <use xlinkHref="#check"></use>
          </svg>
        </td>
        <td>
          <svg className="bi" width="24" height="24">
            <use xlinkHref="#check"></use>
          </svg>
        </td>
      </tr>
      <tr>
        <th scope="row" className="text-end">
          Sharing
        </th>
        <td></td>
        <td>
          <svg className="bi" width="24" height="24">
            <use xlinkHref="#check"></use>
          </svg>
        </td>
        <td>
          <svg className="bi" width="24" height="24">
            <use xlinkHref="#check"></use>
          </svg>
        </td>
      </tr>
      <tr>
        <th scope="row" className="text-end">
          Unlimited members
        </th>
        <td></td>
        <td>
          <svg className="bi" width="24" height="24">
            <use xlinkHref="#check"></use>
          </svg>
        </td>
        <td>
          <svg className="bi" width="24" height="24">
            <use xlinkHref="#check"></use>
          </svg>
        </td>
      </tr>
    </tbody>
  </table>
</div> */}
    </>
  );
}

export default Pricing;
