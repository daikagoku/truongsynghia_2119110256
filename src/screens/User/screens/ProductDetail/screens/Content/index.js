import {
	Widget
} from '../../../../../../components/';
import './index.css';

import ProductDetailThumbnail from './Thumbnail/';

import ProductDetailTitle from './Title/';
import ProductDetailVersion from './Version/';
import ProductDetailInputQuantity from './InputQuantity/';
import ProductDetailAddToCartButton from './AddToCartButton/';

import ProductDetailPrice from './Price/';
export default function() {
	return(
		<div className="product-detail-content row">
			<div className="col col-12 col-md-6 py-1">
				<Widget prefix="product-detail-content" className="h-12">
					<ProductDetailThumbnail />
				</Widget>
			</div>
			<div className="col col-12 col-md-6 py-1">
				<Widget prefix="product-detail-content" className="h-12">
					<ProductDetailTitle />
					<div className="row product-detail-attr">
						<div className="col col-4 justify-content-center">
							<span>Phiên bản:</span>
						</div>
						<div className="col col-8">
							<div className="d-flex">
								<ProductDetailVersion />
							</div>
						</div>
					</div>
					<div className="row product-detail-attr">
						<div className="col col-4 justify-content-center">
							<span>Giá:</span>
						</div>
						<div className="col col-8">
							<div className="d-flex">
								<ProductDetailPrice sale/>
								<ProductDetailPrice root/>
							</div>
						</div>
					</div>
					<div className="row product-detail-attr">
						<div className="col col-4 justify-content-center">
							<span>Số lượng:</span>
						</div>
						<div className="col col-8">
							<div className="row">
								<ProductDetailInputQuantity />
							</div>
						</div>
					</div>
					<div className="row product-detail-attr">
						<div className="col col-12">
							<ProductDetailAddToCartButton />
						</div>
					</div>	
				</Widget>
			</div>
		</div>
	)
}