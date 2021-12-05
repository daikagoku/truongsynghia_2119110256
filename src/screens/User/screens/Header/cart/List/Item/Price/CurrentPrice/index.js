
import {useContext,memo} from 'react';
import {CartProductContext} from '../../init';
export default function ProductCurrendPrice(){
	const data = useContext(CartProductContext) ?? {};
	let version = {}
	if(Array.isArray(data.versions)){
		version=data.versions.find(function(_version,_index){
			return _version.id===data.version;
		})
	};
	let text="";
	if(version !== undefined && version.salePrice !== undefined && version.price !== undefined){
		text=version.salePrice+"$";
	}else if(version !== undefined && version.price !== undefined){
		text=version.price+"$";
	};
	return text;	
};