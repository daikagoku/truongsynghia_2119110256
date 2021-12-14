import './index.css';
import {useContext} from 'react';
import {ProductContext,ProductDetailContext} from '../../../init';
import {Link} from '../../../../../../../components/';
export default function ProductTitle({...props}){
	const [state,dispatch] = useContext(ProductDetailContext) ?? {};
	const data = useContext(ProductContext);
	let version = {}
	if(Array.isArray(data.versions)){
		version=data.versions.find(function(_version,_index){
			return _version.id===data.version;
		})
	}
	let text = "Đang cập nhật";
	const attr={
		...props
	};
	attr.className+=" product-detail-title";
	if(data.title !== undefined){
		text = data.title;
	};
	if(version!== undefined){
		text+="/"+version.title;
	}
	if(data.alias!==undefined){
		attr.to="/productdetail/"+data.alias;
	}
	if(version!== undefined){
		attr.to+="/"+version.alias;
	}
	return(
		<Link {...attr}>{text}</Link>
	)
};