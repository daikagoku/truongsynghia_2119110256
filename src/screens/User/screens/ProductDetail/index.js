
import './index.css';
import {
	useReducer,
	useEffect,
	createContext,
	memo,
	useMemo
} from 'react';
import { useLocation} from 'react-router-dom';
import useSearchModel from '../../../../model/Search/';
import ProductDetailContent from './screens/Content/';
import ProductDetailLoading from './screens/Loading/';
import ProductDetailGroupPage from './screens/GroupPage/';
export default memo(function({...props}){
	const [search,handleSearch] = useSearchModel();
	const sectionAttr = {
			id:"product-detail",
			className:"container-fluid"
		};
		return(
			<section {...sectionAttr}>
				<div className="container">
						<ProductDetailContent
							handleSearch = {handleSearch}
							search={search}
						/>
						<ProductDetailGroupPage />
				</div>
			</section>
		)
});

/*
						*/
