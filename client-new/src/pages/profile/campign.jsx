import React from "react";
import { useState } from "react";
import { BsFillCircleFill } from "react-icons/bs";
import { toast, ToastContainer } from "react-toastify";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
const Campign = ({ posts }) => {
  const [campings, setCampings] = useState();
  const [campingid, setCampingid] = useState();
  const campaigns = posts.map((el) => el.campaign_name);
  const campaign = [...new Set(campaigns)];
  

  const excel = async () => {
    try {
      // Make a request to the server to download the file
      let response;
      await fetch(`${process.env.REACT_APP_URL}datafiles/excel`, {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ID: campingid}),
        credentials: "include",
      }).then((data) => {
        response = data;
      }).catch((err) =>{
        toast(err.message)
      })
      const blob = await response.blob();

      // Create a new Blob object that represents the file
      const file = new Blob([blob], { type: "application/octet-stream" });

      // Create an anchor element
      const a = document.createElement("a");

      // Set the "download" attribute
      a.setAttribute("download", "Plan.xlsx");

      // Set the "href" attribute to the Blob object
      a.href = URL.createObjectURL(file);

      // Trigger the download
      a.click();
    } catch (err) {
      return false;
    }
  };

  const powerpoint = async () => {
    try {
      // Make a request to the server to download the file
      let response;
      await fetch(`${process.env.REACT_APP_URL}datafiles/powerpoint`, {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ID: campingid}),
        credentials: "include",
      }).then((data) => {
        response = data;
      })

      const blob = await response.blob();

      // Create a new Blob object that represents the file
      const file = new Blob([blob], { type: "application/octet-stream" });

      // Create an anchor element
      const a = document.createElement("a");

      // Set the "download" attribute
      a.setAttribute("download", "Plan.pptx");

      // Set the "href" attribute to the Blob object
      a.href = URL.createObjectURL(file);

      // Trigger the download
      a.click();
    } catch (err) {
      return false;
    }
  };

const  getData = (text) =>{
  setCampings(text);
 const id = text.split("-")[1]
  setCampingid(id);
}


  return (
    <div className="card p-3 mid-card">
      <p>You were created {campaign.length} campaigns</p>

      <div className="horizontal-tabs">
        <div className="tab-content">
          <div
            role="tabpanel"
            className="tab-pane active row"
            id="booked_media"
          >
            {campaign.map((data, index) => {
              let abc = "a" + data;
              return (
                <div className="campaign-box mt-0">
                  <p
                    key={index}
                    className=" toggle-btn p-0 mb-0 "
                    onClick={(e) => getData(data)}
                    data-bs-toggle="collapse"
                    data-bs-target={`#${abc}`}
                  
                  >
                    <h4>
                      <BsFillCircleFill className="point me-2" /> {data.split("-")[0]}
                      <IoIosArrowDown className="down" />
                    </h4>
                  </p>
                  <div className="collapse" id={abc}>
                    <div className="card-body  p-2 pt-0">
                    <div className="camp-ppt mb-2 m-0">
                        <button className="btn btn-success me-4" onClick={excel}>EXCEL</button>
                        <button className="btn btn-danger" onClick={powerpoint}>PPT</button>
                        <ToastContainer/>
                        </div>
                      <div>
                        <thead>
                          <tr>
                        
                        
                            <th>Category</th>
                            <th>Address</th>
                            <th>Start</th>
                            <th>End</th>
                            <th>Detail</th>
                          </tr>
                        </thead>
                        <tbody>
                          {posts &&
                            posts.map((el, i) => {
                              return (
                                el.campaign_name == campings && (
                                
                                 <tr key={i}>
                                  <td>{el.subcategory}</td>
                                  <td>{el.address} {el.city}</td>
                                  <td>{el.start_date.slice(0, 10)}</td>
                                  <td>{el.end_date.slice(0, 10)}</td>
                                  <Link
                                  to={`/services/${el.media_type}/${el.meta_title}`}
                                  className="text-decoration-none"
                                  >
                                  <td>View</td>
                                  
                                </Link>
                                </tr>
                                  
                                )
                              );
                            })}
                        </tbody>
                      </div>

                      
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campign;
