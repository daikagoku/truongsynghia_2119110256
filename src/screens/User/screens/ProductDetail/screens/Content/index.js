import {Widget} from '../../../../../../components/';
import './index.css';
import Title from './components/Title/';
import Price from './components/Price/';
import Version from './components/Version/';
import Thumbnail from './components/Thumbnail/';
import InputNumber from './components/InputNumber/';
import AddToCartButton from './components/AddToCartButton/';


import Attr from './screens/Attr/';

export default function() {
	return(
		<div className="product-detail-content row">
			<div className="col col-12 col-md-6 py-1">
				<Widget prefix="product-detail-content" className="h-12">
					<Thumbnail />
				</Widget>
			</div>
			<div className="col col-12 col-md-6 py-1">
				<Widget prefix="product-detail-content" className="h-12">
					<Title />
					<Attr title="Phiên bản">
						<Version />
					</Attr>

					<Attr title="Giá">
						<Price/>
						<Price root/>
					</Attr>

					<Attr title="Số lượng">
						<InputNumber />
					</Attr>
					<AddToCartButton />	
				</Widget>
			</div>
		</div>
	)
}