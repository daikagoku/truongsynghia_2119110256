import {memo,useContext} from 'react';
import clsx from 'clsx';
import styles from './index.module.css';
import './index.css';
import {Button,Icon,Input,Widget} from '../../../../../../../components/';
import {InfoContext} from "../init";
function UserInfoFullname({...props}){
	const [data,setData] = useContext(InfoContext);
	function handleChange(event){
		setData("email",event.target.value)
	}
	return(
		<div className={clsx("user-info-input-container")}>
			<div className={clsx("user-info-input-content")}>
				<Input onChange={handleChange} value={data.email ?? ""} className={clsx("user-info-input")}/>
				<label className={clsx("user-info-input-label","text")}htmlFor="">
					Email:
				</label>
				<label className={clsx("user-info-input-label","icon")}htmlFor="">
					<Icon icon="fas fa-user"/>
				</label>
			</div>
			<label className={clsx("user-info-input-validate")}htmlFor="">
				
			</label>
		</div>
	)
}
export default memo(UserInfoFullname);