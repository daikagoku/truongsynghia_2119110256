import {createContext} from 'react';

export const AppContext = createContext({});
export const initData = {}
export function reducer(prevState,action){
	switch (action.key) {
		case 'set':
			return{
				...prevState,
				...action.value
			}
		case 'remove':
			delete prevState[action.value];
			return{
				...prevState
			}
		default:
			// statements_def
			break;
	}
}