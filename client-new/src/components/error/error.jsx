import React, { useContext, useEffect, useState } from "react";
import Flotinggnavbar from "../../components/navbar/fixednavbar";
import { CityNameImage } from "../../apis/apis";
import { Link } from "react-router-dom";
import './error.scss'
const Empty = () => {
  return (
    <div className="media-branding-n text-center">
      <Flotinggnavbar />
      <div className="d-hide drop-nd"></div>

      <div class="media-branding ">
        <img src=".././gohoarding/branding.jpg"  id="imggg"/>
        <div class="centered">
          <h1>404 Not Found!</h1>
          <p className="mt-1 mt-md-4">
          Please Browse through the below vertical
          </p>
        </div>
      </div>

      <div className="grid-containerN container-xxl  container-xl container-lg container-md my-5">
        {CityNameImage.map((pos, index) => {
          return (
            <Link
            to={`/${pos.value}/delhi`}
            className="text-decoration-none"
            >

            <div className="grid-item text-dark" key={index} >
              <div className=" logo-img ">{pos.icon}</div>

              <p className="">{pos.label}</p>
            </div>

             </Link>);
        })}
      </div>
    </div>
  );
};

export default Empty;
