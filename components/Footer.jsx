import React from "react";

const Footer = () => {
  return (
    <>
      <hr />
      <div className="created-by my-3">
        <p className="text-center ">
          <i className="fa-solid fa-copyright"></i> Created by
          <a
            href="https://simonevisconti.site/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginLeft: "5px" }}
          >
            Simone Visconti
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;
