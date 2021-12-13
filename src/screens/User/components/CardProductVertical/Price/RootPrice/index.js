

import {useContext,memo} from 'react';
import {ProductContext} from '../../index';
export default memo(function ProductRootPrice({attr,styles}){
	const data = useContext(ProductContext) ?? {};
	let version = {}
	const _attr = {...attr};
	if(Array.isArray(data.versions)){
		version=data.versions.find(function(_version,_index){
			return _version.id===data.version;
		})
	};
	if(version !== undefined && version.price !== undefined && version.salePrice !== undefined){
		const text=version.price+"$";
		_attr.className+=" "+styles.root;
		return (<span {..._attr}>{text}</span>)
	}else{
		return <></>
	};
});