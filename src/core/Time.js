function create(){
	const time = new Date();
	return format(time);
};
function format(time){
	return {
		day:time.getDay(),
		d:time.getDate(),
		m:time.getMonth()+1,
		y:time.getFullYear(),
		h:time.getHours(),
		i:time.getMinutes(),
		s:time.getSeconds(),
		mili:time.getMilliseconds(),
		timezone:time.getTimezoneOffset()
	};
}
const time = {
	create:create,
	format:format
};
export default time;