import {createContext,useState,useMemo,useEffect,useContext} from 'react';
import useStorage from '../../core/useStorage';
import useSession from '../../core/useSession';
import useApp from '../../core/useApp';
import {AppContext} from '../../AppInit';
import useMessageModel from '../../model/Message/';
import useDialogModel from '../../model/Dialog/';
export function useAuthProvider(){
	const [data,setData] = useState({});
	const handleCart = useMemo(function(){
		return {
			show:function(){
				setData(function(prevState){
					return {
						...prevState,
						isShow:true
					}
				})
			},close:function(){
				setData(function(prevState){
					return {
						...prevState,
						isShow:false
					}
				})			
			},toggle:function(){
				setData(function({isShow,...prevState}){
					return {
						...prevState,
						isShow:!isShow
					}
				})
			}
		};
	},[data]);
	return [data,handleCart];
}
export default function useAuthModel(){
	const dataApp = useContext(AppContext);
	const [data,handle] = dataApp['auth'];
	const [store,handleStore] = useStorage('auth',{});
	const [session,handleSession] = useSession('auth');
	const [onProgress,setProgress] = useState(false);
	const [error,setError] = useState("");
	const [messages,handleMessage] = useMessageModel();
	const [dialogs,handleDialog] = useDialogModel();
	const handleAuth = useMemo(function(){
		return {
			login:function(obj){
				console.log("Login:",obj);
				handleSession.set(obj);
			},logout:function(){
				console.log("Logout:");
				handleSession.remove();
			},save:function(obj,isSave){
				if(isSave){
					handleStore.set(obj)
				}else{
					handleStore.set({});
				}
			}
		};
	},[store]);
	return [{
		error:error,
		onProgress:onProgress,
		users:store,
		user:session,
		...data
	},{
		...handleAuth,
		...handle
	}];
}
