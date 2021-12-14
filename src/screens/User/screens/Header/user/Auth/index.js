import {useState,useEffect,useRef,useMemo,memo} from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import {Button,Icon,Modal} from '../../../../../../components/';
import './index.css';
import {AuthContext} from './init';
import FormLogin from './scenes/form/Login/';
import FormRegister from './scenes/form/Register/';
export default memo(function Auth({...props}){
	const [state,setState] = useState({action:"login"});
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
	const buttonAttr = useMemo(function(){
		return {
			onClick:function(e){
				if(modalRef.current){
					modalRef.current.handle.show();
					handle.setAction('login');
				}
			}
		}
	},[]);
	return(
		<AuthContext.Provider value={[state,handle]}>
			<Button className="header-button circle-btn"{...buttonAttr}>
				<Icon icon="fas fa-user"/>
			</Button>
			<div className="auth-content">
				<Modal prefix="auth" ref={modalRef} widthSize="w-12 w-sm-9 w-md-8 w-lg-7 w-xl-6" heightSize="h-12"title="">
					{state.action ==='login' && <FormLogin />}
					{state.action ==='register' && <FormRegister />}
				</Modal>
			</div>
		</AuthContext.Provider>
	)
})