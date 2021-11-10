import './index.css';
import {useContext} from 'react';
import {ProductContext} from '../index';
export default function ProductRootPrice({...props}){
	const data = useContext(ProductContext) ?? {};
	let text=" ";
	if(data.price !== undefined && data.salePrice !== undefined){
		text=data.price+"$";
	};
	return(
		<span className="product-price root">{text}</span>
	)
};