import {useState,useMemo,useEffect} from 'react';
function useReponsive(props){
	const list = useMemo(function(){
		return {
			"none":"0",
			"xs":"400",
			"sm":"576",
			"md":"768",
			"lg":"992",
			"xl":"1200",
			"xxl":"1400"
		}
	},[])
	const [state,setState] = useState("none");
	useEffect(function(){
		const body = document.querySelector("#App");
		function handleSetSate(size){
			let tmp = state;
			Object.keys(list ?? {}).find(function(key){
				if(Number(list[key]) >= size){
					return true;
				}else{
					tmp = key;
					return false;
				}
				
			});
			setState(tmp);
		}
		function handleResize(event){
			handleSetSate(event.target.innerWidth);
		};
		handleSetSate(body.offsetWidth);
		window.addEventListener('resize',handleResize);
		return function(){
			body.removeEventListener('resize',handleResize);
		}
	},[])
	return [{list,state}];
}
export default useReponsive;