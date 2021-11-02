export const BASE_URL     = process.env.PUBLIC_URL;
export const BASE_API     = BASE_URL+"/api";
export const API_PRODUCT  = BASE_API+"/product.json";
export const API_POST     = BASE_API+"/post.json";
export const API_RATING   = BASE_API+"/rating.json";
export const API_COMMENT  = BASE_API+"/comment.json";
export const API_SLIDE    = BASE_API+"/image.json";
export const API_WIDGET   = BASE_API+"/widget.json";
export const API_USER     = BASE_API+"/user.json";
export const API_CATEGORY = BASE_API+"/category.json";
export const API_TOPIC    = BASE_API+"/topic.json";
export const API_INFO     = BASE_API+"/info.json";
const API = {
	product  : API_PRODUCT,
	post     : API_POST,
	rating   : API_RATING,
	category : API_CATEGORY,
	topic    : API_TOPIC,
	comment  : API_COMMENT,
	user     : API_USER,
	slide    : API_SLIDE,
	info     : API_INFO

};
export default API;
