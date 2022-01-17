import {Button,Icon} from '../../../../components/';
import useAuthModel from '../../../../model/Auth';
import {AuthContext} from '../../init';
import clsx from 'clsx';
import './index.css';
import {memo,useContext,useMemo} from 'react';
function AuthSubmit({action,text,...props}){
	const [data,handleData] = useContext(AuthContext);
	const [auth,handleAuth] = useAuthModel();
	const handleSubmit = function(event){
			switch (action) {
				case 'login':
					const validCount = Object.keys(data.validate).reduce(function(results,key){
						const valid = data.validate[key](data.value[key]);
						handleData.valid(key,valid);
						if(valid !== undefined){
							return results + 1;
						}else{
							return results;
						}
					},0)
					if(validCount === 0){
						handleAuth.login(data.value)
					}
					break;
				default:
					console.log(data)
					break;
			}
		}
	return (
		<div className="auth-submit-container">
		 	<Button onClick={handleSubmit} type="button" className={clsx("circle-btn auth-submit")}>{text}</Button>
		</div>
	)
}
export default memo(AuthSubmit);