import Form          from '../../../components/Form/';
import Title         from '../../../components/Title/';
import InputText     from '../../../components/InputText/';
import Checkbox      from '../../../components/Checkbox';
import Submit        from '../../../components/Submit';
import TextLink      from '../../../components/TextLink';
import MoreButtons   from '../../../components/MoreButtons';
import {initData,reducer} from './init';
import {validatePhone,validatePassword} from '../init';
export default function(){
	return(
		<Form action ="auth/login" initData={initData} reducer={reducer}>
			<div className="col col-11 col-sm-10 col-md-9 col-lg-8 col-xl-7 col-xxl-6">
				<Title title="Đăng nhập"/>
				<InputText label="Phone:"icon="fas fa-phone-alt"validate={validatePhone}/>
				<InputText type="password" label="Password:"icon="fas fa-lock"validate={validatePassword}/>
				<Checkbox label="Lưu thông tin đăng nhập"/>
				<Submit text="Đăng nhập"/>
				<TextLink label="Bạn chưa có tài khoản?"title="Đăng ký"to="register"/>
				<TextLink label="Bạn quên mật khẩu?"title="Quên mật khẩu"to="forget"/>
				<MoreButtons title="Đăng nhập bằng tài khoản khác"/>
			</div>
		</Form>
	)
}