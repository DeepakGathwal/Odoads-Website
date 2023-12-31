import React, { useEffect, useState } from "react";
import "./footer.scss";
import { CityNameImage } from "../../apis/apis";
import { Link } from "react-router-dom";
import { emailformate } from "../../apis/apis";
import { changefooter } from "../../apis/apis";
import instance from "../../apis/axios";
import { FiPhoneCall } from "react-icons/fi";
import { BiMailSend } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import { enquiryApi } from "../../apis/apis";
import { useParams } from "react-router-dom";

function useWindowSize() {
  const [size, setSize] = useState([window.innerWidth]);

  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerWidth]);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return size;
}
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const FooterN = () => {
  const [email, setEmail] = useState([]);
  const locate = window.location.pathname;
  const value = locate.split("/");

  const [width] = useWindowSize();
  const [widthcss, setWidthcss] = useState(false);
  useEffect(() => {
    const handleCss = () => {
      if (width > 767) {
        setWidthcss(false);
      } else {
        setWidthcss(true);
      }
    };
    handleCss();
  }, [width]);

  const [error, setEror] = useState(false);

  const handelSubmit = async (e) => {
    let count = 0;
    e.preventDefault();
    if (!emailformate.test(email)) {
      count = +1;
      setEror(true);
    } else if (count === 0) {
      const data = await enquiryApi(email);
      if (data.success == true) {
        setEmail("");
        toast(
          "Thank for becoming our member, You will get best deals from us."
        );
        setEror(false);
      }
    }
  };

  const logo = [
    {
      id: 1,
      img: "../../clientslogo/facebook.png",
      alt: "logo1",
      link: "https://www.facebook.com/gohoardings/",
    },
    {
      id: 2,
      img: "../../clientslogo/insta.png",
      alt: "logo2",
      link: "https://www.instagram.com/gohoardings/",
    },
    {
      id: 3,
      img: "../../clientslogo/twiter.png",
      alt: "logo3",
      link: "https://twitter.com/gohoardings",
    },
    {
      id: 4,
      img: "../../clientslogo/linkdin.png",
      alt: "logo4",
      link: "https://www.linkedin.com/company/gohoardings/",
    },
    {
      id: 5,
      img: "../../clientslogo/meail.png",
      alt: "logo5",
      link: "mailto:info@gohoardings.com",
    },
  ];
  const cities = [
    {
      name: "Delhi",
      city: "delhi",
    },
    {
      name: "Goa",
      city: "goa",
    },
    {
      name: "Bengaluru",
      city: "bengaluru",
    },
    {
      name: "Chennai",
      city: "chennai",
    },
    {
      name: "Hyderabad",
      city: "hyderabad",
    },
    {
      name: "Mumbai",
      city: "mumbai",
    },
  ];
  useEffect(() => {}, [window.location.pathname]);
  return (
    <>
      <div className=" footerN-content  pb-3  p-0 px-3 px-md-5 py-md-1  pt-md-5 ">
        <div className="row footer-branding pb-md-4 pb-2">
          <div className="col-md-3 pt-1">
            <a href="/">
              <img
                src="../../images/logo.png"
                alt="gohoardings"
                className="brand-logo-footer "
              />
            </a>
          </div>
          <div className="col-md-9 ">
            <h4 className="f-heading pt-2 pt-md-0">
              India's Largest Outdoor Advertising Company
            </h4>
            <h6 className="f-second-heading pt-1">
              It's advertising network spread across 130 cities with more than
              1.2 lakh OOH and DOOH sites offering hassle free branding
              experiences at an unmatched price.
            </h6>
          </div>
        </div>
        <div className="row pt-3">
          <div className="col  py-md-3 ms-md-2">
            <div className="quick-links ">
              <h4 className="   f-heading">Quick Links</h4>
              <ul className="position-relative  pt-md-3  ps-0">
                <li className="py-md-2">
                  {" "}
                  <a
                    className=" text-decoration-none f-heading-clr"
                    href="https://odoads.com/register"
                    target="_blank"
                  >
                    Login As Media Owner
                  </a>
                </li>
              
            
                <li className="py-md-2">
                  {" "}
                  <a
                    className=" text-decoration-none f-heading-clr"
                    href="/login"
                    target="_blank"
                  >
                    Login As Advertiser
                  </a>
                </li>
                <span className="pos-absolute">
                  <li className="py-md-2">
                    <a
                      href="https://www.odoads.com/"
                      target="_blank"
                      className=" text-decoration-none f-heading-clr"
                    >
                      Odoads
                    </a>
                  </li>
                  <li className="py-md-2">
                    <a
                      href="https://www.gohoardings.com/blog/"
                      target="_blank"
                      className=" text-decoration-none f-heading-clr"
                    >
                      Blog
                    </a>
                  </li>
                  <li className="py-md-2">
                    <a
                      href="/about-us"
                      className=" text-decoration-none f-heading-clr"
                    >
                      About Us
                    </a>{" "}
                  </li>
                  <li className="py-md-2">
                    <a
                      href="/team"
                      className=" text-decoration-none f-heading-clr"
                    >
                      Team
                    </a>
                  </li>
                  <li className="py-md-2">
                    <a
                      href="/contact-us"
                      className=" text-decoration-none f-heading-clr"
                    >
                      Contact
                    </a>
                  </li>
                  <li className="py-md-2 text-decoration-none ">
                    {" "}
                    <a
                      href="/privacy-policy"
                      className=" text-decoration-none f-heading-clr"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </span>
              </ul>
            </div>
          </div>
          <div className="col  py-md-3 ms-md-2">
            <div className="popular-media ">
              <h4 className=" f-heading  ">Popular Services</h4>
              <ul className=" pt-md-3   ps-0">
                {CityNameImage.map((el, i) => (
                  <li className="py-md-2" key={i}>
                    <Link
                      key={i}
                      to={`/${el.value}/${value[2] ? value[2] : "delhi"}`}
                      className="   text-decoration-none f-heading-clr "
                      onClick={topFunction}
                    >
                      {el.label}
                      <br />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col  py-md-3 ms-md-2 p-md-1">
            <h4 className="   f-heading">Trending Cities</h4>
            <ul className=" pt-md-3   ps-0 ">
              <span className="pos-absolute end-0 top-0 me-5">
                {cities.map((el, i) => (
                  <li className="py-md-2" key={i}>
                    <Link
                      key={i}
                      to={`/${"traditional-ooh-media"}/${el.city}`}
                      onClick={topFunction}
                      className="   text-decoration-none f-heading-clr"
                    >
                      {el.name}
                      <br />
                    </Link>
                  </li>
                ))}
              </span>
            </ul>
          </div>

          <div className="col  py-md-3">
            <h4 className="  f-heading">Reach us</h4>
            <ul className=" pt-md-3  ps-0">
              <li className="py-md-2 reach-clr py-md-2 py-1">
                <FiPhoneCall className="me-3 icon-clr" /> +91 7777871717
              </li>
              <li className="py-md-2 reach-clr py-md-2 py-1">
                <BiMailSend className="me-3 icon-clr" /> info@gohoardings.com
              </li>
              <li className="d-flex reach-clr py-md-3 py-1">
                <MdLocationOn className="me-3 icon-clr mt-1" />{" "}
                <p className="reach-clr">
                  E-82, Sector 06
                  <br />
                  Noida, 201301 (U.P.)
                </p>
              </li>
              <div className="grid-container1 ">
                {logo.map((clients, index) => {
                  return (
                    <div className="grid-item" key={index}>
                      <a href={clients.link} target="_blank">
                        <img
                          src={clients.img}
                          alt={clients.alt}
                          className="img-fluid logo-img"
                        />
                      </a>
                    </div>
                  );
                })}
              </div>
            </ul>
          </div>
        </div>
        <div className="row  payment-footer-section ">
          <div className="col text-light " id="letHide"></div>
          <div className="col text-light  mt-md-0">
            
          </div>
          <div className="col text-light  offset-md-3">
            <h4 className="f-heading  text-nowrap  ">
              Best deals in your inbox
            </h4>
            <form
              onSubmit={handelSubmit}
              className="d-flex  p-2 ps-md-1 pt-1 ps-0 smv"
            >
              <input
                className="text-dark border-0  p-2 cnt-input-box rounded-start mt-md-2 "
                type="email"
                value={email}
                autoComplete="off"
                placeholder="Enter you email address"
                formcontrolname="email"
                id="footer-input"
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className=" btn   w-25  border-0 rounded-0 rounded-end mt-md-2 p-0"
                type="submit"
              
              >
                Contact{" "}
              </button>

              <ToastContainer />
            </form>
            <p className="error-msg">
              {" "}
              {error == true && !emailformate.test(email) ? (
                <small className="p-0 p-0 text-danger text-small  ">
                  Type your email corectly
                </small>
              ) : (
                <> </>
              )}{" "}
            </p>
            <h6 className=" py-0 text-muted head6">
              * Join our newsletter for the most recent information.
            </h6>
          </div>
        </div>
        <div className="row my-2 text-center">
        <p className="  text-light f-heading-clr ">
              copyrights &#169; 2023 Gohoardings Solutions LLP
            </p>
        </div>
      </div>
    </>
  );
};

export default FooterN;
