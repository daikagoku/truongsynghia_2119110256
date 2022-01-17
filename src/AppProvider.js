import {memo,useState,useReducer,useMemo} from 'react';
import clsx from 'clsx';
import {AppContext} from './AppInit';
import {useSearchProvider} from './model/Search/';
import {useDialogProvider} from './model/Dialog/';
import {useMessageProvider} from './model/Message/';
import {useToastProvider} from './model/Toast/';
import {useCartProvider} from './model/Cart/';
import {useAuthProvider} from './model/Auth/';
function AppProvider({children,...props}){
	const search = useSearchProvider();
	const dialog = useDialogProvider();
	const message = useMessageProvider();
	const toast = useToastProvider();
	const cart = useCartProvider();
	const auth = useAuthProvider();
	const dataApp = {
		search,
		dialog,
		message,
		toast,
		cart,
		auth
	}
	console.log({console,dataApp})
	return(
		<AppContext.Provider value={dataApp}>
			{
				children
			}
		</AppContext.Provider>
	)
}
export default memo(AppProvider);