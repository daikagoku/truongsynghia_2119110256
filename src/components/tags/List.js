import {forwardRef,memo} from 'react';
import './List.css';
import Item from './Item';
const List = (function(){
	function renderChildren(listItem,children,itemAttr){
			if(typeof(children) === 'function'){
				if(Array.isArray(listItem)){
					return listItem.map(function(_item,_index,_this){
						if(itemAttr === undefined || typeof itemAttr !== 'object'){
							return children(_item,_index,_this.length);
						}else{
							return(
								<Item key={_index}{...itemAttr}>
									{children(_item,_index,_this.length)}
								</Item>				
							)
						}				
					})
				}else{
					return (<></>)
				}
			}else{
				return children;
			};
	};
	function renderListChildren(listItem,children,itemAttr){
		if(children !== undefined){
			if(Array.isArray(children)){
				return children.map(function(element, index) {
					return renderChildren(listItem,element,itemAttr);
				});
			}else{
				return renderChildren(listItem,children,itemAttr);
			}
		}
	};
	return function({children,listItem,filter,sort,className,itemAttr,...props},ref){
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
				<ul {..._Attr}>
					{
						renderListChildren(_listItem,children,itemAttr)
					}
				</ul>
			);
		}else{
			return <></>
		}
	};	
})();
export default memo(forwardRef(List));