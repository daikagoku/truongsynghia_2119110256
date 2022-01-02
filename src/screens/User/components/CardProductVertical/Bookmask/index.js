import './index.css';
import {useContext,memo} from 'react';
import {ProductContext} from '../index';
export default memo(function ProductBookmask({...props}){
	const data = useContext(ProductContext);
	const attr = {...props};
	attr.className+=" product-boolmask";
	if(data.price && data.price !== 0 && data.salePrice){
		let text ="";
		if(data.salePrice === 0){
			text ="Sale 0$";
		}else{
			let percent = Math.round(100 - data.salePrice * 100 / data.price);
			text ="Giảm "+percent+"%";
		}
		return(
			<span {...attr}>
				{text}
			</span>
		);
	}else{
		return(<></>)
	}
	
});
