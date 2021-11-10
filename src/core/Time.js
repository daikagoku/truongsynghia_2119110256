export default function Time(time){
	const newTime = {
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
	return newTime;
};