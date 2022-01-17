
export const BASE_URL     = "process.env.PUBLIC_URL";
export const BASE_API     = "http://localhost:9999/api";
export const API_PRODUCT  = BASE_API+"/product";
export const API_CATEGORY = BASE_API+"/category";
export const API_TOPIC    = BASE_API+"/topic";
export const API_IMAGE    = BASE_API+"/image";


export const API_POST     = BASE_API+"/post";
export const API_RATING   = BASE_API+"/rating";
export const API_COMMENT  = BASE_API+"/comment";
export const API_USER     = BASE_API+"/user";
export const API_ABOUT    = BASE_API+"/about";



export const API = {
	product  : API_PRODUCT,
	post     : API_POST,
	rating   : API_RATING,
	category : API_CATEGORY,
	topic    : API_TOPIC,
	image    : API_IMAGE,
	comment  : API_COMMENT,
	user     : API_USER,
	about    : API_ABOUT

};

export function getApiByParams(params,search){
   if(search === undefined){
   		search = "";
   }
   let paramUrl = ( new URLSearchParams( params ) ).toString();
   if(paramUrl !== ""){
        if(search === ""){
        	return "?"+paramUrl;
        }else{
        	return search+"&"+paramUrl;
        }
   };
   return search;
}
export function getParamsBySearch(search){
   return new URLSearchParams( search )
}