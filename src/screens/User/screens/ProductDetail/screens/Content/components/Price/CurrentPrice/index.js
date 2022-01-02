
import {useContext,memo} from 'react';
import {ProductContext} from '../../../init';
export default function ProductCurrendPrice({styles,attr}){
	const data = useContext(ProductContext) ?? {};
	let text="";
	const _attr = {...attr};
	_attr.className+=" "+styles.current;
	if(data && data.salePrice && data.price ){
		text=data.salePrice+"$";
		_attr.className+=" "+styles.sale;
		return (<span {..._attr}>{text}</span>)
	}else if(data && data.price ){
		text=data.price+"$";
		return (<span {..._attr}>{text}</span>)
	}else{
		return (<span {..._attr}>Liên hệ</span>)
	};		
};