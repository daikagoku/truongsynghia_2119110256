import ComponentStyle from '../core/ComponentStyle';
import './Link.css';
import {forwardRef} from 'react';
import {Link} from 'react-router-dom';

const LinkTag = (function(){
	return function({href,to,children,onClick,className,...props},ref){
		const _Attr= {
			...props,
			className:'link',
			to:"/"
		};
		let Component = "a"
		if(className !== undefined){
			_Attr.className +=" "+className;
		};
		if(ref !== undefined){
			_Attr.ref = ref;
		};
		if(href !== undefined){
			_Attr.href = href;
		}else if(to !== undefined){
			Component = Link;
			_Attr.to = to;
		};
		_Attr.onClick = function(event){
			event.this = event.target.closest('[data-type="link"]:not(.disabled)');
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
export default forwardRef(LinkTag);