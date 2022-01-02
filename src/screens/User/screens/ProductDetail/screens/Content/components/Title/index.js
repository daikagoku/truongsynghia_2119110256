import styles from './index.module.css';
import {useContext} from 'react';
import {ProductContext,ProductDetailContext} from '../../init';
import {Link} from '../../../../../../../../components/';
export default function ProductTitle({...props}){
	const [state,dispatch] = useContext(ProductDetailContext) ?? {};
	const data = useContext(ProductContext);
	let text = "Đang cập nhật";
	const attr={
		...props
	};
	attr.className+=" "+styles.title;
	if(data && data.title){
		text = data.title+"/"+data.versionTitle;
	};
	if(data && data.alias){
		attr.to="/productdetail/"+data.alias+"/"+data.versionAlias;
	};
	return(
		<Link {...attr}>{text}</Link>
	)
};