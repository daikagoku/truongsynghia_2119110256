import {memo,useContext} from 'react';
import clsx from 'clsx';
import {ProductContext} from '../../..//index';
import useCartModel from '../../../../../../../model/Cart/';
import {Icon} from '../../../../../../../components/';
import ProductOptionItem from '../../components/Item/';
function ProductAddToCartButton({...props}){
	const data = useContext(ProductContext) ?? {};
	const [cart,handleCart] = useCartModel();
	function handleClickAdd(event){
		handleCart.add({
			productId:data.id,
			versionId:data.versionId,
			quantity:1
		})
	};
	function handleClickContact(event){
	};
	if(data.price){
		return(
			<ProductOptionItem onClick={handleClickAdd}>
	    		<Icon isLoading={cart.onProgress}  icon="fas fa-cart-plus"/>
	    	</ProductOptionItem> 
		)
	}else{
		return(
			<ProductOptionItem onClick={handleClickContact}>
	    		<Icon icon="fas fa-phone-alt"/>
	    	</ProductOptionItem> 
		)
	}
}
export default memo(ProductAddToCartButton);