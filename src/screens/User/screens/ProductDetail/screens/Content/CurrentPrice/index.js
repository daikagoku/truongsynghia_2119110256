import './index.css';
import {useContext} from 'react';
import {ProductContext,ProductDetailContext} from '../../../init';
export default function ProductCurrendPrice({...props}){
	const [state,dispatch] = useContext(ProductDetailContext) ?? {};
	const data = useContext(ProductContext);
	let version = {}
	if(Array.isArray(data.versions)){
		version=data.versions.find(function(_version,_index){
			return _version.id===data.version;
		})
	};
	const attr={
		...props
	};
	attr.className+=" product-detail-price current";

	let text="Liên hệ";
	if(version !== undefined && version.salePrice !== undefined && version.price !== undefined){
		attr.className+=" sale";
		text=version.salePrice+"$";
	}else if(version !== undefined && version.price !== undefined){
		text=version.price+"$";
	};
	return(
		<span {...attr}>{text}</span>
	)		
};