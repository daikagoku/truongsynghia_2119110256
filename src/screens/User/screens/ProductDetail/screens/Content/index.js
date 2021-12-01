import {
	Widget
} from '../../../../../../components/';
import './index.css';

import ProductDetailThumbnail from './Thumbnail/';

import ProductDetailTitle from './Title/';
import ProductDetailVersion from './Version/';
import ProductDetailInputQuantity from './InputQuantity/';
import ProductDetailAddToCartButton from './AddToCartButton/';

import ProductDetailCurrentPrice from './CurrentPrice/';
import ProductDetailRootPrice from './RootPrice/';
export default function() {
	return(
		<div className="product-detail-content row">
			<div className="col col-6">
				<Widget prefix="product-detail-content" className="h-12">
					<ProductDetailThumbnail />
				</Widget>
			</div>
			<div className="col col-6">
				<Widget prefix="product-detail-content" className="h-12">
					<ProductDetailTitle />
					<div className="row">
						<div className="col col-4">
							<span>Phiên bản:</span>
						</div>
						<div className="col col-8">
							<div className="row">
								<ProductDetailVersion />
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col col-4">
							<span>Giá:</span>
						</div>
						<div className="col col-8">
							<div className="row">
								<ProductDetailCurrentPrice />
								<ProductDetailRootPrice />
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col col-4">
							<span>Số lượng:</span>
						</div>
						<div className="col col-8">
							<div className="row">
								<ProductDetailInputQuantity />
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col col-12">
							<ProductDetailAddToCartButton />
						</div>
					</div>	
				</Widget>
			</div>
		</div>
	)
}