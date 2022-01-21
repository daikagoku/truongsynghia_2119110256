import {Form} from '../../../../components/';
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
export default function({value,setValue,valid,setValid,action,children,className,...props}){
	const valueForm = value ?? {};
	const validForm = valid ?? {};
	const [validateForm,setValidate] = useState({});
	const handleData = useMemo(function(){
		return {}
	},[valueForm,validForm]);
	handleData.set = useMemo(function(){
		return function(key,value){
			if(setValue){
				setValue(function(prevValue){
					return{
						...prevValue,
						[key]:value
					}
				});
			}
		}
	},[valueForm]);
	handleData.valid = useMemo(function(){
		const newValid = {...validForm};
		return function(key,value){
			setValid(function(prevValid){
				return{
					...prevValid,
					[key]:value
				}
			});
		}
	},[validForm]);
	handleData.validate = useMemo(function(){
		const newValidate = {...validateForm};
		return function(key,value){
			if(setValid){
				setValidate(function(prevValid){
				return{
					...prevValid,
					[key]:value
				}
			});
			}
		}
	},[validateForm]);
	return (
	<AuthContext.Provider value={[{value:valueForm,valid:validForm,validate:validateForm},handleData]}>
		<Form className={clsx("auth-form",{[className]:className})} {...props}>
			{children}
		</Form>
	</AuthContext.Provider>
	)
}