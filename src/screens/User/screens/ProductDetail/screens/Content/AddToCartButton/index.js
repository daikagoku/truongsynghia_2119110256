import {Button,Icon} from '../../../../../../../components/';
import useCartModel  from '../../../../../../../model/Cart/';
import {useState,useMemo,useEffect,useContext} from 'react';
import {ProductContext,ProductDetailContext} from '../../../init';
import './index.css';
export default function() {
	const [state,dispatch] = useContext(ProductDetailContext);
	const data = useContext(ProductContext);
	let version = {}
	if(Array.isArray(data.versions)){
		version=data.versions.find(function(_version,_index){
			return _version.id===data.version;
		})
	};
	const [store,handleStore] = useCartModel();
	function handleClickAdd(event){
		handleStore.add({
			productId:data.id,
			version:data.version,
			quantity:state.quantity
		})
		dispatch({
			key:"reset_quantity"
		})
	};
	const buttonAttr={
			className:"product-card-detail-add-to-cart square-btn"
	}
	if(version.price !== undefined){
		return(
			<Button {...buttonAttr} onClick={handleClickAdd}>
				<Icon icon="fas fa-shopping-cart"/>
				<span>Thêm vào giỏ hàng</span>
			</Button>	
		)
	}else{
		return(
			<Button {...buttonAttr}>
				<Icon icon="fas fa-phone-alt"/>
				<span>Liên hệ</span>
			</Button>	
		)
	}
}