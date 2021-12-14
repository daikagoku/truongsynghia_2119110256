import {forwardRef,memo} from 'react';
import './index.css';
function List({children,className,...props},ref){
		const _Attr={
			...props,
			className:'list',
		};
		if(className !== undefined){
			_Attr.className +=" "+className;
		};
		if(ref !== undefined){
			_Attr.ref = ref;
		};
		return(
			<ul {..._Attr}>
				{children}
			</ul>
		);
}
export default memo(forwardRef(List));