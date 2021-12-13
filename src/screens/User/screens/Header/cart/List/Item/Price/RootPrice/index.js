

import {useContext,memo} from 'react';
import {CartProductContext} from '../../init';
export default function ProductRootPrice({attr,styles}){
	const {data} = useContext(CartProductContext) ?? {};
	let version = {}
	if(Array.isArray(data.versions)){
		version=data.versions.find(function(_version,_index){
			return _version.id===data.version;
		})
	};
	const _attr = {...attr};
	if(version !== undefined && version.price !== undefined && version.salePrice !== undefined){
		const text=version.price+"$";
		_attr.className+=" "+styles.root;
		return (<span {..._attr}>{text}</span>)
	}else{
		return <></>
	};
};