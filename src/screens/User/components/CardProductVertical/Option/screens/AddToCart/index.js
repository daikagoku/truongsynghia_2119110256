import {memo,useContext} from 'react';
import clsx from 'clsx';
import {ProductContext} from '../../..//index';
import useCartModel from '../../../../../../../model/Cart/';
import {Icon} from '../../../../../../../components/';
import ProductOptionItem from '../../components/Item/';
function ProductAddToCartButton({...props}){
	const data = useContext(ProductContext) ?? {};
	const [store,handleStore] = useCartModel();
	function handleClickAdd(event){
		handleStore.add({
			productId:data.id,
			version:data.version,
			quantity:1
		})
	};
	function handleClickContact(event){
	};
	let version = {}
	if(Array.isArray(data.versions)){
		version=data.versions.find(function(_version,_index){
			return _version.id===data.version;
		})
	};
	if(version.price !== undefined){
		return(
			<ProductOptionItem onClick={handleClickAdd}>
	    		<Icon className="fas fa-cart-plus"/>
	    	</ProductOptionItem> 
		)
	}else{
		return(
			<ProductOptionItem onClick={handleClickContact}>
	    		<Icon className="fas fa-phone-alt"/>
	    	</ProductOptionItem> 
		)
	}
}
export default memo(ProductAddToCartButton);