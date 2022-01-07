import {Button,Icon,Offcanvas} from '../../../../components/';
import {useRef,memo,useEffect} from 'react';

import useCartModel from '../../../../model/Cart';
import {CartContext} from './init';
import CartContentList from './List/';
import CartContentEmpty from './Empty/';
import CartContentButtons from './Buttons/';
import './index.css';
export default memo(function HeaderCart(){
	const OffcanvasRef = useRef();
	const [cart,handleCart] = useCartModel();
	const totalItem = cart.data.reduce(function(results,item){
		return results+item.quantity;
	},0);
	useEffect(function(){
		if(cart.isShow){
			OffcanvasRef.current.show();
		}else{
			OffcanvasRef.current.close();
		}
	},[cart.isShow]);
	function handleShow(event){
		handleCart.show();
	}
	function handleClose(event){
		handleCart.close();
	}
	return(
	<CartContext.Provider value={[cart,handleCart]}>
		<Offcanvas ref={OffcanvasRef} 
				id="cart"
				title="Giỏ hàng" 
				position="right"
				onShow={handleShow}
				onClose={handleClose}
				widthSize="w-12 w-xs-10 w-sm-8 w-md-7 w-lg-5 w-xl-4 w-xxl-3"
			>
				{
					totalItem > 0 && (
						<>
							<CartContentList />
							<CartContentButtons/>
						</>
					)
					|| <CartContentEmpty />
				}
			</Offcanvas>
	</CartContext.Provider>
	)
})