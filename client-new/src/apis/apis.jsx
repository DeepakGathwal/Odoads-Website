import instance from './axios'
import {BsBuilding} from "react-icons/bs"
import {GiAwareness,GiCommercialAirplane,GiAirplaneDeparture,GiLaptop} from "react-icons/gi"
import {TbBuildingCommunity} from "react-icons/tb"
import {TfiLayoutMediaCenterAlt} from "react-icons/tfi"
import {ImOffice} from "react-icons/im"
export const emailformate = /^\w+([-,.]?\w+)*@\w+(.-]?\w+)*(\.\w{2,3})+$/;
export const clientId = process.env.REACT_APP_DEV_MODE;

  export const CityNameImage = [    
    // {
    //   label: "InFlight Branding",
    //   value: "inflight-media",
    //   value2: "InFlight-Media",
    //   srcImg: ".././images/airport.jpg",
    //   icon: <GiCommercialAirplane/>,  
    //   link: "inflight-media/",
    //   city: "citesc"

    // },
    {
      label: "Traditional OOH Media ",
      value2: "Traditional-OOH-Media",
      value: "traditional-ooh-media",
      srcImg: ".././images/traditional-ooh-media-advertising-near-me.jpg",
      srcImgM: ".././images/traditional-ooh-media-advertising.jpg",
      Link:`/traditional-ooh-media/delhi`,
      icon: <GiAwareness/>,
      city: "cities"
    },
    {
      label: "Digital Media",
      value: "digital-media",
      value2: "Digital-Media",
      srcImg: ".././images/digital-media-hoardings-near-me.jpg",
      srcImgM: ".././images/digital-media-hoardings-digital-hoardings.jpg",
     Link:`/digital-media/delhi`,
     icon: <GiLaptop/>,
     city: "citesc"
    },
    {
      label: "Mall Media",
      value: "mall-media",
      value2: "Mall-Media",
      srcImg: ".././images/mall-media-advertising-company.jpg",
      srcImgM: ".././images/mall-media-advertising-near-me.jpg",
      Link:`/mall-media/delhi`,
      icon:<TbBuildingCommunity/>,
      city: "citesc"
    },
    
    {
      label: "Office Branding", 
      value: "office-media",
      value2:"Office-Media",
      srcImg: ".././images/office-branding-advertising-company.jpg",
      srcImgM: ".././images/office-branding-media-near-me.jpg",
      Link:`/office-branding/delhi`,
      icon:<ImOffice/>,
      city: "citesc"
    },
    {
      label: "Transit Media",
      value: "transit-media",
      value2: "Transit-Media",
      srcImg: ".././images/transit-media-advertising-in-delhi.jpg",
      srcImgM: ".././images/transit-media-advertising-near-me.jpg",
      Link:`/transit-media/delhi`,
      icon:<TfiLayoutMediaCenterAlt/>,
      city: "citesc"
    },
    {
      label: "Airport Branding",
      value: "airport-media",
      value2: "Airport-Media",
      srcImg: ".././images/airport-media-hoardings-near-me.jpg",
      srcImgM: ".././images/airport-media-digital-hoardings.jpg",
      Link:`/airport-media/delhi`,
      icon:<GiAirplaneDeparture/>,
      city: "citesc"
    }
  ];

export const getAllCity = async(value) =>{
    const {data } = await instance.post("media/citys", {value});
    return(data);
};

export const logoutUser = async() =>{
    const data = await instance.post("registration/logout", null);
    return data;    
}

export const refreshToken = async() => {
    const {data} = await instance.get(`registration/logout`,{withCredentials:true})
      return data
}

export const googleLogin = async(res) => {
    const {data} = await  instance.post("registration/googleSingUp", res)
      return data
}


export const loginUser = async(email, password) => {
    const {data} = await instance.post('registration/login',{email,password})
      return data
}

export const registerUser = async(email, phone) => {
    const {data} = await instance.post('registration/register',{
        email,phone 
      })
      return data
}
export const OtpRegister = async(name, email, phone, password,otp) => {
    const {data} = await instance.post('registration/registerOtp',{
        name,  email,phone, password, otp
      })
      return data
}

export const deleteCartItem = async(obj) => {
    const data=  await instance.post("cart/deleteFromCart", {
        code: obj,
      });
 return data
}

export const profileDetails = async() =>{
    const {data} =  await instance.get("registration/login")
 return data
}

export const updateProfile = async(formData) =>{
    const {data} =  await instance.post("registration/updateProfile",formData);
 return data
}
export const emailOTP = async(email) =>{
  
    const {data} =  await instance.post("registration/forgetpassword",{email});
 return data
}
export const mobileOTP = async(email) =>{
    const {data} =  await instance.post("otp/mobileOtp",{email});
 return data
}
export const sendOTP = async(otp) =>{
    const {data} =  await instance.put("otp/check",{otp});
 return data
}

export const changePasswordApi = async(password, confirmpasswords, expire) =>{
    const {data} =  await instance.post("otp/check",{password, confirmpasswords, expire});
 return data
}

export const gohordingStaffAPi = async() =>{
    const {data} =  await instance.get("static/gohordingStaff");
 return data
}

export const goh_quick_linksApi = async() =>{
    const {data} =  await instance.get("static/goh_quick_links");
 return data
}

export const goh_faqsApi = async() =>{
    const {data} =  await instance.get("static/goh_faqs");
 return data
}

export const goh_media_and_newsApi = async() =>{
    const {data} =  await instance.get("static/goh_media_and_news");
 return data
}

export const goh_testimonialsApi = async() =>{
    const {data} =  await instance.get("static/goh_testimonials");
 return data
}

export const updatePassword = async(state) =>{
    const {data} =  await instance.put("registration/forgetpassword",{
     newPassword:state.newPassword,confirmPassword:state.confirmPassword
    });
 return data
}

export const enquiryApi = async( name, email, phone, message ) =>{
    const {data} =await  instance.post("enquiry/message", { name, email, phone, message });
 return data
}

export const reviewApi = async( feedback, rating, ip ) =>{
  const {data} =await   instance.post("enquiry/review", { feedback, rating, ip });
  return data
}
export const getreviewApi = async() =>{
  const {data} = await  instance.get("enquiry/review");
  return data
}

export const mediaDataApi = async( category_name, city_name ) =>{
    const {data} =await  instance.post("media/filters", { category_name, city_name});
 return data
}

export const cartItemsApi = async() =>{
    const {data} =await instance.get("cart/cartitems");
 return data
}

export const loginOTP = async(otp) =>{
  const {data} =  await instance.put("otp/mobileOtp",{otp});
return data
}

export const companydata = async(inputs) =>{
  const {data} =  await instance.post("registration/companydata",{ company:inputs.company, city: inputs.city, phone:inputs.phone, address:inputs.address, website:inputs.website, state:inputs.state, zip_code:inputs.zip_code, pan:inputs.pan, gstin:inputs.gstin});
return data
}

export const allcompanydata = async() =>{
  const {data} =  await instance.get("registration/allcompany");
return data
}

export const More = async(setnoOfLogo, noOfLogo, search) => {
  if (search.length >= noOfLogo) {
    setnoOfLogo(noOfLogo + 9);
    window.scrollBy(0, 1150);
  }
  
}
export const Less = async(setnoOfLogo, noOfLogo) => {
  if (noOfLogo > 10) {
    setnoOfLogo(noOfLogo - 9);
    window.scrollBy(0, -1550);
  }
}