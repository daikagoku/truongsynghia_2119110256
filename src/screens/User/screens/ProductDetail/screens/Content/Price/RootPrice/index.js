import {useContext,memo} from 'react';
import {ProductContext} from '../../../../init';
export default function ProductRootPrice({styles,attr}){
	const data = useContext(ProductContext) ?? {};
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