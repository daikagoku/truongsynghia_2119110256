import './index.css';
import {forwardRef,memo} from 'react';
function Icon({className,isLoading,icon,iconHover,isHover,...props},ref){
		const _Attr = {
			...props,
			className:'icon'
		};
		if(className !== undefined){
			_Attr.className+=" "+className;
		};
		if(isLoading === true){
			_Attr.className+=" "+"sync fas fa-sync-alt";
		}else if(isHover === true && iconHover !== undefined){
			_Attr.className+=" "+iconHover;
		}else{
			_Attr.className+=" "+icon;
		};
		if(ref !== undefined){
			_Attr.ref = ref;
		};
		
		return(
			<span {..._Attr} />
		);
	};
export default memo(forwardRef(Icon));