import React, { useState, useEffect } from "react";
import "./trendingcity.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import VariantsExample from "../../components/loading/loading";

const Trendingcity = () => {
  const { search, loading } = useSelector((state) => state.search);
  
 
  {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 2,
      autoplay: true,
      speed: 4700,
      pauseOnHover: true,
      autoplaySpeed: 4700,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 0,
          },
        },
      ],
    };
  }

  let slider = settings;

  return (
    <>
      <div className="container-xxl  container-xl container-lg container-md  mt-5 mt-md-2 mb-md-4  py-5 mb-5 trending-contain ">
        <section>
          <h1 className="text-center text-nowrap ">
            Choose what is Trending in your City
          </h1>
          <h6 className=" text-center">
            Choose the best ways to deliver relevant <br />
            messages to the relevant audience.
          </h6>
        </section>

        {loading ? (
          <div className=" container ">
            <div className="row  text-center my-3">
              <VariantsExample />
            </div>
          </div>
        ) : (
          <>
            {!loading === false ? (
              <div className=" container ">
                <div className="row  text-center my-3">
                  <VariantsExample />
                </div>
              </div>
            ) : (
              <>
                <Slider {...slider}>
                  {search &&
                    search.map((pos, i) => (
                      <div className="container pt-3" key={i}>
                        <div className="row  ">
                          <div className="col p-3 ">
                            <Link
                              to={`/services/${pos.category_name}/${pos.meta_title}`}
                            >
                              <div className="trending-card-img  rounded-2">
                                <img
                                  className="  rounded-2  trending-cardd "
                                  key={i}
                                  alt={pos.mediaownercompanyname}
                                  src={
                                    pos.thumb.startsWith("https")
                                      ? pos.thumb
                                      : `https://${pos.mediaownercompanyname
                                          .trim()
                                          .split(" ")
                                          .slice(0, 2)
                                          .join("_")
                                          .toLowerCase()}.odoads.com/media/${pos.mediaownercompanyname
                                          .trim()
                                          .split(" ")
                                          .slice(0, 2)
                                          .join("_")
                                          .toLowerCase()}/media/images/new${
                                          pos.thumb
                                        }`
                                  }
                                  onError={(e) =>
                                    (e.target.src = "../../clientslogo/alter-img.png")
                                  }
                                />

                                <div className="bottom-left">
                                  {/* {city &&
                                    city.charAt(0).toUpperCase() +
                                      city.slice(1)} */}
                                      Delhi
                                </div>
                                <div className="bottom-left-media">
                                  {pos.medianame.substring(0, 17)}...
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                </Slider>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Trendingcity;
