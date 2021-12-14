import {createContext} from 'react';
export const MainMenuContext = createContext({});
export const initData = {
	isFixed:false,
	reponsive:""
};
export function reducer(prevState,action) {
	switch(action.key){
		case 'set_fixed':
			return{
				...prevState,
				isFixed:action.value
			}
		case 'set_reponsive':
			return{
				...prevState,
				reponsive:action.value
			}
		default:
			console.log(action.key,{action,prevState,"error":"Không tồn tại action"})
			return{
				...prevState
			}
	}
};