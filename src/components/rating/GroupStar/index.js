import {memo} from 'react';
import clsx from 'clsx';
//import styles from './index.module.css';
import RatingStar from '../Star/';
function GroupStar({rating,...props}){
	return(
		<div className={"position-relative d-flex align-items-center"}>
			<RatingStar className=""value="1"rating={rating}/>
			<RatingStar className=""value="2"rating={rating}/>
			<RatingStar className=""value="3"rating={rating}/>
			<RatingStar className=""value="4"rating={rating}/>
			<RatingStar className=""value="5"rating={rating}/>
		</div>
	)
}
export default memo(GroupStar);