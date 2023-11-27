import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {getAllCity} from "../../apis/apis";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./searchmedia.scss";
import MediaDropDown from "../../components/media_dropdown/mediadropdown";
import Citylocation from "../../components/cityLocation/citylocation";

const SearchMedia = () => {
  const navigate = useNavigate()
  const [city, setCity] = useState([]);
  const [value, setValue] = useState("");

  const [focus,setFocus] = useState(false);
  const [userType, setUserType] = useState("");

  const onChange = async (event) => {
    setValue(event.target.value);
    const cities = event.target.value;
    const data = await getAllCity(cities);
    setCity(data);
  };
  const mavigatetoMediaPage = (userType,value) => {
    if(userType.length > 3 && value.length > 2){
      navigate(`/${userType}/${value}`)
    }
    }

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
  setFocus(false)
  };

  return (
    <>
      <div className="container-xxl  container-xl container-lg container-md mb-4  search-media-content">
        <div className="row">
          <div className="col-md-8 ps-0">
            <div className="heading-text mt-4">
              <h2>India's Largest</h2>

              <h1>
                Outdoor Advertising <br />
                Agency
              </h1>
              <h6 className="pt-2">
                OOH Advertising made easy Search
                <br />
                Media. Check Availability. Book Online.
              </h6>
            </div>
            <div className="mnc mt-4">
            <a href="/contact-us" className="text-decoration-none">
            <button class="button "><span>Enquire now</span></button>
            </a> 
            </div>

           
          </div>
          <div className="col-md-4 text-center p-md-0">
            <img
            alt="home-img"
              src="./../gohoarding/home-img.png"
              className="search-media-img"
            />
          </div>
        </div>
        <section>
          <div className="container-fluid  mt-5 pt-2  px-5 m-0 ">
            <div className="row  mx-auto mb-5   p-1 search-container">
              <div className="col-md-5  me-0 pe-0">
                <div className="search-location ">
                  <div className="search-inner">
                    <InputGroup className="" id="input-click">
                      <Citylocation
                        InputGroup={InputGroup}
                        setValue={setValue}
                      />
                      <Form.Control
                      autoComplete="off"
                        placeholder="Search your location"
                        aria-describedby="basic-addon1"
                        onChange={onChange}
                        value={value}
                        onFocus={() => setFocus(true)}
                        // onBlur={() => setFocus(false)}
                        id="search-location-box"
                        className=""
                      />
                    </InputGroup>
                  </div>
                  <div className={focus ?    "dropdown-menu  border-0 show ps-3  dropdown-menu-location p-1" :    "dropdown-menu" } id="abcd">
                    {city.map((item, i) => (
                      <div
                        key={i}
                        className="border-1"
                        onClick={() => onSearch(item.name)}
                      >
                        <option value={item.name} className=" text-dark mt-1" >
                          {item.name}
                        </option>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-md-5  ps-0 ms-0 pt-2 pb-2 pe-0 pe-md-2"   onFocus={() => setFocus(false)}>
                <MediaDropDown userType={userType} setUserType={setUserType} />
              </div>
              <div className="col-md-2 ps-0 pt-2 pb-2 pe-0 pe-md-2" >
              {userType && value? 
               <button className="search-btn "
               onClick={(a,b) =>  mavigatetoMediaPage(userType,value)}
            >Search</button> : <button className="search-btn search-btnNot"
                  
                  >Search</button>

              }
                 
                
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SearchMedia;
