import {memo} from 'react';
import clsx from 'clsx';
import GroupPage from './screens/GroupPage/';
import Sidebar from './screens/Sidebar/'
import { useLocation} from 'react-router-dom';
import {ProductCategoryContext} from './init';
import useSearchModel from '../../../../model/Search/';
function ProductCategory({...props}){
	const [search,handleSearch] = useSearchModel();
	return(
		<ProductCategoryContext.Provider value = {[search,handleSearch]}>
			<section className="container-fluid"id="product-category">
				<section className="container">
					<div className="row">
						<div className="col col-3">
							<Sidebar/>
						</div>
						<div className="col col-9">
							<GroupPage/>
						</div>
					</div>	
				</section>	
			</section>
		</ProductCategoryContext.Provider>
	)
}
export default memo(ProductCategory);