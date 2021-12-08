import {useContext,memo} from 'react';
import {ProductContext} from '../../../../init';
export default function ProductRootPrice(){
	const data = useContext(ProductContext) ?? {};
	let version = {}
	if(Array.isArray(data.versions)){
		version=data.versions.find(function(_version,_index){
			return _version.id===data.version;
		})
	};
	let text="";
	if(version !== undefined && version.price !== undefined && version.salePrice !== undefined){
		text=version.price+"$";
	};
	return text;
};