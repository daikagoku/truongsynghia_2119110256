import {useContext,useEffect} from 'react';
import {List,Button,Icon} from '../../../../../../../components/';
import './index.css';
import {ProductContext,ProductDetailContext} from '../../../init';
export default function() {
	const [state,dispatch] = useContext(ProductDetailContext);
	const data = useContext(ProductContext);
	const buttonAttr={
		className:"product-card-detail-version-btn square-btn",
	}
	return(
		<List className="product-card-detail-version" listItem={data.versions} itemAttr={{className:"d-flex"}}>
			{
				function(item,index){
					let _className ="product-card-detail-version-button square-btn";
					if(item.id === data.version){
						_className+=" active";
					}
					return (
						<Button className={_className} to={item.alias}>{item.title}</Button>
					)
				}
			}
		</List>
	)
}