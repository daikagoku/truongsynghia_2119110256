import styles from './index.module.css';
import {useContext,memo} from 'react';
import clsx from 'clsx';
import {ProductContext} from '../init';
import {Link} from '../../../../../../../components/';
export default memo(function ProductTitle({...props}){
	const {data} = useContext(ProductContext);
	let text = "Đang cập nhật";
	const attr={
		...props,
		className:clsx(styles.title)
	};
	if(data.title !== undefined){
		text="/"+data.title+"/"+data.versionTitle;
	};
	if(data.alias !==undefined){
		attr.to="/product/detail/"+data.alias+"/"+data.versionAlias;
	};
	return(
		<Link {...attr}>{text}</Link>
	)
});