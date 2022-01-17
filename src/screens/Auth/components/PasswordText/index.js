import {Input,Icon,Button} from '../../../../components/'
import clsx from 'clsx';
import {AuthContext} from '../../init';
import {useContext,forwardRef,useState,useMemo,useEffect} from 'react';
import './index.css';
function validatePassword(password,callback){
	let value = "";
	if(password){
		value=password.trim();
	}
	if(value === ""){
		return "Mật khẩu không bỏ trống";
	}else if(value.length < 10){
		return "Mật khẩu phải lớn hơn 10 kí tự"
	}else if(callback && typeof(callback) === 'function'){
		return callback(value);
	}
}
export default forwardRef(function({prefix,name,label,icon,children,validate,...props},ref) {
	const [data,handleData] = useContext(AuthContext);
	const [isHidden,setHidden] = useState(true);
	const inputAttr = useMemo(function(){
		return {
			...props,
			ref:ref,
			className:"auth-input password"
		}
	},[]);
	inputAttr.value = useMemo(function(){
		return data.value[name] ?? "" ;
	},[data.value[name]])
	inputAttr.validate = useMemo(function(){
		return function(password){
			return validatePassword(password,validate);
		}
	},[validate])
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
	},[data.valid[name]]);
	const handleClickHidden = useMemo(function(){
		return function() {
			setHidden(!isHidden);
		}
	},[isHidden])
	return (
		<div className={clsx("auth-input-container",{[prefix+"_auth-input"]:prefix})}>
			<div className="auth-input-content">
				<Input isHidden={isHidden} {...inputAttr}/>
				<label className="auth-input-label text"htmlFor="">
					{label}
				</label>
				<label className="auth-input-label icon"htmlFor="">
					<Icon icon="fas fa-lock"/>
				</label>
				<Button onClick={handleClickHidden} className="auth-input-label auth-input-hidden-btn"htmlFor="">
					<Icon icon={isHidden ?"fas fa-eye-slash" : "fas fa-eye"}/>
				</Button>
			</div>
			<label className="auth-input-validate"htmlFor="">
				{data.valid[name]}
			</label>
		</div>
	)
})