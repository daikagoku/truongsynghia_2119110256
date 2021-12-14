import LoadingDualRing from '../../../../../../../../components/Loading/LoadingDualRing/';
import './index.css';

export default function() {
	return (
		<div className="group-flash-sale-loading">
			<LoadingDualRing />
			<span className="text">Đang tải dữ liệu</span>
		</div>
	)
}