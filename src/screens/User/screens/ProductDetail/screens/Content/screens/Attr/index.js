import {memo} from 'react';
import clsx from 'clsx';
import styles from './index.module.css';
function ProductDetailAttr({title,children,...props}){
	return(
		<div className="row product-detail-attr">
			<div className="col col-4 justify-content-center">
				<span>{title}:</span>
			</div>
			<div className="col col-8">
				<div className="d-flex">
					{children}
				</div>
			</div>
		</div>
	)
}
export default memo(ProductDetailAttr);