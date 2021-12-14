import './index.css';
import {forwardRef,memo} from 'react';
function Icon({className,icon,iconHover,hover,...props},ref){
		const _Attr = {
			...props,
			className:'icon'
		};
		if(className !== undefined){
			_Attr.className+=" "+className;
		};
		if(hover === true && iconHover !== undefined){
			_Attr.className+=" "+iconHover;
		}else{
			_Attr.className+=" "+icon;
		};
		if(ref !== undefined){
			_Attr.ref = ref;
		};
		return(
			<span
				{..._Attr}
			/>
		);
	};
export default memo(forwardRef(Icon));