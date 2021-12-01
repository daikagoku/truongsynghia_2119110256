import './index.css';
import {useContext} from 'react';
import {ProductContext} from '../index';
export default function ProductRootPrice({...props}){
	const data = useContext(ProductContext) ?? {};
	let version = {}
	if(Array.isArray(data.versions)){
		version=data.versions.find(function(_version,_index){
			return _version.id===data.version;
		})
	};
	let text=" ";
	if(version !== undefined && version.price !== undefined && version.salePrice !== undefined){
		text=version.price+"$";
	};
	return(
		<span className="product-price root">{text}</span>
	)
};