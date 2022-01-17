import {useContext,useMemo,useImperativeHandle,useState,forwardRef,memo,useRef,useEffect} from 'react';
import ReactDOM from 'react-dom';
import * as ReactRouterDom from 'react-router-dom';
import Time from '../../core/Time';
import {AppContext} from '../../AppInit';
import {getParamsBySearch,getApiByParams} from '../../core/Config';
export function useSearchProvider(){
	const location = ReactRouterDom.useLocation();
	const history = ReactRouterDom.useHistory();
	const data = getParamsBySearch(location.search)
	function setUrl(search){
		history.push("?"+search);
	};
	const handleSearch = {
			get:function(key){
				return data.get(key);
			},
			set:function(key,value){				
				if(value !== undefined){
					data.set(key,value);
				}else{
					data.delete(key);
				}
				setUrl(data.toString());
			},add:function(key,value){			
				if(data.has(key)){
					let outValue = data.get(key);
					data.set(key,outValue+","+value);
				}else{
					data.set(key,value);
				}
				setUrl(data.toString());
			},has:function(key,value){
				let index = -1;
				if(data.has(key)){
					let outValues = data.get(key).split(",");
					index = outValues.findIndex(function(oldValue){
						return oldValue === value;
					});
				}
				return index !== -1;
			},remove:function(key,value){
				if(data.has(key)){
					if(value === undefined){
						data.delete(key);
					}else{
						const oldValues = data.get(key).split(",");
						const newValues = oldValues.reduce(function(results,oldValue,index){
							if(oldValue !== value){
								if(results !== ""){
									results+=",";
								}
								results+=oldValue;
							}
							return results;
						},"");
						if(newValues != ""){
							data.set(key,newValues);
						}else{
							data.delete(key);
						}

					};
					setUrl(data.toString());
				}
			},
		}
	return [location.search,handleSearch];
};

function useSearchModel(){
	const dataApp = useContext(AppContext);
	const [data,handle] = dataApp['search'];
	return [data,handle];
};
export default useSearchModel;