import {forwardRef,memo} from 'react';
import './index.css';
const Item = (function(){
	return function({className,children,...props},ref){
		const _Attr= {
			...props,
			className:'item'
		};
		if(className !== undefined){
			_Attr.className +=" "+className;
		};
		if(ref !== undefined){
			_Attr.ref = ref;
		};
		return(
			<li 
				{..._Attr}
			>
				{children}
			</li>
		);
	};	
})();
export default memo(forwardRef(Item));