import {useContext,useEffect,memo} from 'react';
import {List,Item,Button,Icon} from '../../../../../../../components/';
import useFetch from '../../../../../../../core/useFetch';

import styles from './index.module.css';
import clsx from 'clsx';
function ProductDetailVersion({search,handleSearch}) {
	const [dataFetch,handleFetch] = useFetch({
        initData:[],
        position: 'product-detail-version',
        keyApi:'product',
        uriApi:'/version'
    });
    useEffect(function(){
    	handleFetch.get({
    		params:{
    			alias:handleSearch.get('alias')
    		}
    	})
    },[search])
	return(
		<div className="row product-detail-attr">
			<div className="col col-4 justify-content-center">
				<span>Phiên bản:</span>
			</div>
			<div className="col col-8">
				<div className="d-flex justify-content-center">
					<List className="d-flex" >
						{
							dataFetch.data.map(function(item,index){
								const active = handleSearch.has("version_alias",item.alias);
								function onClick(){
									handleSearch.set('version_alias',item.alias);
								}
								return (
									<Item key={index}className="d-flex">
										<Button 
											onClick={onClick}
											className={clsx(styles.button,"square-btn",{[styles.active]:active})} 
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

export default memo(ProductDetailVersion);