import './index.css';
import {useContext} from 'react';
import {ProductContext,ProductDetailContext} from '../../../init';
export default function ProductRootPrice({...props}){
	const [state,dispatch] = useContext(ProductDetailContext) ?? {};
	const data = useContext(ProductContext);
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
		<span className="product-detail-price root">{text}</span>
	)
};