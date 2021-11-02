import { forwardRef } from 'react'
import ComponentStyle from '../core/ComponentStyle';
export default forwardRef(function Div({children,...props},ref){
		const _Attr= {
			...props
		};
		if(ref !== undefined){
			_Attr.ref = ref;
		};
		return(
			<div 
				{...ComponentStyle(_Attr)}
			>
				{children}
			</div>
		);
	});	
