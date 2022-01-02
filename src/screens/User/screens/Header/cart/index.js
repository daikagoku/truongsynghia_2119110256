import {Button,Icon,Offcanvas} from '../../../../../components/';
import {useRef,memo} from 'react';
import useCartModel from '../../../../../model/Cart';
import {HeaderCartContext} from './init';
import HeaderCartContentList from './List/';
import HeaderCartContentButtons from './Buttons/';
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
			if(OffcanvasRef.current){
				OffcanvasRef.current.show();
			}
		}
	};
	return(
	<HeaderCartContext.Provider value={[cart,handleCart]}>
		<div {...cartAttr}>
			<Button {...buttonAttr}>
				<Icon icon="fab fa-opencart"/>
				<span className="header-cart-total">{totalItem}</span>
			</Button>
			<Offcanvas ref={OffcanvasRef} 
				title="Giỏ hàng" 
				position="right"
				widthSize="w-12 w-xs-10 w-sm-8 w-md-7 w-lg-5 w-xl-4 w-xxl-3"
			>
				<HeaderCartContentList />
				<HeaderCartContentButtons/>
			</Offcanvas>
		</div>
		</HeaderCartContext.Provider>
	)
})