import {memo} from 'react';
import clsx from 'clsx';
import GroupPage from './screens/GroupPage/';
import Sidebar from './screens/Sidebar/'
import {useLocation} from 'react-router-dom';
function ProductCategory({...props}){
	const location = useLocation();
	const args = location.pathname.split("/");
	return(
			<section className="container-fluid"id="product-category">
				<section className="container">
					<div className="row">
						<div className="col col-3">
							<Sidebar args = {args}/>
						</div>
						<div className="col col-9">
							<GroupPage args = {args}/>
						</div>
					</div>	
				</section>	
			</section>
	)
}
export default memo(ProductCategory);