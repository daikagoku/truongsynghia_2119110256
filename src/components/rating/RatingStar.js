import {Icon} from '../tags';
import './Rating.css';
function RatingStar({value,rating,...props}){
	let _value  = Number.parseFloat(value) || 0;
	let _rating = Number.parseFloat(rating) || 0;
	let _progress;
	if(_rating >= _value){
		_progress=1;
	}else if(_rating > _value -1){
		_progress = _rating + 1  - _value;
	}else{
		_progress = 0;
	}
	return(
		<span className={props.className+" position-relative rating-star"}>
			<Icon 
				style={{'--progress':_progress*100}}
				className="rating-star-icon rating-star-progress position-absolute top-0 start-0 fas fa-star"
			/>
			<Icon className="rating-star-icon rating-star-view far fa-star"/>
		</span>
	);
};

export default RatingStar