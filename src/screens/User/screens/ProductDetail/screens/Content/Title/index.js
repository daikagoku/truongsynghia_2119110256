import styles from './index.module.css';
import {useContext,memo} from 'react';
import {ProductContext,ProductDetailContext} from '../init';
import {Link} from '../../../../../../../components/';
function ProductDetailTitle({...props}){
	const data = useContext(ProductContext);
	let text = "Đang cập nhật";
	const attr={
		...props
	};
	attr.className+=" "+styles.title;
	if(data && data.title){
		text = data.title+"/"+data.versionTitle;
	};
	return(
		<Link {...attr}>{text}</Link>
	)
};
export default memo(ProductDetailTitle)