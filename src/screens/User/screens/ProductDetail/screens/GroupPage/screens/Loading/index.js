import LoadingDualRing from '../../../../../../../../components/Loading/LoadingDualRing/';
import {memo,useContext} from 'react';
import './index.css';
import {PageContext} from '../../init';
export default memo(function() {
	const [state,dispatch] = useContext(PageContext);
	if(state.isLoading){
		return (
			<div className="group-flash-sale-loading">
				<LoadingDualRing />
				<span className="text">Đang tải dữ liệu</span>
			</div>
		)
	}else{
		return <></>
	}
})