import {memo,useReducer,useMemo} from 'react';
import clsx from 'clsx';
import {AppContext,initData,reducer} from './AppInit';
function AppProvider({children,...props}){
	const [state,dispatch] = useReducer(reducer,initData);
	const handle = useMemo(function(){
		return {
			set:function(key,value){
				dispatch({
					key:"set",
					value:{
						[key]:value
					}
				})
			},
			remove:function(key){
				dispatch({
					key:'remove',
					value:key
				})
			}
		}
	},[]);
	return(
		<AppContext.Provider value={[state,handle]}>
			{
				children
			}
		</AppContext.Provider>
	)
}
export default memo(AppProvider);