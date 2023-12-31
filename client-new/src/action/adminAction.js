import instance from '../apis/axios'

export const userDetails =  async (dispatch) => {
    try{
        dispatch({type: "UserRequest"});
        const {data} = await instance.get("registration/user", {
            withCredentials: true
          })
        dispatch({ type: "UserSuccess", payload: data});

    }catch(error){
        
        dispatch({type: "UserFail", payload: error.response })
    }
}

export const mediawithcity  = (category_name, city_name, limit)  => async(dispatch) =>{

    try{
        dispatch({type: "MediaWithCityRequest"});
        const {data} = await instance.post(`media/searchMedia`,{category_name,city_name, limit})
        dispatch({ type: "MediaWithCitySuccess", payload: data});
    }catch(error){
        dispatch({type: "MediaWithCityFail", payload: error.response.data })
    }
}

export const mediawithlocation  = ( category_name,
    city_name,
    loca,
    noOfLogo)  => async(dispatch) =>{

    try{
        dispatch({type: "MediaWithCityRequest"});
        const {data} = await instance.post(`product/NearproductByLocation`,{ category_name,
            city_name,
            loca,
            noOfLogo})
        dispatch({ type: "MediaWithCitySuccess", payload: data});
    }catch(error){
        dispatch({type: "MediaWithCityFail", payload: error.response.data })
    }
}


export const priceSubIllu  = (category_name,price,illumination,table,city, locations) => async (dispatch) =>{
    try{
        dispatch({type: "MediaWithCityRequest"});
    
        const {data} = await instance.post(`filter/categoryfilter`,{category_name, price, illumination, table, city, locations})

        dispatch({ type: "MediaWithCitySuccess", payload: data});

    }catch(error){
        
        dispatch({type: "MediaWithCityFail", payload: error.response.data })
    }
}


export const mediaFilters  = (category_name,illunation,categorys,city_name, locations)  => async (dispatch) =>{
    try{
        dispatch({type: "MediaWithCityRequest"});

        const {data} = await instance.post(`filter/filterData`,{category_name,illunation,categorys,city_name, locations})

        dispatch({ type: "MediaWithCitySuccess", payload: data});

    }catch(error){
        
        dispatch({type: "MediaWithCityFail", payload: error.response.data })
    }
}




export const iconFiltersData  = (distance, datas, table, city, minLatitude, maxLatitude, uniqueValues)  => async (dispatch) =>{
 
    try{
        dispatch({type: "IconFilterRequest"});

        const {data} = await instance.post(`filter/mapFilter`,{distance, datas, table, city, minLatitude, maxLatitude, uniqueValues})

        dispatch({ type: "IconFilterSuccess", payload: data});

    }catch(error){
        
        dispatch({type: "IconFilterFail", payload: error.response.data })
    }
}



export const cartitems = () => async (dispatch) => {
    try{
        dispatch({type: "CartRequest"});
     
        const {data} = await instance.get(`cart/cartitems`)
        dispatch({ type: "CartSuccess", payload: data});
    }catch(error){ 
        dispatch({type: "CartFail", payload: error.response.data })
    }
}


export const addItem = (mediaid, mediatype) => async (dispatch) => {
    try{
        dispatch({type: "CartRequest"});
      
        const {data} = await instance.post(`cart/addOnCart`,{mediaid, mediatype})
        dispatch({ type: "CartSuccess", payload: data});
    }catch(error){ 
        dispatch({type: "CartFail", payload: error.response.data })
    }
}


export const removeItem = (code) => async (dispatch) => {
    try{
        dispatch({type: "CartRequest"});
       
        const {data} = await instance.post(`cart/deleteFromCart`,{code})
        dispatch({ type: "CartSuccess", payload: data});
    }catch(error){ 
        dispatch({type: "CartFail", payload: error.response.data })
    }
}

export const singlemnedia  = (meta_title, category_name)  => async(dispatch) =>{
    try{
        dispatch({type: "MediaWithCityRequest"});
        const {data} = await instance.post("product/product",{ meta_title, category_name})
        dispatch({ type: "MediaWithCitySuccess", payload: data});
    }catch(error){
        dispatch({type: "MediaWithCityFail", payload: error.response.data })
    }
}

export const nearProduct  = (code, category_name, noOfLogo)  => async(dispatch) =>{
    try{
        dispatch({type: "MediaWithCityRequest"});
        const {data} = await instance.post("product/nearproduct",{ code, category_name, noOfLogo})
        dispatch({ type: "MediaWithCitySuccess", payload: data});
    }catch(error){
        dispatch({type: "MediaWithCityFail", payload: error.response.data })
    }
}

export const markersPosition  = (NorthLat, SouthLat, NorthLong, SouthLong)  => async (dispatch) =>{
    try{
        dispatch({type: "MediaWithCityRequest"});
        const {data} = await instance.post("filter/markersdata",{ NorthLat, SouthLat, NorthLong, SouthLong})
        dispatch({ type: "MediaWithCitySuccess", payload: data});
    }catch(error){
        dispatch({type: "MediaWithCityFail", payload: error.response.data })
    }
}

