import {createContext,useState,useMemo} from 'react';
import useStorage from '../../core/useStorage';
import useApp from '../../core/useApp';
import useMessageModel from '../../model/Message/';
import useDialogModel from '../../model/Dialog/';

export default function useAuthModel(){
	const [dataApp,handleApp] = useApp("auth",{})
	const [store,handleStore] = useStorage('auth',{});
	const [onProgress,setProgress] = useState(false);
	const [error,setError] = useState("");
	const [messages,handleMessage] = useMessageModel();
	const [dialogs,handleDialog] = useDialogModel();
	const handleAuth = useMemo(function(){
		return {
			show:function(){
				handleApp.set({
					...dataApp,
					isShow:true
				})
			},close:function(){
				handleApp.set({
					...dataApp,
					isShow:false
				})			
			},toggle:function(){
				handleApp.set({
					...dataApp,
					isShow:dataApp.isShow ? false : true
				})
			}
		};
	},[dataApp]);
	return [{
		error:error,
		onProgress:onProgress,
		...dataApp
	},{
		...handleAuth
	}];
}
