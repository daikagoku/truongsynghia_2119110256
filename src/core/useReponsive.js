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
	const [state,setState] = useState({
			width:"none",
			height:"none"
	});
	const checkReponsive = useMemo(function(){
		return function(key,size){
			let _tmp = state[key];
				Object.keys(list ?? {}).find(function(_key){
					if(Number(list[_key]) >= size){
						return true;
					}else{
						_tmp = _key;
						return false;
					}
					
			});
			return _tmp;

		}
	},[])
	useEffect(function(){
		const body = document.querySelector("#App");
		function handleSetSate(key,size){
			let _tmp = checkReponsive(key,size);
			setState(function(prevState){
				return{
					...prevState,
					[key]:_tmp
				}
			});
		}
		function handleResize(event){
			handleSetSate("width",event.target.innerWidth);
			handleSetSate("height",event.target.innerHeight);
		};
		handleSetSate("width",body.offsetWidth);
		handleSetSate("height",body.offsetHeight);

		window.addEventListener('resize',handleResize);
		return function(){
			body.removeEventListener('resize',handleResize);
		}
	},[]);
	return [{list,state}];
}
export default useReponsive;