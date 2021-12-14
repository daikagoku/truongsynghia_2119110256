import './index.css';
import {useContext,memo} from 'react';
import {Button,Icon} from '../../../../../../../components/';
import {CartProductContext} from './init';
import ProductInputNumber from './InputNumber/';
import ProductThumbnail from './Thumbnail/';
import ProductTitle from './Title/';
import ProductPrice from './Price/';
import ProductOption from './Option/';
export default memo(function({data,index}){
	if(data){
		return(
			<CartProductContext.Provider value={{data,index}}>
				<div className="row header-cart-list-card">
					<div className="col col-4 ">
						<ProductThumbnail />
					</div>
					<div className="col col-6 ">
						<ProductTitle />		
						<div className="d-flex">
							<ProductPrice sale/>
							<ProductPrice root/>
						</div>
						<ProductInputNumber />
					</div>
					<div className="col col-2 justify-content-center">
						<ProductOption />
					</div>
				</div>
			</CartProductContext.Provider>
		)
	}else{
		return <></>
	}
})