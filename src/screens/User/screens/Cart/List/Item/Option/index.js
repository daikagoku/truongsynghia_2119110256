import {List,Item,Button,Icon} from '../../../../../../../components/';
import useCartModel from '../../../../../../../model/Cart/';
import {useContext,memo} from 'react';
import {CartProductContext} from '../init';
import './index.css';
export default memo(function ProductOption({className,...props}){
	const [cart,handleCart] = useCartModel();
	const {data} = useContext(CartProductContext);
	function handleClick(event){
		handleCart.delete(data.id);
	};
	return(
		<Button disabled={cart.onProgress} onClick={handleClick} className="cart-list-card-delete square-btn">
			<Icon isLoading={cart.onProgress} icon="fas fa-trash-alt"></Icon>
		</Button>
	);
});