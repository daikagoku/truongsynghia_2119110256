import Form          from '../../components/Form/';
import Title         from '../../components/Title/';
import InputText     from '../../components/InputText/';
import PasswordText     from '../../components/PasswordText/';
import Checkbox      from '../../components/Checkbox';
import Submit        from '../../components/Submit';
import TextLink      from '../../components/TextLink';
import MoreButtons   from '../../components/MoreButtons';
import {validatePhone,validatePassword} from '../init';
import {useReducer,useMemo} from 'react';
export default function(){
	return(
		<div className="w-10 w-sm-9 w-md-8 w-lg-7 w-xl-6 mx-auto">
			<Form>
				<Title title="Đăng nhập"/>
				<InputText name="username" label="Username:"/>
				<PasswordText name="password" label="Password:"/>
				<Checkbox name="save"label="Lưu thông tin đăng nhập"/>
				<Submit action="login" text="Đăng nhập"/>
				<TextLink label="Bạn chưa có tài khoản?"title="Đăng ký"to="register"/>
				<TextLink label="Bạn quên mật khẩu?"title="Quên mật khẩu"to="forget"/>
				<MoreButtons title="Đăng nhập bằng tài khoản khác"/>
			</Form>
		</div>
	)
}