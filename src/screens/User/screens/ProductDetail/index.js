
import './index.css';
import {
	useReducer,
	useEffect,
	createContext,
	memo,
	useMemo
} from 'react';
import useFetch from '../../../../core/useFetch';
import {ProductContext,ProductDetailContext,initData,reducer} from './init';
import ProductDetailContent from './screens/Content/';
export default memo(function({history,location,match}){
	const [state,dispatch] = useReducer(reducer,initData);
	const [listItem] = useFetch({
        initData:[],
        keyApi:'product'
    });
	const args = location.pathname.split("/");
	const data = listItem.find(function(item){
			return item.alias === args[2];
	});
	if(data){
		const version = data.versions.find(function(version){
			return version.alias === args[3];
		});
		if(version){
			data.version = version.id;
			const sectionAttr = {
				id:"product-detail",
				className:"container-fluid"
			}
			return(
				<ProductDetailContext.Provider value ={[state,dispatch]}>
					<ProductContext.Provider value ={{...data}}>
						<section {...sectionAttr}>
							<div className="container">
								<ProductDetailContent/>
							</div>
						</section>
					</ProductContext.Provider>
				</ProductDetailContext.Provider>
			)
		}else{
			return <>Không tồn tại sản phẩm</>
		}
	}else{
		return <>Không tồn tại sản phẩm</>
	}
});
