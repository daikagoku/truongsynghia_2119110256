import './Link.css';
import {useImperativeHandle,forwardRef,useRef,memo} from 'react';
import {Link} from 'react-router-dom';

const LinkTag = (function(){
	return function({href,to,children,onClick,className,type,...props},ref){
		let Component = "a";
		let linkRef = useRef();
		const _Attr= {
			...props,
			ref:ref,
			type:"link",
			className:'link',
			to:"/"
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
			_Attr.href = href;
		}else if(to !== undefined){
			Component = Link;
			_Attr.to = to;
		};
		_Attr.onClick = function(event){
			event.this = linkRef.current;
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
export default memo(forwardRef(LinkTag));