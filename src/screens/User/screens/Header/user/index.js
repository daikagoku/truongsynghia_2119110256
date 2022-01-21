import {useState,useContext,useReducer,useRef,memo,useEffect} from 'react';
import useFetch from '../../../../../core/useFetch';
import useAuthModel from '../../../../../model/Auth/';
import {Button,Icon,Offcanvas} from '../../../../../components/';
import {UserContext,ActionContext} from './init';
import UserContent from './Content/';
import UserInfo from './Info/';
export default memo(function HeaderUser(){
	const [auth,handleAuth] = useAuthModel();
	const [action,setAction] = useState("");
	const [dataFetch,handleFetch] = useFetch({
		initData:{},
        keyApi:'user',
        position:"user-form"
	})
	const OffcanvasRef= useRef();
	function handleShow(event){
		handleAuth.show();
	}
	function handleClose(event){
		handleAuth.close();
	}
	useEffect(function(){
		if(auth.isShow && auth.user){
			OffcanvasRef.current.show();
		}else{
			OffcanvasRef.current.close();
		}
	},[auth]);
	useEffect(function(){
		let interval;
		function get(){
			handleFetch.get({
				params:{
					id:auth.user
				}
			})
		}
		get();
		interval = setInterval(function(){
			get()
		},20000)
		return function(){
			clearInterval(interval)
		}
	},[auth.user]);
	function handleClick(){
		handleAuth.toggle();
		setAction("");
	}
	return(
	<UserContext.Provider value={[dataFetch.data]}>
	<ActionContext.Provider value={[action,setAction]}>
		<div  className="header-user">
			<Button onClick={handleClick} className="header-button circle-btn">
				<Icon icon="fas fa-user"/>
			</Button>
			<Offcanvas 
				ref={OffcanvasRef} 
				title="Tài khoản"
				position="right"
				onShow={handleShow}
				onClose={handleClose}
				widthSize="w-12 w-xs-10 w-sm-8 w-md-7 w-lg-5 w-xl-4 w-xxl-3"
			>
				{action === "" && <UserContent />}
				{action === "info" && <UserInfo />}
			</Offcanvas>
		</div>
	</ActionContext.Provider>
	</UserContext.Provider>
	)
})

