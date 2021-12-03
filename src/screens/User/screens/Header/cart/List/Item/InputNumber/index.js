import {useContext,memo} from 'react';
import {Input} from '../../../../../../../../components/';
import {CartProductContext} from '../init';

export default memo(function(){
	const data  = useContext(CartProductContext) ?? {};
	return(
		<span className="header-cart-list-card-number">Số lượng: {data.quantity}</span>
	)
});