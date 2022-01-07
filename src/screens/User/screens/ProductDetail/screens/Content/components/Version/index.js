import {useContext,useEffect} from 'react';
import {List,Item,Button,Icon} from '../../../../../../../../components/';
import useFetch from '../../../../../../../../core/useFetch';
import styles from './index.module.css';
import clsx from 'clsx';
import {ProductContext,ProductDetailContext} from '../../init';
export default function() {
	const [state,dispatch] = useContext(ProductDetailContext);
	const data = useContext(ProductContext);
	const [dataFetch] = useFetch({
        initData:[],
        position: 'product-detail-version',
        keyApi:'product',
        uriApi:'/version',
        params:{
        	id:data.id || -1
        }
    });
	return(
		<div className="row product-detail-attr">
			<div className="col col-4 justify-content-center">
				<span>Phiên bản:</span>
			</div>
			<div className="col col-8">
				<div className="d-flex">
					<List className="d-flex" >
						{
							dataFetch.data.map(function(item,index){
								return (
									<Item key={index}className="d-flex">
										<Button 
											className={clsx(styles.button,"square-btn",{[styles.active]:(item.id === data.versionId)})} 
											to={item.alias}
										>
											{item.title}
										</Button>
									</Item>
								)
							})
						}
					</List>	
				</div>
			</div>
		</div>
	)
}