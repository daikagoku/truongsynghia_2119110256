import ComponentStyle from '../core/ComponentStyle';
import './Button.css';
import { forwardRef} from 'react';
import {Link} from 'react-router-dom';
const Button = (function(){
	return function({href,to,children,onClick,className,...props},ref){
		const _Attr= {
			...props,
			className:'button'
		};
		if(className !== undefined){
			_Attr.className +=" "+className;
		};
		if(ref !== undefined){
			_Attr.ref = ref;
		};
		let Component = 'button';
		if(href !== undefined){
			Component = "a";
			_Attr.href = href;
		}else if(to !== undefined){
			Component = Link;
			_Attr.to = to;
		};
		_Attr.onClick = function(event){
			event.this = event.target.closest('.button:not(.disabled)');
			if(onClick !== undefined && typeof(onClick)==='function'){
				onClick(event);
			};
		};
		return(
			<Component
				{...ComponentStyle(_Attr)}
			>
				{children}
			</Component>
		);
	};	
})();
export default forwardRef(Button);