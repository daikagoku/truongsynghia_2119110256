
import {useContext,memo} from 'react';
import {ProductContext} from '../../index';
export default memo(function ProductCurrendPrice({attr,styles}){
	const data = useContext(ProductContext) ?? {};
	let text="";
	const _attr = {...attr};
	_attr.className+=" "+styles.current;
	if(data.salePrice && data.price ){
		text=data.salePrice+"$";
		_attr.className+=" "+styles.sale;
		return (<span {..._attr}>{text}</span>)
	}else if(data.price){
		text=data.price+"$";
		return (<span {..._attr}>{text}</span>)
	}else{
		return (<span {..._attr}>Liên hệ</span>)
	};	
});