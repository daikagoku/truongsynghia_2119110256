import {forwardRef} from 'react';
import './Item.css';
const Item = (function(){
	return function({children,className,...props},ref){
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
export default forwardRef(Item);