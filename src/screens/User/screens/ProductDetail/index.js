
import './index.css';
import {
	useReducer,
	useEffect,
	createContext,
	memo,
	useMemo
} from 'react';
import useFetch from '../../../../core/useFetch';
import ProductDetailContent from './screens/Content/';
import ProductDetailLoading from './screens/Loading/';
import ProductDetailThumbnail from './screens/Thumbnail/';
export default memo(function({history,location,match}){
	const args = location.pathname.split("/");
	const sectionAttr = {
			id:"product-detail",
			className:"container-fluid"
		};
		return(
			<section {...sectionAttr}>
				<div className="container">
					<div className="row">
						<ProductDetailThumbnail
							args = {args}
							className="col col-12 col-md-6 p-1"
						/>
						<ProductDetailContent
							args = {args}
							className="col col-12 col-md-6 p-1"
						/>
					</div>
				</div>
			</section>
		)
});
