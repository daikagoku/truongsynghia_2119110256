import Form        from '../../../components/Form/';
import Title       from '../../../components/Title/';
import InputText   from '../../../components/InputText/';
import Checkbox    from '../../../components/Checkbox';
import Submit      from '../../../components/Submit';
import TextLink    from '../../../components/TextLink';
import MoreButtons from '../../../components/MoreButtons';
export default function(){
	return(
		<div className="col col-11 col-sm-10 col-md-9 col-lg-8 col-xl-7 col-xxl-6 mx-auto">
			<Form>
				<Title title="Đăng ký"/>
				<InputText label="Phone:"icon="fas fa-phone-alt"/>
				<InputText type="password" label="Password:"icon="fas fa-lock"/>
				<InputText type="password" label="Confirm password:"icon="fas fa-lock"/>
				<Checkbox label="Đồng ý với điều khoản và chính sách sử dụng"/>
				<Submit text="Đăng ký"/>
				<TextLink label="Bạn đã có tài khoản?"title="Đăng nhập"to="login"/>
				<TextLink label="Bạn quên mật khẩu?"title="Quên mật khẩu"to="forget"/>
				<MoreButtons title="Đăng nhập bằng tài khoản khác"/>
			</Form>
		</div>
	)
}