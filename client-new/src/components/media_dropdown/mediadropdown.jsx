import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { CityNameImage } from "../../apis/apis";

const Mediadropdown = ({ userType, setUserType }) => {

   let selecType;
  CityNameImage.map((el) => {
      if (el.value == userType) {
        selecType=el.label;
      }
    });


  return (
    <DropdownButton
      title={userType ? selecType : "Select your media type"}
      id="select-media-box"
      onSelect={(e) => setUserType(e)}
    >
      {CityNameImage.map((el, i) => (
        <Dropdown.Item eventKey={el.value} className="p-2 mt-0 " key={i}>
            <span className="select-media-icon icon-clr"> {el.icon} </span>
          {el.label}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

export default Mediadropdown;
