import {Input,Icon} from '../../../../components/'
import clsx from 'clsx';
import {AuthContext} from '../../init';
import {useContext,forwardRef,useState,useMemo,useEffect} from 'react';
import './index.css';
function validateUsername(username,callback){
	let value = "";
	if(username){
		value=username.trim();
	}
	if(value === ""){
		return "Tài khoản không bỏ trống";
	}else if(callback && typeof(callback) === 'function'){
		return callback(value);
	}
}
export default forwardRef(function({prefix,validate,name,label,icon,children,...props},ref) {
	const [data,handleData] = useContext(AuthContext);
	const inputAttr = useMemo(function(){
		return {
			...props,
			ref:ref,
			name:name,
			className:"auth-input"
		}
	},[]);
	inputAttr.value = useMemo(function(){
		return data.value[name] ?? "" ;
	},[data.value[name]])
	inputAttr.validate = useMemo(function(){
		return function(username){
			return validateUsername(username,validate);
		}
	},[validate]);
	useEffect(function(){
		handleData.validate(name,inputAttr.validate)
	},[])
	inputAttr.setValue = useMemo(function(){
		return function(value){
			handleData.set(name,value);
		}
	},[data.value[name]]);
	inputAttr.setValid = useMemo(function(){
		return function(value){
			handleData.valid(name,value);
		}
	},[data.validate[name]])
	return (
		<div className={clsx("auth-input-container",{[prefix+"_auth-input"]:prefix})}>
			<div className="auth-input-content">
				<Input {...inputAttr}/>
				<label className="auth-input-label text"htmlFor="">
					{label}
				</label>
				<label className="auth-input-label icon"htmlFor="">
					<Icon icon="fas fa-user"/>
				</label>
			</div>
			<label className="auth-input-validate"htmlFor="">
				{data.valid[name] ?? ""}
			</label>
		</div>
	)
})