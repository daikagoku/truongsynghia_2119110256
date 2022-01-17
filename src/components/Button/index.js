import './index.css';
import {forwardRef,useRef,memo} from 'react';
import {getApiByParams} from '../../core/Config';
import {Link} from 'react-router-dom';
function Button({params,href,to,children,onClick,className,disabled,type,...props},ref){
		let Component = 'button';
		const thisRef = useRef();
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
			_Attr.type = type;
		};
		if(disabled === true){
			_Attr.className+=" disabled";
		}
		if(href !== undefined){
			Component = "a";
			_Attr.href = href+getApiByParams(params);
		}else if(to !== undefined){
			Component = Link;
			_Attr.to = to+getApiByParams(params);
		};
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
export default memo(forwardRef(Button));