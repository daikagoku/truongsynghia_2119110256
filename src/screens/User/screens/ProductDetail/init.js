import {createContext} from 'react';
export const ProductContext = createContext();
export const ProductDetailContext  = createContext();
export const initData = {
	quantity : 1
}
export function reducer(prevState,action){
	console.log(action.key,{prevState,action,error:""});
	switch(action.key){
		case 'set_quantity':
			return{
				...prevState,
				quantity:action.value
			}
		case 'reset_quantity':
			return{
				...prevState,
				quantity:1
			}
		default:
			console.log(action.key,{prevState,action,error:"Không tồn tại action"});
			return prevState;
	}
}