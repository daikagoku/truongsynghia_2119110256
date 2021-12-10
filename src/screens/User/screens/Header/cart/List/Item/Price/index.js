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
	if(root){
		return (<RootPrice styles={styles} attr={attr}/>)
	}else{
		return (<CurrentPrice styles={styles} attr={attr}/>)
	};
			
});