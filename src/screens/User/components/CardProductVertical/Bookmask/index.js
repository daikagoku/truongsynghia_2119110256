import './index.css';
import {useContext,memo} from 'react';
import {ProductContext} from '../index';
export default memo(function ProductBookmask({...props}){
	const data = useContext(ProductContext);
	let version = {}
	if(Array.isArray(data.versions)){
		version=data.versions.find(function(_version,_index){
			return _version.id===data.version;
		})
	};
	const attr = {...props};
	attr.className+=" product-boolmask";
	if(version !== undefined && version.price !== undefined && version.price !== 0 && version.salePrice !== undefined){
		let text ="";
		if(version.salePrice === 0){
			text ="Sale 0$";
		}else{
			let percent = Math.round(100 - version.salePrice * 100 / version.price);
			text ="Giảm "+percent+"%";
		}
		return(
			<span {...attr}>
				{text}
			</span>
		);
	}else{
		return(<></>)
	}
	
});
