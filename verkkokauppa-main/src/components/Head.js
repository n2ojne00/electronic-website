import React from "react";

export const Head = () => {
  return (
    <div>
      <section className="head" style={{ backgroundColor: "#333" }}>
        <div className="container d_flex">
          <div className="left-column" style={{ marginTop: "3px" }}>
            <i className="fa fa-phone"></i>
            <label>+358 44 000 000</label>
            <i className="fa fa-envelope"></i>
            <label>
              <a href="mailto:myynti@nettikaubba.com">myynti@nettikaubba.com</a>
            </label>
          </div>
          <div></div>
        </div>
      </section>
    </div>
  );
};
