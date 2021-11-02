import './Icon.css';
import {forwardRef} from 'react';
const Icon = (function(){
	return function({className,icon,iconHover,hover,...props},ref){
		const _Attr = {
			...props,
			className:'icon'
		};
		if(className !== undefined){
			_Attr.className+=" "+className;
		};
		if(hover !== true){
			if(icon !== undefined){
				_Attr.className+=" "+icon;
			}
		}else if(iconHover !== undefined){
				_Attr.className+=" "+iconHover;
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
})();
export default forwardRef(Icon);