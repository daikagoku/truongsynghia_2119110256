import {List,Item,Button,Icon} from '../../../../../../../../components/';
import {useContext,memo} from 'react';
import {HeaderCartContext} from '../../../init';
import {CartProductContext} from '../init';
import './index.css';
export default memo(function ProductOption({className,...props}){
	const [store,handleStore] = useContext(HeaderCartContext);
	const {data,index} = useContext(CartProductContext);
	function handleClick(event){
		handleStore.delete(index);
	};
	return(
		<Button onClick={handleClick} className="header-cart-list-card-delete square-btn">
			<Icon icon="fas fa-trash-alt"></Icon>
		</Button>
	);
});