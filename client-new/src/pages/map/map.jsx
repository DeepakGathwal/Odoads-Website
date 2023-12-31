import React, {useContext, useEffect, useState, useCallback} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {AccountContext} from "../../apis/apicontext";
import "./map.scss";
import Navbar from '../../components/navbar/fixednavbar'
import "./icons.scss";
import { useSelector, useDispatch} from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Mapfilter from './mapfilters'
import {useJsApiLoader} from "@react-google-maps/api";
import Markers from "./marker";
import Iconsselection from "./iconsselection";
import { addItem, markersPosition, mediawithcity, nearProduct, removeItem } from "../../action/adminAction";
import {BsListUl} from 'react-icons/bs'
import {MdAddLocationAlt ,MdArrowUpward, MdOutlineArrowDownward} from 'react-icons/md'
import {FaFilter,FaRupeeSign,FaMapMarked} from 'react-icons/fa'
import Seohelmet from "../../components/seohelper/seohelmet";
import VariantsExample from "../../components/loading/loading";

const Map = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {search, loading} = useSelector((state) => state.search);
  const {addRemove} = useContext(AccountContext);
  const [noOfLogo, setnoOfLogo] = useState(8);
  const [zoom,setZoom] = useState(15)

  console.log(search);

  var slice;

  if (!loading) {


    slice =  search.slice(0, noOfLogo);
  }

  function topFunction() {
    document.body.scrollTop = 0; // htmlFor Safari
    document.documentElement.scrollTop = 0; // htmlFor Chrome, Firefox, IE and Opera
  }


  useEffect(() => {
    topFunction();
  }, []);

  const [mapMarker, setPosts] = useState([]);
 
  const addonCart = async (code, category_name) => {
    if (!localStorage.getItem(true)) {
      window.localStorage.setItem("locate", `/map`);
      navigate("/login");
    } else {
      dispatch(addItem(code, category_name));
      addRemove({ type: "INCR" });
      add(code);
    }
  };
  const add = (code) => {
    let temp = [...slice];
    temp.forEach((obj) => {
      if (obj.code == code) {
        obj.isDelete = 0;
      }
      setPosts(temp);
    });
  };
 

   const removefromCart = async (code) => {
    dispatch(removeItem(code));
    addRemove({ type: "DECR" });
    remove(code);
  };


  const remove = (code) => {
    let temp = [...slice];
    let data = temp;
    temp.forEach((element) => {
      if (element.code == code) {
        element.isDelete = 1;
  
      }
      setPosts(data)
    });
  };


  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_MapAPI,
  });

  const getRelateddata  = () => {
    // if(slice.length > 1) {
    const value = [...search];
    const code = value[0].code;
    const category_name = value[0].category_name;
    const data = noOfLogo + 2
    dispatch(
      nearProduct(code,category_name, data)
    );
  //   }
  }


  const More = async () => {
    if (search.length >= noOfLogo) {
      await setnoOfLogo(noOfLogo + 6);
       if(zoom>=13){
        setZoom(zoom-1)
       } 
    }
  };
  const Less = async () => {
    if (noOfLogo >= 2) {
      await setnoOfLogo(noOfLogo - 6);
      if(zoom>=13){
        setZoom(zoom-1)
       } 
    }
  };
  // const data = useCallback(() => {
  //   if (slice.length == 0){
  //     dispatch(mediawithcity("traditional-ooh-media","delhi",noOfLogo)).then(() => {
  //      window.location.reload()
  //    })
    
  //   }
  // },[nearProduct])

  // useEffect(() => {
  // data()
  // },[])
  

  return (
  <>
  <Seohelmet/>
  <Navbar/>
  <div className="container-fluid ">
      <div className="row" id="map-view-row">
        <div className="col-lg-3 col-md-3 col-sm-12 p-0 border-end position-relative">
          <div className="row filter-icons mt-5 pt-3">
            <div
              className="col-4 list d-inline-block text-center py-2 shadow-sm border-top-0 border collapse-none"
              data-bs-toggle="collapse"
              data-bs-target="#collapseT1"
              aria-expanded="true"
              aria-controls="collapseT1"
            >
              <BsListUl className="icons-sizes icon-clr"/>
            </div>
            <div
              className="col-4 poi d-inline-block text-center py-2 shadow-sm border-top-0 border collapse-none"
              id="test"
              data-bs-toggle="collapse"
              data-bs-target="#collapseT2"
              aria-expanded="false"
              aria-controls="collapseT2"
            >
              <MdAddLocationAlt className="icons-sizes icon-clr "/>
            </div>
            <div
              className="col-4 filter d-inline-block text-center py-2 shadow-sm border-top-0 border collapse-none"
              data-bs-toggle="collapse"
              data-bs-target="#collapseT3"
              aria-expanded="false"
              aria-controls="collapseT3"
            >
              <FaFilter className="icons-sizes icon-clr"/>
            </div>
          </div>

          <div id="accordionTest">
            <div
              className="media-items p-2 accordion-collapse collapse show map-media-item-list mb-1"
              id="collapseT1"
              data-bs-parent="#accordionTest"
            >
              <div
                className="accordion items mb-2 rounded"
                id="accordionExample"
              >
                {/* {loading ? (
                    <VariantsExample/>
            
                ) : (
                  <>
                    {slice.length == 0 ? (
                      <>No Data Found</>
                    ) : (
                      <>
                        {slice.map((item, i) => (
                          <>
                            <div className=" border rounded mb-2" key={i}>
                              <div
                              >
                                <div className="row m-0">
                                  <div className="col-xl-4 col-lg-12 col-md-12 col-sm-6 map-media-items">
                                  <Link
                        to={`/services/${item.category_name}/${item.meta_title}`}
                        className="text-decoration-none"
                      >
                                    <img
                                    
                                      src={
                                        item.thumb.startsWith("https")
                                          ? item.thumb
                                          : `https://${item.mediaownercompanyname
                                              .trim()
                                              .split(" ")
                                              .slice(0, 2)
                                              .join("_")
                                              .toLowerCase()}.odoads.com/media/${item.mediaownercompanyname
                                              .trim()
                                              .split(" ")
                                              .slice(0, 2)
                                              .join("_")
                                              .toLowerCase()}/media/images/new${
                                              item.thumb
                                            }`
                                      }
                                      onError={(e) =>
                                        (e.target.src = "../../clientslogo/alter-img.png")
                                      }
                                      className="w-100 h-75 mt-2 pt-2"
                                    />
                                    </Link>
                                  </div>
                                  <div className="col-xl-8 col-lg-12 col-md-12 col-sm-6">
                                    <ul className="list-unstyled pt-1">
                                    <Link
                        to={`/services/${item.category_name}/${item.meta_title}`}
                        className="text-decoration-none"
                      >
                                      <li title={item.page_title} className='text-dark'>
                                        {item.page_title.substring(0, 20) +
                                          "..."}
                                      </li>
                                      </Link>
                                      <li>FTF : {item.ftf}</li>
                                      <li>Size : {item.size} feet</li>

                                      <li>
                                        Price: {parseInt(item.price/30)}         
                                                <span className="project-price float-end">
                        {item.isDelete == 0 ? (
                          <img
                          alt="check"
                            src="../../clientslogo/A-chek.png"
                            onClick={() => removefromCart(item.code, item.category_name)}
                            className="addonCart icon-clr  "
                          />
                        ) : (
                          <img
                          alt="cart-icon"
                            src="../../clientslogo/A-cart.png"
                            onClick={(e,i) => addonCart(item.code)}
                            className="addonCart icon-clr "
                          />
                        )}
                      </span>
                                  
                                      </li>
                                    </ul>
                                  </div>
                  
                                </div>
                              </div>
                            </div>
                            {slice.length == 1 && <div>
                              <button  className=" buttonload btn-hover" onClick={getRelateddata}>Get Related Data</button>
                              </div>}
                          </>
                        ))}
                      </>
                    )}
                  </>
                )} */}
             


                <div className="text-center map-btn-more">
                {loading ? (
        <> </>
      ) : (
        <>
          {" "}
          {slice.length < 8 ? (
            <></>
          ) : (
            <>
              <div className="position-relative my-5 ">
                <div className=" position-absolute mt-4 top-0 start-50 translate-middle">
                  {slice.length == search.length ? (
                    <> </>
                  ) : (
                    <button
                      className=" buttonload btn-hover"
                      onClick={() => More()}
                    >
                      View More <MdOutlineArrowDownward className="icon-clr" />
                    </button>
                  )}
                  {slice.length <= 9 ? (
                    <> </>
                  ) : (
                    <button
                      className="buttonload btn-hover mt-0"
                      onClick={() => Less()}
                    >
                      View Less <MdArrowUpward className="icon-clr" />
                    </button>
                  )}
                </div>
              </div>{" "}
            </>
          )}
        </>
      )}
                </div>
              </div>
            </div>
            {search && search.length > 0 ? (
              <Iconsselection slice={slice} loading={loading} fnmedia={search} />
            ) : null}
           <Mapfilter search={search} />
      
          </div>

          <div id="map-view-mobile">
            <div className="aval-hoarding d-inline-block position-absolute">
              <div className="map-btns d-inline-block p-1 pe-2 border-end">
                <img
                  src="./assests/map-icons/billboard.png"
                  alt="billboard"
                  className="p-2"
                />
                <span className="pe-2">Available</span>
              </div>
              <div className="map-btns d-inline-block p-1 pe-2">
                <img
                  src="./assests/map-icons/billboard.png"
                  alt="billboard"
                  className="p-2"
                />
                <span className="pe-2">Not Available</span>
              </div>
            </div>

          </div>
        </div>
        <div className="col-9 p-0 mt-5 pt-3" id="map-view">
        <button className="Load-more ms-2"    onClick={() => More()}>Load more </button>
   
          <div className="d-inline-block position-absolute bottom-0 mb-2 aval-hoarding bg-warning p-2  pb-0">
            <div className="d-inline-block border-0 ">
              <p className="">Click on markers to add/remove into cart.</p>
            </div>
          </div>

          {
          !mapMarker.length > 0 ?
          isLoaded && slice && slice.length > 0 ? (
            <Markers markers={slice} removefromCart={removefromCart} addonCart={addonCart} zoom={zoom} />
          ) :      "abc"
        :
        <Markers markers={slice} removefromCart={removefromCart} addonCart={addonCart} zoom={zoom} />
        }
        </div>
        
      </div>
    </div>
  </>
  );
};

export default Map;