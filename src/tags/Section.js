import {forwardRef} from 'react';
export default forwardRef(function Section({children,...props},ref){
		const _Attr= {...props};
		if(ref !== undefined){
			_Attr.ref = ref;
		};
		return(
			<section 
				{..._Attr}
			>
				{children}
			</section>
		);
	});
