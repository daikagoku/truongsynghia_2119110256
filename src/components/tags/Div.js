import { forwardRef } from 'react'
export default forwardRef(function Div({children,...props},ref){
		const _Attr= {
			...props
		};
		if(ref !== undefined){
			_Attr.ref = ref;
		};
		return(
			<div 
				{..._Attr}
			>
				{children}
			</div>
		);
	});	
