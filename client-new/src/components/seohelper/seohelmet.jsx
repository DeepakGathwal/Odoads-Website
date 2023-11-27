import React, { Children } from "react";
import { Helmet } from "react-helmet-async";
const Seohelmet = ({title, value, keyword}) => {
  return (

    <Helmet>
       <link rel="icon" href="https://www.gohoardings.com/assets/images/favicon.png" />
    <title>{title}</title>
       <meta name="description" value={value}       data-rh="false"/>
       <meta  name="keyword" content={keyword}       data-rh="false"/>
  </Helmet>


  );
};

export default Seohelmet;
