/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function Footer() {
  return (
    <footer className="footer">

      <ul class="text-center list-inline" horizontal>
        <li class="list-inline-item">
          <a
            href="https://www.lakedistrict.gov.uk/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              alt="..."
              src="https://www.lakedistrict.gov.uk/__data/assets/image/0020/21458/ld-logo-port.gif"
              style={{ height: 100 }}
              style={{ margin: 40 }}
            />
          </a>
        </li>
        <li class="list-inline-item">
          <a
            href="https://www.discoverpenrith.co.uk/"
            target="_blank"
            rel="noreferrer noopener"
            style={{ margin: 20 }}
          >
            <img
              alt="..."
              src="https://www.penrithbid.co.uk/images/discover1.jpg"
              style={{ height: 90 }}
            />
          </a>
        </li>
        <li class="list-inline-item">
          <a
            href="https://penrithbid.co.uk/"
            target="_blank"
            rel="noreferrer noopener">
            <img
              alt="..."
              src="https://www.penrithbid.co.uk/images/logo2.svg"
              style={{ height: 70 }}
              style={{ padding: 20 }}
            />
          </a>
        </li>
        <li class="list-inline-item">
          <a
            href="https://www.cumbriatourism.org/"
            target="_blank"
            rel="noreferrer noopener"
            style={{ margin: 20 }}

          >
            <img
              alt="..."
              src="https://www.cumbriatourism.org/wp-content/uploads/2015/07/ct_logo.png"
              style={{ height: 70 }}

            />
          </a>
        </li>
      </ul>
      <div className="credits text-center">
        <span className="copyright">
          © {new Date().getFullYear()}, made with{" "}
          <i className="fa fa-heart heart" /> by Creative Tim
        </span>
      </div>
    </footer>
  );
}

export default Footer;
