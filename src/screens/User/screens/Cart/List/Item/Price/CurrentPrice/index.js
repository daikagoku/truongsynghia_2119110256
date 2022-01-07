
import {useContext,memo} from 'react';
import {ProductContext} from '../../init';
export default function ProductCurrendPrice({attr,styles}){
	const {data} = useContext(ProductContext) ?? {};
	let text="";
	const _attr = {...attr};
	if(data.salePrice && data.price){
		text=data.salePrice+"$";
		_attr.className+=" "+styles.sale;
		return (<span {..._attr}>{text}</span>)
	}else if(data.price){
		text=data.price+"$";
		return (<span {..._attr}>{text}</span>)
	}else{
		return (<span {..._attr}>Liên hệ</span>)
	};	
};