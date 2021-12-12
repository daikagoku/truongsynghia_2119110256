import {Button,Icon,Offcanvas} from '../../../../../components/';
import {useRef,memo} from 'react';
import useCartModel from '../../../../../model/Cart';
import useFetch from '../../../../../core/useFetch';
import {HeaderCartContext} from './init';
import HeaderCartContentList from './List/';
import HeaderCartContentButtons from './Buttons/';
import './index.css';
export default memo(function HeaderCart(){
	const OffcanvasRef = useRef();
	const [cart,handleCart] = useCartModel();
	const [datas] = useFetch({
		keyApi:'product',
		initData:[]
	});
	const totalItem = cart.reduce(function(results,item){
		return results+item.quantity;
	},0)
	const listItem = cart.map(function(item){
		if(item){
			const newItem = datas.find(function(data){
				if(data){
					return data.id === item.productId;
				}
			})
			return {...newItem,...item};
		}
	});
	const cartAttr = {
		className:"header-cart"
	};
	if(OffcanvasRef.current && OffcanvasRef.current.state.show){
		cartAttr.className+=" active";
	};
	const buttonAttr = {
		className:"header-button circle-btn",
		onClick:function(){
			if(OffcanvasRef.current){
				OffcanvasRef.current.handle.show();
			}
		}
	};
	return(
	<HeaderCartContext.Provider value={[listItem,handleCart]}>
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