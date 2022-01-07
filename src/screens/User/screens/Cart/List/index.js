import {useContext,memo} from 'react';
import {List,Item} from '../../../../../components/';
import CartListItem from './Item/';
import {CartContext} from '../init';
import './index.css';
export default memo(function CartList({children}) {
	const [cart,handleCart] = useContext(CartContext);
	const itemAttr = {
		className:"d-flex w-12"
	}
	return (
	<div className="cart-content-list-container">
		<List className="cart-content-list">
			{
				cart.data.map(function(item,index){
					return (
						<Item key={index} {...itemAttr}>
							<CartListItem data={item} index={index}/>
						</Item>
					);
				})
			}
		</List>
	</div>
	)
})