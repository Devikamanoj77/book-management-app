import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div style={{ height: "300px" }} className="mt-5 container w-100">
      <div className="d-flex justify-content-between">
        {/* Body */}
        <div style={{ width: "400px" }}>
          <h5 className="me-2">BOOK STORE</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            soluta accusamus, explicabo sint non impedit? Placeat a eius,
            aliquid illum deleniti odit? Repellendus rerum, placeat quo libero
            tenetur sapiente cupiditate.
          </p>
        </div>
        {/* Links */}
        <div className=" ms-3 d-flex flex-column">
            <h5>Links</h5>
            <Link to={'/'} style={{textDecoration:'none'}} >Landing Page</Link>
            <Link to={'/home'} style={{textDecoration:'none'}} >Home Page</Link>
            <Link to={'/view'} style={{textDecoration:'none'}} >View Page</Link>
        </div>
        {/* Contact */}
        <div className="d-flex flex-column">
            <h5>Contact</h5>
            <div className="d-flex">
                <input type="text" className="form-control me-2"/>
                <button className="btn btn-info"><i className="fa-solid fa-arrow-right"></i></button>
            </div>
            <div className="d-flex justify-content-between mt-3">
                <a href=" "><i className="fa-brands fa-twitter"></i></a>
                <a href=" "><i className="fa-brands fa-facebook"></i></a>
                <a href=" "><i className="fa-brands fa-linkedin"></i></a>
                <a href=" "><i className="fa-brands fa-instagram"></i></a>
                <a href=" "><i className="fa-brands fa-whatsapp"></i></a>
            </div>
        </div>
      </div>
      <p className="text-center mt-3">Copyright &copy; Library Book Management App</p>
    </div>
  );
};

export default Footer;
