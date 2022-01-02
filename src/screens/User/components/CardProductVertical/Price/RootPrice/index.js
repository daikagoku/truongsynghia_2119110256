

import {useContext,memo} from 'react';
import {ProductContext} from '../../index';
export default memo(function ProductRootPrice({attr,styles}){
	const data = useContext(ProductContext) ?? {};
	const _attr = {...attr};
	if(data.price && data.salePrice ){
		const text=data.price+"$";
		_attr.className+=" "+styles.root;
		return (<span {..._attr}>{text}</span>)
	}else{
		return <></>
	};
});