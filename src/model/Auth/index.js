import {createContext,useState,useMemo,useEffect,useContext} from 'react';
import useStorage from '../../core/useStorage';
import useSession from '../../core/useSession';
import useApp from '../../core/useApp';
import {AppContext} from '../../AppInit';
import useMessageModel from '../../model/Message/';
import useDialogModel from '../../model/Dialog/';
async function handleLogin(account,setProgress,setError,setStore,setSession,showMes){
	setProgress(true);
	new Promise(function(resolve, reject){
		resolve(account);
	})
		.then(function(results){	
			setTimeout(function(){
				setProgress(false);	
				if(account.save){
					setStore(account);
				}else{
					setStore({});
				};

				setSession(account);
				showMes({
					type:"success",
					text:"Đăng nhập thành công chào mừng bạn đến với GoShop"
				});	
			},500)
		})
		.catch(function(error){
			setTimeout(function(){
				setProgress(false);	
				setError(error);
				showMes({
					type:"error",
					text:error
				})		
			},500)
		})
}
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
	const [session,handleSession] = useSession('auth',{});
	const [onProgress,setProgress] = useState(false);
	const [error,setError] = useState("");
	const [messages,handleMessage] = useMessageModel();
	const [dialogs,handleDialog] = useDialogModel();
	const handleAuth = useMemo(function(){
		return {
			login:function(obj){
				handleLogin(obj,setProgress,setError,handleStore.set,handleSession.set,handleMessage.show);
			},regiter:function(obj){

			},forget:function(obj){

			},logout:function(){
				handleSession.set({});
			}
		};
	},[store]);
	return [{
		error:error,
		onProgress:onProgress,
		user:store,
		...data
	},{
		...handleAuth,
		...handle
	}];
}
