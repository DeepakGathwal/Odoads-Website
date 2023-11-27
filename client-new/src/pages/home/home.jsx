import React,{useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchMedia from "../searchmedia/searchmedia";
import Navbar from "../../components/navbar/navbar";
import Ourservices from "../ourservices/ourservices";
import Trendingcity from "../trendingcity/trendingcity";
import City from "../citylist/city";
import { mediawithcity } from "../../action/adminAction";
import { useDispatch, useSelector } from "react-redux";
import Enquire from "../enquire/enquire";
import Flotingnavbar from "../../components/navbar/flotingnavbar";
import Seohelmet from "../../components/seohelper/seohelmet";

const Home = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState();
  var items = ["delhi", "mumbai", "bengaluru", "hyderabad", "chennai"];
  function random_item() {
    return setCity(items[Math.floor(Math.random() * items.length)]);
  }
  const data = async () => {
    const category_name = "traditional-ooh-media";
    const city_name = city;
    const limit = 9
    dispatch(mediawithcity(category_name, city_name, limit));
  };
  useEffect(() => {
    random_item()
    data()
      },[city])
      
  return (
    <>
    <Seohelmet title={"India's Largest Outdoor Advertising Agency | Gohoarding Solution"} value={"India's Largest Outdoor Advertising Agency. We are helping business to grow offline with hoardings, billboards ads, bus shelters, metro pillars, airport, and office brandings | Gohoardings"} keyword={"India's Largest Outdoor Advertising Agency,  Hoarding agency, Outdoor Advertising Company, Bus Advertising, Airport Advertising, OOH Media Agency, Train Advertising, Cab and Autorikshaw Advertising, Digital LED Display Ads, DOOH Advertising, Ad Agency India, Hoarding Advertising Agency Nearby, Multiplex Advertising, Gohoardings is india’s largest Outdoor Advertising Agency"}/> 
                 <Navbar />
                 <Flotingnavbar />
                 <SearchMedia />
                 <Ourservices />
                 <City />
                 <Enquire />
                 <Trendingcity />
             
    </>
  );
};
export default Home;
