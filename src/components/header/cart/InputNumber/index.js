import {useContext} from 'react';
import {Input} from '../../../tags/';
import {
	ProductContext
} from '../../../product/';

export default function(){
	const data  = useContext(ProductContext);
	return(
		<span className="header-cart-list-card-number">Số lượng: {data.quantity}</span>
	)
}