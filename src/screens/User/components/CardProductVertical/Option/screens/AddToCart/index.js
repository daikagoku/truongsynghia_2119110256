import {memo,useContext} from 'react';
import clsx from 'clsx';
import {ProductContext} from '../../..//index';
import useCartModel from '../../../../../../../model/Cart/';
import {Icon} from '../../../../../../../components/';
import ProductOptionItem from '../../components/Item/';
function ProductAddToCartButton({...props}){
	const data = useContext(ProductContext) ?? {};
	const [store,handleStore] = useCartModel();
	function handleClick(event){
		handleStore.add({
			productId:data.id,
			version:data.version,
			quantity:1
		})
	};
	return(
		<ProductOptionItem onClick={handleClick}>
    		<Icon className="fas fa-cart-plus"/>
    	</ProductOptionItem> 
	)
}
export default memo(ProductAddToCartButton);