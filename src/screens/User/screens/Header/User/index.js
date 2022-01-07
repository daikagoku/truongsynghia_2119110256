import {useContext,useReducer,useRef,memo} from 'react';
import useFetch from '../../../../../core/useFetch';
import useAuthModel from '../../../../../model/Auth/';
import {Button,Icon} from '../../../../../components/';
import {UserContext} from './init';
import UserContent from './Content/';
export default memo(function HeaderUser(){
	const [auth,handleAuth] = useAuthModel();
	const [user] = [{}];
	function handleClick(){
		handleAuth.toggle();
	}
	return(
		<div  className="header-user">
			<Button onClick={handleClick} className="header-button circle-btn">
				<Icon icon="fas fa-user"/>
			</Button>
		</div>
	)
})

