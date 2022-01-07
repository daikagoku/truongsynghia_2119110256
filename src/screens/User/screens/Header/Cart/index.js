import {Button,Icon,Offcanvas} from '../../../../../components/';
import {useRef,memo} from 'react';
import useCartModel from '../../../../../model/Cart';
import './index.css';
export default memo(function HeaderCart(){
	const OffcanvasRef = useRef();
	const [cart,handleCart] = useCartModel();
	const totalItem = cart.data.reduce(function(results,item){
		return results+item.quantity;
	},0)
	const cartAttr = {
		className:"header-cart"
	};
	if(OffcanvasRef.current && OffcanvasRef.current.isShow){
		cartAttr.className+=" active";
	};
	const buttonAttr = {
		className:"header-button circle-btn",
		onClick:function(){
			handleCart.toggle();
		}
	};
	return(
		<div {...cartAttr}>
			<Button {...buttonAttr}>
				<Icon icon="fab fa-opencart"/>
				<span className="header-cart-total">{totalItem}</span>
			</Button>
		</div>
	)
})