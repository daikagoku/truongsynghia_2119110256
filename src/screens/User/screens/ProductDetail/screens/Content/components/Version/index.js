import {useContext,useEffect} from 'react';
import {List,Item,Button,Icon} from '../../../../../../../../components/';
import styles from './index.module.css';
import clsx from 'clsx';
import {ProductContext,ProductDetailContext} from '../../../../init';

console.log(styles)
export default function() {
	const [state,dispatch] = useContext(ProductDetailContext);
	const data = useContext(ProductContext);
	return(
		<List className="d-flex" >
			{
				data.versions.map(function(item,index){
					return (
						<Item key={index}className="d-flex">
							<Button 
								className={clsx(styles.button,"square-btn",{[styles.active]:(item.id === data.version)})} 
								to={item.alias}
							>
								{item.title}
							</Button>
						</Item>
					)
				})
			}
		</List>
	)
}