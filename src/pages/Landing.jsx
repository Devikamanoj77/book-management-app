import React from "react";

import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        overflow: "hidden", // Ensures no overflow outside the container
      }}
    >
      {/* Blurry background */}
      <div
        style={{
          backgroundImage: "url('https://images.alphacoders.com/132/1326370.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(2px)", // Apply blur effect to the background
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          zIndex: "-1", // Ensure the background is behind the content
        }}
      ></div>

      {/* Content */}
      <div
        style={{
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          height: "100%",
          position: "relative", // To ensure the content stays above the background
        }}
        className="text-center"
      >
        <div className="row" style={{ width: "100%", maxWidth: "1200px" }}>
          <div className="col-lg-7 container">
            <div style={{ marginTop: "200px", textAlign: "center" }}>
              <h1 style={{ fontSize: '50px',color:'white' }}>Awesome BOOK STORE</h1>
              <p style={{ fontSize: '20px',color:'#AF8264' }}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
                eligendi officiis minus corporis tempore, totam sed dicta qui numquam
                quaerat. Id quasi, nihil amet commodi quas cumque necessitatibus
                aspernatur illum!
              </p>
              <Link to={"./home"} style={{borderRadius:'10px'}} className="btn btn-light">
            Get started
          </Link>
              
            </div>
          </div>
          <div className="col-lg-5">
            {/* You can add other content here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
