import {forwardRef} from 'react';
import './List.css';
import ComponentStyle from '../core/ComponentStyle';
const List = (function(){
	function renderChildren(listItem,children){
			let html;
			if(typeof(children) === 'function' && listItem !== undefined && Array.isArray(listItem)){
				html = listItem.map(function(_item,_index,_this){
					return children(_item,_index,_this.length);					
				})
			}else{
				html = children;
			}
		return html;
	};
	function renderListChildren(listItem,children){
		if(children !== undefined){
			if(Array.isArray(children)){
				return children.map(function(element, index) {
					return renderChildren(listItem,element);
				});
			}else{
				return renderChildren(listItem,children);
			}
		}
	};
	return function({children,listItem,filter,sort,className,...props},ref){
		let _listItem = listItem;
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
		if((_listItem!==undefined && Array.isArray(_listItem)) || children!==undefined){
			if(filter !== undefined && typeof(filter)==='function'){
				_listItem = _listItem.filter(function(__item,__index){
					return filter(__item,__index);
				})
			};
			if(sort !== undefined && typeof(sort)==='function'){
				_listItem.sort(function(a,b){
					let tmp = sort(a,b);
					return tmp;
				});
			};
			return(
				<ul {...ComponentStyle(_Attr)}>
					{
						renderListChildren(_listItem,children)
					}
				</ul>
			);
		}else{
			return <></>
		}
	};	
})();
export default forwardRef(List);