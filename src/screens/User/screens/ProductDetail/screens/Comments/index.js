import {
	Widget,List
} from '../../../components/';
import Comment from './Comment';
export default function(){
	return(			
		<div className="product-card-detail-content row">
			<div className="col col-12">
				<Widget title="Nhận xét về sản phẩm">
					<div className="row">
						<Comment />
					</div>
				</Widget>
			</div>
		</div>
	)
}