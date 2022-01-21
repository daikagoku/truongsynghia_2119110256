import {useState,useEffect,useRef,useMemo,memo} from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import {Button,Icon,Modal} from '../../components/';
import './index.css';
import useAuthModel from '../../model/Auth/';


import {FormContext} from './init';
import FormLogin from './screens/Login/';
import FormRegister from './screens/Register/';
export default memo(function Auth({...props}){
	const [state,setState] = useState({action:"login"});
	const [auth,handleAuth] = useAuthModel();
	const modalRef= useRef();
	const handle={
		setAction:function(value){
			setState(function({...prevState}){
				return{
					...prevState,
					action:value
				}
			});
		}
	};	
	function handleShow(event){
		handleAuth.show();
	}
	function handleClose(event){
		handleAuth.close();
		handle.setAction('login');
	}
	useEffect(function(){
		if(auth.isShow && !auth.user){
			modalRef.current.show();
		}else{
			modalRef.current.close();
		}
	},[auth.isShow,auth.user]);
	return(
		<FormContext.Provider value={[state,handle]}>
			<Modal 
				onShow={handleShow}
				onClose={handleClose}
				prefix="auth" 
				ref={modalRef} 
				widthSize="w-12 w-sm-9 w-md-8 w-lg-7 w-xl-6" 
				heightSize="h-12"
				title=""
			>
				{state.action ==='login' && <FormLogin />}
				{state.action ==='register' && <FormRegister />}
			</Modal>
		</FormContext.Provider>
	)
})