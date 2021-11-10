import {List,Item,Button,Icon} from '../../tags';
import {useContext} from 'react';
import {ProductContext} from '../index';
import {CartContext} from '../../../model/Cart/';
import './index.css';
export default function ProductOption({className,...props}){
	const data = useContext(ProductContext) ?? {};
	const [cartStore,handleCart] = useContext(CartContext);
	function handleClick(event){
		handleCart({
			key:'add_product',
			value:{
				id:data.id,
				quantity:1
			}
		})
	};
	return(
		<List className={"product-option "+className}>
    		<Item>
    			<Button className="product-option-btn">
    				<Icon className="far fa-heart"/>
    			</Button>
    		</Item>
			<Item>
    			<Button className="product-option-btn">
    				<Icon className="fas fa-align-left"/>
    			</Button>
    		</Item>
    		<Item>
    			<Button className="product-option-btn">
    				<Icon className="far fa-eye"/>
    			</Button>
    		</Item>
    		<Item>
    			<Button className="product-option-btn" onClick={handleClick}>
    				<Icon className="fas fa-cart-plus"/>
    			</Button>
    		</Item>    				
    	</List>
	);
};