import {useContext,useReducer,useRef,memo} from 'react';
import useFetch from '../../../../../core/useFetch';
import './index.css';
import {UserContext} from './init';
import UserContent from './Content/';
import UserAuth from './Auth/';
export default memo(function HeaderUser(){
	const [user] = [];
	return(
		<div  className="header-user">
			<UserContext.Provider value={[user]}>
				{
					user && <UserContent />
					|| <UserAuth />
				}		
			</UserContext.Provider>
		</div>
	)
})