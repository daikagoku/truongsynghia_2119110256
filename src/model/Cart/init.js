import {createContext} from 'react';
export const initData = {
	onProcess:false,
	product:{}
};
export function reducer(prevState,action) {
	switch(action.key){
		case 'set_process':
			return{
				...prevState,
				onProcess:action.value
			}
		case 'set_product':
			return{
				...prevState,
				product:action.value
			}
		default:
			console.log(action.key,{action,prevState,"error":"Không tồn tại action"})
			return{
				...prevState
		}
	}
};