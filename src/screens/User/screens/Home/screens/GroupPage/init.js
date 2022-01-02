import {createContext} from 'react';
export const HomePageContext = createContext([]);
export const initData = {
	index:0,
	limit:0,
	length:0,
	load:false
};
export function reducer(prevState,action) {
	switch(action.key){
		case 'set_index':
			return{
				...prevState,
				index:action.value
			}
		case 'set_limit':
			return{
				...prevState,
				limit:action.value
			}
		case 'set_length':
			return{
				...prevState,
				length:action.value
			}
		default:
			console.log(action.key,{action,prevState,"error":"Không tồn tại action"})
			return{
				...prevState
			}
	}
};