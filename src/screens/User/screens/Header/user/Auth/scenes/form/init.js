export function validatePhone(phone){
	let value = phone.trim();
	if(value === ""){
		return "Số điện thoại không bỏ trống";
	}
}
export function validatePassword(password){
	let value = password.trim();
	if(value === ""){
		return "Mật khẩu không bỏ trống";
	}else if(value.length < 10){
		return "Mật khẩu phải lớn hơn 10 kí tự"
	}
}
