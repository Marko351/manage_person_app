import React from "react";
import { MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="black" className="font-small mt-5">
      <div className="footer-copyright text-center py-3">
        {/* <MDBContainer fluid> */}
        &copy; {new Date().getFullYear()} Copyright: Manage Person App
        {/* </MDBContainer> */}
      </div>
    </MDBFooter>
  );
}

export default Footer;