import {memo,useContext,useState} from 'react';
import clsx from 'clsx';
import styles from './index.module.css';
import {Button,Icon,Widget} from '../../../../../../components/';

import UserAvatar from './Avatar/';
import UserFullname from './Fullname/';
import UserEmail from './Email/';
import UserPhone from './Phone/';
import UserOption from './Option/';
import {UserContext} from "../init";
import {InfoContext} from "./init";
function UserInfo({...props}){
	const [data] = useContext(UserContext);
	const [dataNew,setDataNew]= useState(data);
	function setValue(key,value){
		setDataNew(function(prevValue){
			return{
				...prevValue,
				[key]:value
			}
		})
	}
	return(
		<InfoContext.Provider value={[dataNew,setValue]}>
				<Widget prefix="head header-user">
					<UserAvatar />
				</Widget>
				<Widget prefix="body header-user">
					<UserFullname />
					<UserEmail />
					<UserPhone />
					<UserOption />
				</Widget>
		</InfoContext.Provider>
	)
}
export default memo(UserInfo);