import {Form} from '../../../../components/';
import useAuthModel from '../../../../model/Auth';
import {AuthContext} from '../../init';
import {useState,useMemo,useEffect} from 'react';
import clsx from 'clsx';
import './index.css';
const handleData = function(data,setData){
	const newData = {...data};
	return {
		set:function(key,value){
			newData[key] = value;
			setData(newData);
		},delete:function(key,value){
			delete newData[key];
			setData(newData);
		}
	}
}
export default function({action,children,className,...props}){
	const [auth,handleAuth] = useAuthModel();
	const [value,setValue] = useState(auth.user);
	const [valid,setValid] = useState({});
	const [validate,setValidate] = useState({});
	const handleData = useMemo(function(){
		const newValue = {...value};
		const newValid = {...valid};
		return {
			delete:function(key){
				delete newValue[key];
				setValue(newValue)
				delete newValid[key];
				setValid(newValid)
			}
		}
	},[value,valid]);
	handleData.set = useMemo(function(){
		return function(key,value){
			setValue(function(prevValue){
				return{
					...prevValue,
					[key]:value
				}
			});
		}
	},[value]);
	handleData.valid = useMemo(function(){
		const newValid = {...valid};
		return function(key,value){
			setValid(function(prevValid){
				return{
					...prevValid,
					[key]:value
				}
			});
		}
	},[valid]);
	handleData.validate = useMemo(function(){
		const newValidate = {...validate};
		return function(key,value){
			setValidate(function(prevValid){
				return{
					...prevValid,
					[key]:value
				}
			});
		}
	},[validate]);
	return (
	<AuthContext.Provider value={[{value,valid,validate},handleData]}>
		<Form className={clsx("auth-form",{[className]:className})} {...props}>
			{children}
		</Form>
	</AuthContext.Provider>
	)
}