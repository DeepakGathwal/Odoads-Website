import React from "react";
import "./citylist.scss";
import {Link} from "react-router-dom";

const City = () => {
  return (
    <div className="citylist m-0 mt-3 mt-md-5  py-md-4">
      <section>
        <h1 className="text-center text-nowrap ">Explore your City Listings</h1>
        <h6 className=" text-center">
          Explore some of the best business from around the
          <br />
          world from our partners and friends.
        </h6>
      </section>
      <div className="container mt-5 ">
        <div className="row">
          <div className="col col-md-4"> 
          <Link to={`/cities/delhi`}>
            <div className="city-img-container ">
            <img
                src="./gohoarding/home.jpg"
                className="rounded iimmgg   "
                alt="Delhi Hording"
              />
              <div className="bottom-left">Delhi</div>
              <div className="bottom-left-media">2493+ <span className="bottom-left-media-text" >medias  </span> </div>
            </div>
            </Link></div>
          <div className="col col-md-4 " id="city-gh"><Link to={`/cities/mumbai`}>
             <div className="city-img-container ">
              <img
                src="./gohoarding/home1.jpg"
                className="rounded iimmgg "
                alt="Mumbai Hording"
              />
                  <div className="bottom-left">Mumbai</div>
                  <div className="bottom-left-media">1716+ <span className="bottom-left-media-text">medias  </span> </div>
            </div>
            </Link></div>
          <div className="col col-md-4"><Link to={`/cities/bengaluru`}>
            <div className="city-img-container" >
              <img
                src="./gohoarding/home2.jpg"
                className="rounded iimmgg  "
                alt="Bengalore Hording"
              />
                <div className="bottom-left">Bengaluru</div>
                  <div className="bottom-left-media">960+ <span className="bottom-left-media-text">medias  </span> </div>
            </div>
            </Link></div>
        </div>
      </div>

      <div className="container mt-4">
           <div className="row justify-content-md-center">
          <div className="col"><Link to={`/cities/chennai`}>
             <div className="city-img-container">
              <img
                src="./gohoarding/home3.webp"
                className=" rounded   iimmgg"
                alt="Chennai Hording"
              />
                  <div className="bottom-left">Chennai</div>
                    <div className="bottom-left-media">482+ <span className="bottom-left-media-text">medias  </span> </div>
            </div>
            </Link></div>
   
          <div className="col"><Link to={`/cities/hyderabad`}>
             <div className="city-img-container ">
              <img
                src="./gohoarding/home4.jpg"
                className="rounded iimmgg "
                alt="Hyderabad Hording"
              />
                  <div className="bottom-left">Hyderabad</div>
                    <div className="bottom-left-media">897+ <span className="bottom-left-media-text">medias  </span> </div>
            </div>
            </Link></div>
        </div>

      </div>
    </div>
  );
};

export default City;

