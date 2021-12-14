import {List,Item,Button,Icon} from '../../../../../components/';
import {useContext} from 'react';
import {ProductContext} from '../index';
import useCartModel from '../../../../../model/Cart/';
import './index.css';
import AddToCartButton from './screens/AddToCart/';
export default function ProductOption({className,...props}){
	return(
		<List className={"product-option opacity-10 opacity-md-0 "+className}>
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
    		<AddToCartButton />  				
    	</List>
	);
};