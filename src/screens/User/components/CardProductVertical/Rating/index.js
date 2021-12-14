<<<<<<< HEAD
import RatingStar from '../../../../../components/rating/RatingStar';
=======
import RatingStar from '../../../../../components/rating/Star/';
>>>>>>> 98686d6b66d7c0ad8bcc9904205f163f4ca76f37
import {useContext} from 'react';
import {ProductContext} from '../index';
import './index.css';
export default function ProductRating({...props}){
	const data = useContext(ProductContext) ?? {};
	const attr = {...props};
	attr.className+=" product-rating-view ";
	let rating = 0;
	if(data.rating !== undefined){
		rating = data.rating;
	}
    function formatRating(results){
    	return Number.parseFloat(results).toFixed(1);
    };
	return(
		<div {...attr}>
			<span className={"position-relative d-flex align-items-center mx-1 "}>
				<RatingStar className=""value="1"rating={rating}/>
				<RatingStar className=""value="2"rating={rating}/>
				<RatingStar className=""value="3"rating={rating}/>
				<RatingStar className=""value="4"rating={rating}/>
				<RatingStar className=""value="5"rating={rating}/>
			</span>
			<span className='d-flex align-items-center mx-1'>({formatRating(rating)})</span>
		</div>
	)
};