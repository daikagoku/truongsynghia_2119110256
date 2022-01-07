import {memo} from 'react';
import clsx from 'clsx';
import styles from './index.module.css';
import {Thumbnail,Image} from '../../../../../components/';
import ImageNull from './assets/img/cart-null.png';
function CartEmpty({...props}){
	const _thumbnailAttr = {};
	_thumbnailAttr.thumbnailClass+=" inset-t-10";
	return(
		<Thumbnail {..._thumbnailAttr}>
    		<Image src = {ImageNull} className={clsx("img-contain",styles.image)}/>
    		<span className={clsx(styles.text)}>Giỏ hàng rỗng</span>
    	</Thumbnail>
	)
}
export default memo(CartEmpty);