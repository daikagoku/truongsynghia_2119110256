export function validatePhone(phone,callback){
	let value = "";
	if(phone){
		value=phone.trim();
	}
	if(value === ""){
		return "Số điện thoại không bỏ trống";
	}else{
		return callback(value);
	}
}
export function validatePassword(password,callback){
	let value = "";
	if(password){
		value=password.trim();
	}
	if(value === ""){
		return "Mật khẩu không bỏ trống";
	}else if(value.length < 10){
		return "Mật khẩu phải lớn hơn 10 kí tự"
	}else{
		return callback(value);
	}
}
