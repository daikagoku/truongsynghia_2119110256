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
		params:{},
		className:clsx(styles.title)
	};
	if(data && data.title){
		text=data.title+"/"+data.versionTitle;
	};
	if(data && data.alias){
		attr.to="/product/detail/";
		attr.params.alias = data.alias;
		attr.params.version_alias = data.versionAlias;
	};
	return(
		<Link {...attr}>{text}</Link>
	)
});