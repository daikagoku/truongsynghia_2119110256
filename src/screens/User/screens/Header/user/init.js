import {createContext} from 'react';
export const UserContext = createContext({});
export const initData = {
	
};
export function reducer(prevState,action) {
	switch(action.key){
		default:
			console.log(action.key,{action,prevState,"error":"Không tồn tại action"})
			return{
				...prevState
			}
	}
};