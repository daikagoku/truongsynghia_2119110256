import './Button.css';
import {useImperativeHandle,forwardRef,useRef,memo} from 'react';
import {Link} from 'react-router-dom';
const Button = (function(){
	return function({href,to,children,onClick,className,type,...props},ref){
		let Component = 'button';
		let buttonRef = useRef();
		const _Attr= {
			...props,
			ref:ref,
			type:"button",
			className:'button'
		};
		if(className !== undefined){
			_Attr.className +=" "+className;
		};
		if(type !== undefined){
			_Attr.type =type;
		};
		if(ref !== undefined){
			_Attr.ref = ref;
		};
		if(href !== undefined){
			Component = "a";
			_Attr.href = href;
		}else if(to !== undefined){
			Component = Link;
			_Attr.to = to;
		};
		_Attr.onClick = function(event){
			event.this = buttonRef.current;
			if(onClick !== undefined && typeof(onClick)==='function'){
				onClick(event);
			};
		};
		return(
			<Component
				{..._Attr}
			>
				{children}
			</Component>
		);
	};	
})();
export default memo(forwardRef(Button));