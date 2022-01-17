
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
import ProductDetailThumbnail from './screens/Thumbnail/';
export default memo(function({...props}){

	const [search,handleSearch] = useSearchModel();
	const sectionAttr = {
			id:"product-detail",
			className:"container-fluid"
		};
		return(
			<section {...sectionAttr}>
				<div className="container">
					<div className="row">
						<ProductDetailThumbnail
							handleSearch = {handleSearch}
							search={search}
							className="col col-12 col-md-6 p-1"
						/>
						<ProductDetailContent
							handleSearch = {handleSearch}
							search={search}
							className="col col-12 col-md-6 p-1"
						/>
					</div>
				</div>
			</section>
		)
});
