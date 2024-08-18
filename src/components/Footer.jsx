import React from "react";
import CIDA from "../assets/CIDA.png";
import NCASL from "../assets/NCASL.jpg";

const Footer = () => {
  return (
    <div className="bg-blue text-white lg:py-4">
      <div className="flex flex-col lg:flex-row justify-between items-center px-2 py-8 lg:px-32 lg:py-20 ">
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="text-sm lg:text-lg">
              SANLAK INTERNATIONAL (PVT) LTD
            </h1>
            <h1 className="text-sm lg:text-lg">
              CIVIL ENGINEERING & CONSULTANCY SERVICES
            </h1>
          </div>
          <div className="text-sm lg:text-lg">
            <h1 className="text-orange">Address</h1>
            <p>49 /1, Gothami Road, Colombo 08</p>
          </div>
          <div className="text-sm lg:text-lg">
            <h1 className="text-orange">Contact Details</h1>
            <p>
              Mobile : +94 777 761 001 | +94 112 671 202 <br /> Fax: +94 112 333
              428
            </p>
            <p>Email: sanlakinternational@gmail.com</p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-start gap-4 mt-8 lg:mt-0">
          <h1>Member Of</h1>
          <div className="flex justify-center items-center gap-12">
            <img
              src={CIDA}
              alt="CIDA Logo"
              className="h-20 w-20 lg:w-32 lg:h-32"
            />
            <img
              src={NCASL}
              alt="NCASL Logo"
              className="h-24 w-28 lg:w-44 lg:h-32"
            />
          </div>
        </div>
      </div>
      <div className="border border-white">
        <h1 className="text-center border border-white text-sm lg:text-lg">
          Developed by SANLAK International (Pvt) Ltd.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
