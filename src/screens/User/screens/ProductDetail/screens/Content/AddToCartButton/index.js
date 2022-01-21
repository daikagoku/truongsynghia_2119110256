import {Button,Icon} from '../../../../../../../components/';
import useCartModel  from '../../../../../../../model/Cart/';
import {useState,useMemo,useEffect,useContext} from 'react';
import clsx from 'clsx';
import {ProductContext,ProductDetailContext} from '../init';
import styles from './index.module.css';
export default function() {
	const [state,dispatch] = useContext(ProductDetailContext);
	const data = useContext(ProductContext);
	const [cart,handleCart] = useCartModel();
	function handleClickAdd(event){
		handleCart.add({
			productId:data.id,
			versionId:data.versionId,
			quantity:state.quantity
		})
		dispatch({
			key:"reset_quantity"
		})
	};
	const buttonAttr={
			className:clsx(styles.button,"square-btn")
	}
	if(data && data.price){
		return(
			<Button disabled={cart.onProgress}{...buttonAttr} onClick={handleClickAdd}>
				<Icon isLoading={cart.onProgress} className={clsx(styles.icon)} icon="fas fa-shopping-cart"/>
				<span className={clsx(styles.text)}>
					{cart.onProgress && `Vui lòng chờ` || `Thêm vào giỏ hàng`}
				</span>
			</Button>	
		)
	}else{
		return(
			<Button {...buttonAttr}>
				<Icon className={clsx(styles.icon)} icon="fas fa-phone-alt"/>
				<span className={clsx(styles.text)}>Liên hệ</span>
			</Button>	
		)
	}
}