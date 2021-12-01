import {memo} from 'react';
import './index.css';
import {List,Item,Button,Image} from '../../../../../components/';

export default memo(function FooterPayment(){
	const listItem = [
		"visa.png",
		"paypal.png",
		"momo.png",
		"mastercard.png",
		"agribank.png",
		"vietcombank.png"
	];
	return(
		<List className="footer-payment-list"listItem={listItem}>
	    	{
	    		(item,index)=>(
	    			<Item key={index}className="footer-payment-item m-1">
				  		<Button className="footer-payment-button square-btn p-1">
				  			<Image className="img-contain" src={"/img/"+item}></Image>
				  		</Button>	
				  	</Item>
	    		)
	    	}
	    </List>
   	)
})