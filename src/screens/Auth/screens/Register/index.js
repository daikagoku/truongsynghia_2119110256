import Form        from '../../components/Form/';
import Title       from '../../components/Title/';
import InputText   from '../../components/InputText/';
import PasswordText     from '../../components/PasswordText/';
import Checkbox    from '../../components/Checkbox';
import Submit      from '../../components/Submit';
import TextLink    from '../../components/TextLink';
import MoreButtons from '../../components/MoreButtons';

import {useReducer,useMemo,useState,useEffect} from 'react';

import useFetch from '../../../../core/useFetch';
import useAuthModel from '../../../../model/Auth';
import Md5 from '../../../../core/Md5';
export default function(){
	const [value,setValue] = useState({})
	const [valid,setValid] = useState({});
	const [auth,handleAuth] = useAuthModel();
	const [dataFetch,handleFetch] = useFetch({
		initData:null,
        keyApi:'user',
        uriApi:'/register',
        position:"auth-regitster"
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
				if(res.status === 208){
					setValid({
						username:"Tài khoản đã tồn tại"
					})
				}else{
					if(res.status === 200){
						handleAuth.login(data);
					}
				}
				return data;
			}
		})
	}
	return(
		<div className="col col-11 col-sm-10 col-md-9 col-lg-8 col-xl-7 col-xxl-6 mx-auto">
			<Form value={value} setValue={setValue} valid={valid} setValid={setValid}>
				<Title title="Đăng ký"/>
				<InputText name="username" label="Username:"/>
				<PasswordText name="password" label="Password:"/>
				<Checkbox label="Đồng ý với điều khoản và chính sách sử dụng"/>
				<Submit onSubmit={onSubmit}action="register" text="Đăng ký"/>
				<TextLink label="Bạn đã có tài khoản?"title="Đăng nhập"to="login"/>
				<TextLink label="Bạn quên mật khẩu?"title="Quên mật khẩu"to="forget"/>
				<MoreButtons title="Đăng nhập bằng tài khoản khác"/>
			</Form>
		</div>
	)
}