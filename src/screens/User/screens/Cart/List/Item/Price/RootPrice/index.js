

import {useContext,memo} from 'react';
import {ProductContext} from '../../init';
export default function ProductRootPrice({attr,styles}){
	const {data} = useContext(ProductContext) ?? {};
	const _attr = {...attr};
	if(data && data.price && data.salePrice){
		const text=data.price+"$";
		_attr.className+=" "+styles.root;
		return (<span {..._attr}>{text}</span>)
	}else{
		return <></>
	};
};