import {Button,Icon} from '../../../../../components/';
import {useReducer,useContext,useRef,memo} from 'react';
import Offcanvas
	from '../../../../../components/Offcanvas/';
import useCartModel from '../../../../../model/Cart';
import useFetch from '../../../../../core/useFetch';
import {HeaderCartContext} from './init';
import HeaderCartContentList from './List/';
import HeaderCartContentButtons from './Buttons/';
import './index.css';
export default memo(function HeaderCart(){
	const OffcanvasRef = useRef();
	const [store,handleStore] = useCartModel();
	const [datas] = useFetch({
		keyApi:'product',
		initData:[]
	});
	const listItem = Array.from(store,function(item){
		if(item){
			const newItem = datas.find(function(data){
				if(data){
					return data.id === item.productId;
				}
			})
			return {...newItem,...item};
		}
	})
	const cartAttr = {
		className:"header-cart",
		onMouseDown:function(event){
			event.preventDefault();
		}
	};
	if(OffcanvasRef.current && OffcanvasRef.current.state.open){
		cartAttr.className+=" active";
	};
	const buttonAttr = {
		className:"header-cart-button circle-btn",
		onClick:function(){
			if(OffcanvasRef.current){
				OffcanvasRef.current.handle.open();
			}
		}
	};
	return(
	<HeaderCartContext.Provider value={[listItem,handleStore]}>
		<div {...cartAttr}>
			<Button {...buttonAttr}>
				<Icon icon="fab fa-opencart"/>
				<span className="header-cart-total">{listItem.length}</span>
			</Button>
			<Offcanvas ref={OffcanvasRef} title="Giỏ hàng" position="right">
				<HeaderCartContentList />
				<HeaderCartContentButtons/>
			</Offcanvas>
		</div>
		</HeaderCartContext.Provider>
	)
})