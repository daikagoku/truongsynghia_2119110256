import {Button,Icon} from '../../tags';
import {useReducer,useContext} from 'react';
import {Offcanvas,initData as initOffcanvas,
	reducer as reducerOffcanvas,
	OffcanvasContext} 
	from '../../offcanvas/';
import {CartContext} from '../../../model/Cart';
import HeaderCartContentList from './List/';
import HeaderCartContentButtons from './Buttons/';
import './index.css';
export default function HeaderCart(){
	const [cartStore,handleCart] = useContext(CartContext);
	const [stateOffcanvas,dispatchOffcanvas] = useReducer(reducerOffcanvas,initOffcanvas);
	const cartAttr = {
		className:"header-cart",
		onMouseDown:function(event){
			event.preventDefault();
		}
	};
	if(stateOffcanvas.open){
		cartAttr.className+=" active";
	};
	const buttonAttr = {
		className:"header-cart-button circle-btn",
		onClick:function(){
			dispatchOffcanvas({
				key:'set_open',
				value:!stateOffcanvas.open
			})
		}
	};
	return(
	<OffcanvasContext.Provider value={[stateOffcanvas,dispatchOffcanvas]}>
		<div {...cartAttr}>
			<Button {...buttonAttr}>
				<Icon icon="fab fa-opencart"/>
				<span className="header-cart-total">{cartStore.length}</span>
			</Button>
			<Offcanvas title="Giỏ hàng" position="right">
				<HeaderCartContentList />
				<HeaderCartContentButtons/>
			</Offcanvas>
		</div>
	</OffcanvasContext.Provider>
	)
}