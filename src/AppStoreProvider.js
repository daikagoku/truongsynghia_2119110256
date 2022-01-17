import {memo,useState,useReducer,useMemo} from 'react';
import clsx from 'clsx';
import {StoreContext} from './AppInit';

import LocalStorage from './core/LocalStorage';
import SessitonStorage from './core/SessionStorage';

function AppStoreProvider({children,...props}){
	const local = LocalStorage();
	const session = SessitonStorage();
	const dataStore = {
		local,session
	}
	return(
		<StoreContext.Provider value={dataStore}>
			{
				children
			}
		</StoreContext.Provider>
	)
}
export default memo(AppStoreProvider);