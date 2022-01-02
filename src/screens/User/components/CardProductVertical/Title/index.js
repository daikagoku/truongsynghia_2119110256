import './index.css';
import {useContext} from 'react';
import {ProductContext} from '../index';
import {Link} from '../../../../../components/';
export default function ProductTitle({...props}){
	const data = useContext(ProductContext) ?? {};
	let text = "Đang cập nhật";
	const attr={
		...props
	};
	attr.className+=" product-title ";
	if(data.title !== undefined){
		text = data.title+"/"+data.versionTitle;
	};
	if(data.alias!==undefined){
		attr.to="/product/detail/"+data.alias+"/"+data.versionAlias;
	};
	return(
		<Link {...attr}>{text}</Link>
	)
};