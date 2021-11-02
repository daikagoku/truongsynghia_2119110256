import {memo} from 'react';
import {List,Item,Button,Image} from '../../tags/Tags';

export default memo(function FooterPayment(){
	const listItem = [
		"visa.png",
		"paypal.png",
		"momo.png",
		"mastercard.png",
		"agribank.png",
		"vietcombank.png"
	]
	return(
		<List className="footer-payment d-flex flex-wrap"listItem={listItem}>
	    	{
	    		(item,index)=>(
	    			<Item key={index}className="footer-payment-item hs-0em hs-2x m-1">
				  		<Button className="footer-payment-button square-btn h-100 p-1">
				  			<Image className="img-contain" src={"/img/"+item}></Image>
				  		</Button>	
				  	</Item>
	    		)
	    	}
	    </List>
   	)
})