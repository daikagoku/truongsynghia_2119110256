import './index.css';
import {useContext} from 'react';
import {ProductContext} from '../index';
export default function ProductCurrendPrice({...props}){
	const data = useContext(ProductContext) ?? {};
	const attr={
		...props
	};
	attr.className+=" product-price current";

	let text="Liên hệ";
	if(data.salePrice !== undefined && data.price !== undefined){
		attr.className+=" sale";
		text=data.salePrice+"$";
	}else if(data.price !== undefined){
		text=data.price+"$";
	};
	return(
		<span {...attr}>{text}</span>
	)		
};