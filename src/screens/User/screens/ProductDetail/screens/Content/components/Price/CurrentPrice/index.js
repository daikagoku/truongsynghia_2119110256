
import {useContext,memo} from 'react';
import {ProductContext} from '../../../../../init';
export default function ProductCurrendPrice({styles,attr}){
	const data = useContext(ProductContext) ?? {};
	let version = {}
	if(Array.isArray(data.versions)){
		version=data.versions.find(function(_version,_index){
			return _version.id===data.version;
		})
	};
	let text="";
	const _attr = {...attr};
	_attr.className+=" "+styles.current;
	if(version !== undefined && version.salePrice !== undefined && version.price !== undefined){
		text=version.salePrice+"$";
		_attr.className+=" "+styles.sale;
		return (<span {..._attr}>{text}</span>)
	}else if(version !== undefined && version.price !== undefined){
		text=version.price+"$";
		return (<span {..._attr}>{text}</span>)
	}else{
		return (<span {..._attr}>Liên hệ</span>)
	};		
};