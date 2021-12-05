import styles from './index.module.css';
import {memo} from 'react';
import clsx from 'clsx';
import CurrentPrice from './CurrentPrice/';
import RootPrice from './RootPrice/';
export default memo(function ProductPrice({className,sale,root,...props}){
	const attr={
		...props,
		className:clsx(className,styles.price)
	};
	let price = "";
	if(root){
		price = RootPrice();
		attr.className+=" "+styles.root
	}else{
		price = CurrentPrice();
		if(price !== ""){
			if(sale){
				attr.className+=" "+styles.sale
			}
		}else{
			price = "Liên hệ"
		}
	}
	if(price !== ""){
		return(
			<span {...attr}>{price}</span>
		)
	}else{
		return (<></>)
	}
			
});