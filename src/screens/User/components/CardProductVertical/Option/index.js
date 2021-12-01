import {List,Item,Button,Icon} from '../../../../../components/';
import {useContext} from 'react';
import {ProductContext} from '../index';
import useCartModel from '../../../../../model/Cart/';
import './index.css';

export default function ProductOption({className,...props}){
	const data = useContext(ProductContext) ?? {};
	const [store,handleStore] = useCartModel();
	function handleClick(event){
		handleStore.add({
			productId:data.id,
			version:data.version,
			quantity:1
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
    			<Button className="product-option-btn" 
    				onClick={handleClick}>
    				<Icon className="fas fa-cart-plus"/>
    			</Button>
    		</Item>    				
    	</List>
	);
};