import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="row">
        <div className="column">
          <p className="col-title"> Products </p>
          <a
            className="col-item"
            href={"https://lernrobotics.aegisinitiative.io/"}
            target={"_blank"}
            rel="noopener noreferrer"
          >
            LERNRobotics
          </a>
        </div>

        <div className="column">
          <p className="col-title"> For Developers </p>
          <a
            className="col-item"
            href={"https://github.com/The-AEGIS-Initiative"}
            target={"_blank"}
            rel="noopener noreferrer"
          >
            Contribute
          </a>
          <p className="col-item"> Join Us </p>
        </div>

        <div className="column">
          <p className="col-title"> AEGIS Initiative </p>
          <a
            className="col-item"
            href={"https://www.aegisinitiative.io/who-we-are"}
            target={"_blank"}
            rel="noopener noreferrer"
          >
            About Us
          </a>
          <p className="col-item"> Our Team </p>
          <p className="col-item">
            <a
              className="col-item"
              href={"https://www.aegisinitiative.io/support-us"}
              target={"_blank"}
              rel="noopener noreferrer"
            >
              Support Us
            </a>
          </p>
        </div>

        <div className="column">
          <p className="col-title"> Contact Us </p>
          <a
            className="col-item email-link"
            href={"mailto:contact@aegisinitiative.io"}
            target={"_blank"}
            rel="noopener noreferrer"
          >
            contact@aegisinitiative.io
          </a>
          <p className="col-item">
            AEGIS Initiative <br />
            1521 Shattuck Ave. #9419 <br />
            Berkeley, CA, 94709 <br />
          </p>
          <br />
          <p className="col-item">
            &copy; Copyright 2020 The AEGIS Initiative. <br />
            All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
