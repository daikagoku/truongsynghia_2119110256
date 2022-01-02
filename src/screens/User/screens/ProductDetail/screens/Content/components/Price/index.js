import styles from './index.module.css';
import {memo} from 'react';
import clsx from 'clsx';
import CurrentPrice from './CurrentPrice/';
import RootPrice from './RootPrice/';
export default memo(function ProductPrice({className,...props}){
	const attr={
		...props,
		className:clsx(className,styles.price)
	};
	return(
		<div className="row product-detail-attr">
			<div className="col col-4 justify-content-center">
				<span>Giá:</span>
			</div>
			<div className="col col-8">
				<div className="d-flex">
					<CurrentPrice styles={{...styles}} attr={{...attr}}/>					
					<RootPrice styles={{...styles}} attr={{...attr}}/>	
				</div>
			</div>
		</div>
	)		
});