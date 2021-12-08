import {memo} from 'react';
import clsx from 'clsx';
import './index.css';
import {Item,Button} from '../../../../../../../components/';
function ProductOptionItem({children,className,...props}){
	return(
		<Item className="product-option-item">
    		<Button className={clsx("product-option-btn",{className:className})}{...props}>
    			{children}
    		</Button>
    	</Item> 
	)
}
export default memo(ProductOptionItem);