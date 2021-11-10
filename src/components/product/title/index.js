import './index.css';
import {useContext} from 'react';
import {ProductContext} from '../index';
import {Link} from '../../tags';
export default function ProductTitle({...props}){
	const data = useContext(ProductContext) ?? {};
	let text = "Đang cập nhật";
	let alias = "";
	if(data.title !== undefined){
		text = data.title;
	};
	if(data.alias !== undefined){
		alias = data.alias;
	};
	const attr={
		...props
	};
	attr.className+=" my-1 product-title";
	if(alias!==undefined){
		attr.to="/productdetail/"+alias;
	}
	return(
		<Link {...attr}>{text}</Link>
	)
};