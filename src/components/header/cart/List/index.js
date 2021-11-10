import {List} from '../../../tags';
import {useContext} from 'react';
import {CartContext} from '../../../../model/Cart/';
import HeaderCartListItem from '../Item/';
import './index.css';
export default function HeaderCartList({children}) {
	const [cartStore,handleCart] = useContext(CartContext);
	return (
	<div className="header-cart-content-list-container">
		<List className="header-cart-content-list" listItem={cartStore} itemAttr={{className:"d-flex w-100"}}>
			{
				function(item,index){
					return (
						<HeaderCartListItem data={item}/>
					);
				}
			}
		</List>
	</div>
	)
}