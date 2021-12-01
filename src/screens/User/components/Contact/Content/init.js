import {createContext} from 'react';
export const ContentContext = createContext();
export const initData = {
	value:"",
	line:1,
	list:[]
}
export function reducer(prevState,action){
	switch(action.key){
		case 'set_value':
			return{
				...prevState,
				value:action.value
			}
		case 'add_value':
			const newList = [...prevState.list];
			newList.push({
				text:prevState.value
			});
			return{
				...prevState,
				list:newList
			}
		case 'increase_line':{
			if(prevState.line < 5){
				return{
					...prevState,
					line:prevState.line+1
				}
			}else{
				return{
					...prevState
				}
			}
		}
		case 'decrease_line':{
			if(prevState.line > 0){
				return{
					...prevState,
					line:prevState.line-1
				}
			}else{
				return{
					...prevState
				}
			}
		}
		default :
	        console.log(action.key,{prevState,action,error:"Không tồn tại action"})
	        return{
	          ...prevState
	        }
	}
}