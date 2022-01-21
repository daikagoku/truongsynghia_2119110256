import Form          from '../../components/Form/';
import Title         from '../../components/Title/';
import InputText     from '../../components/InputText/';
import PasswordText     from '../../components/PasswordText/';
import Checkbox      from '../../components/Checkbox';
import Submit        from '../../components/Submit';
import TextLink      from '../../components/TextLink';
import MoreButtons   from '../../components/MoreButtons';
import {validatePhone,validatePassword} from '../init';
import {useReducer,useMemo,useState,useEffect} from 'react';
import useFetch from '../../../../core/useFetch';

import Md5 from '../../../../core/Md5';
import useAuthModel from '../../../../model/Auth';
import useMessageModel from '../../../../model/Message';
export default function(){
	const [auth,handleAuth] = useAuthModel();
	const [messages,handleMessage] = useMessageModel();
	const [value,setValue] = useState(auth.user);
	const [valid,setValid] = useState({});
	const [dataFetch,handleFetch] = useFetch({
		initData:null,
        keyApi:'user',
        uriApi:'/login',
        position:"auth-login"
	});
	const onSubmit = function(obj){
		const user = {
			'username':obj.username,
			'password':Md5(obj.password)
		}
		handleFetch.post({
			params:user
			,handle:function(data,res){
				console.log(data,res)	
				if(res.status === 204){
					setValid({
						username:"Tài khoản hoặc mật khẩu không chính xác"
					})
				}else if(res.status === 200){
					handleMessage.show({
						text:"Đăng nhập thành công"
					})
					handleAuth.login(data)
				}
				return data;
			}
		})
	}

	return(
		<div className="w-10 w-sm-9 w-md-8 w-lg-7 w-xl-6 mx-auto">
			<Form value={value} setValue={setValue} valid={valid} setValid={setValid}>
				<Title title="Đăng nhập"/>
				<InputText name="username" label="Username:"/>
				<PasswordText name="password" label="Password:"/>		
				<Submit  onSubmit={onSubmit}action="login" text="Đăng nhập"/>
				<TextLink label="Bạn chưa có tài khoản?"title="Đăng ký"to="register"/>
				<TextLink label="Bạn quên mật khẩu?"title="Quên mật khẩu"to="forget"/>
				<MoreButtons title="Đăng nhập bằng tài khoản khác"/>
			</Form>
		</div>
	)
}
/*
<Checkbox name="save"label="Lưu thông tin đăng nhập"/>
*/