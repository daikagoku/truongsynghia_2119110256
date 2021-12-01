
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
		data.version = data.versions.find(function(version){
			return version.alias === args[3];
		}).id;
	return(
	<ProductDetailContext.Provider value ={[state,dispatch]}>
		<ProductContext.Provider value ={{...data}}>
			<section id="product-detail" className="container-fluid">
				<div className="container">
					<ProductDetailContent/>
				</div>
			</section>
		</ProductContext.Provider>
	</ProductDetailContext.Provider>
	)}else{
		return <></>
	}
});
