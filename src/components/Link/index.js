import './index.css';
import {forwardRef,useRef,memo} from 'react';
import {Link} from 'react-router-dom';
import {getApiByParams} from '../../core/Config';
const LinkTag = (function(){
	return function({params,href,to,children,onClick,className,type,...props},ref){
		let Component = "a";
		let thisRef = useRef();
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
		if(href !== undefined){
			_Attr.href = href;
			if(params !== undefined){
			_Attr.href+=getApiByParams(params)
		}
		}else if(to !== undefined){
			Component = Link;
			_Attr.to = to;
			if(params !== undefined){
			_Attr.to+=getApiByParams(params)
		}
		};
		if(params !== undefined){
			_Attr.href+=getApiByParams(params)
		}
		_Attr.onClick = function(event){
			event.this = thisRef.current;
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