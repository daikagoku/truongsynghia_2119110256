
import {useContext,memo} from 'react';
import {CartProductContext} from '../../init';
export default function ProductCurrendPrice({attr,styles}){
	const {data} = useContext(CartProductContext) ?? {};
	let version = {}
	if(Array.isArray(data.versions)){
		version=data.versions.find(function(_version,_index){
			return _version.id===data.version;
		})
	};
	let text="";
	if(version !== undefined && version.salePrice !== undefined && version.price !== undefined){
		text=version.salePrice+"$";
		attr.className+=" "+styles.sale;
		return (<span {...attr}>{text}</span>)
	}else if(version !== undefined && version.price !== undefined){
		text=version.price+"$";
		return (<span {...attr}>{text}</span>)
	}else{
		return (<span {...attr}>Liên hệ</span>)
	};	
};