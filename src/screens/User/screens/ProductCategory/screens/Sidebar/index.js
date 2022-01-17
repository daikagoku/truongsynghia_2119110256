import {memo} from 'react';
import clsx from 'clsx';
import {Widget} from "../../../../../../components/";
import CategoryList from "./screens/CategoryList/";
import RatingList from "./screens/RatingList/";
import './index.css';
function Sidebar(){
	return(
		<section className="row">
			<div className="col col-12">
				<Widget title="Điện thoại:"className="m-1"prefix="prouduc-category">
					<CategoryList 
						keyApi ="category"
              			params = {{parent_alias:'dien-thoai'}}
              		/>
				</Widget>
				<Widget title="Máy tính:"className="m-1"prefix="prouduc-category">
					<CategoryList 
						keyApi ="category"
              			params = {{parent_alias:'may-tinh'}}
              		/>
				</Widget>
				<Widget title="Phụ kiện:"className="m-1"prefix="prouduc-category">
					<CategoryList 
						keyApi ="category"
              			params = {{parent_alias:'phu-kien'}}
              		/>
				</Widget>
				<Widget title="Đánh giá:"className="m-1"prefix="product-category">
              		<RatingList />
				</Widget>
			</div>
		</section>
	)
}
export default memo(Sidebar);