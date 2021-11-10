import './index.css';
import {useContext} from 'react';
import {Button,Icon} from '../../../tags';
import {CartContext} from '../../../../model/Cart/';
import {
	ProductContext,
	ProductTitle,
	ProductThumbnail,
	ProductRootPrice,
	ProductCurrentPrice
} from '../../../product/';
import InputNumber from '../InputNumber/';
export default function({data,index}){
	const [cartStore,handleCart] = useContext(CartContext);
	function handleClick(event){
		handleCart({
			key:'delete_product',
			value:{
				id:data.id
			}
		})
	};
	return(
	<ProductContext.Provider value={data}>
		<div className="row header-cart-list-card">
			<div className="col col-4 ">
				<ProductThumbnail />
			</div>
			<div className="col col-6 ">
				<ProductTitle />		
				<div className="d-flex">
					<ProductCurrentPrice />
					<ProductRootPrice />
				</div>
				<InputNumber />
			</div>
			<div className="col col-2 justify-content-center">
				<Button onClick={handleClick} className="header-cart-list-card-delete square-btn">
					<Icon icon="fas fa-trash-alt"></Icon>
				</Button>	
			</div>
		</div>
	</ProductContext.Provider>
	)
}