import React, { useState } from "react";
import { BiCurrentLocation } from "react-icons/bi";
import axios from "axios";

const Citylocation = ({ InputGroup, setValue }) => {
  const [loading, setLoading] = useState(false);
  const data = async () => {
    setLoading(true);
    await navigator.geolocation.getCurrentPosition(function (position) {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      const options = {
        method: "GET",
        url: process.env.REACT_APP_WHERTHER,
        params: { latitude: lat, longitude: long, range: "0" },
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_X_RapidAPI_Key,
          "X-RapidAPI-Host": process.env.REACT_APP_X_RapidAPI_HOST,
        },
      };
      axios
        .request(options)
        .then(function (response) {
          const city = response.data[0];
          setValue(city.City);
           setLoading(false)
        })
        .catch(function (error) {
          return false;
        });
    });
  };

  return (
    <>
      <InputGroup.Text className="basic-addon"     onClick={data}
            disabled={loading}>
        {loading ? (
          <span class="spinner-border spinner-border-sm  icon-clr" role="status" aria-hidden="true"></span>
        ) : (
          <BiCurrentLocation
            className="basic-addon-icon icon-clr"
        
          />
        )}
      </InputGroup.Text>
    </>
  );
};

export default Citylocation;
