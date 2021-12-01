import {Button,Icon} from '../../../../../../../components/';
import useCartModel  from '../../../../../../../model/Cart/';
import {useState,useMemo,useEffect,useContext} from 'react';
import {ProductContext,ProductDetailContext} from '../../../init';
import './index.css';
export default function() {
	const [state,dispatch] = useContext(ProductDetailContext);
	const data = useContext(ProductContext);
	const [store,handleStore] = useCartModel();
	function handleClick(event){
		handleStore.add({
			productId:data.id,
			version:data.version,
			quantity:state.quantity
		})
	};
	const buttonAttr={
		className:"product-card-detail-add-to-cart square-btn",
		onClick:handleClick
	}
	return(
		<Button {...buttonAttr}>
			<Icon icon="fas fa-shopping-cart"/>
			<span>Thêm vào giỏ hàng</span>
		</Button>	
	)
}