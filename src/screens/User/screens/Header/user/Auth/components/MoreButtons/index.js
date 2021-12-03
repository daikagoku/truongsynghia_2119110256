import {Button,Icon} from '../../../../../../../../components/';
import {useGoogleLogin,useGoogleLogout} from 'react-google-login';
import * as Default from 'react-facebook-login';
import clsx from 'clsx';
import {useContext,useState} from 'react';
import {AuthContext} from '../../init';

import './index.css';
export default function({title}) {
	const [state,handle] = useContext(AuthContext);
	const googleAuth = useGoogleLogin({
	    clientId: "1006741034023-bdjvodaknhgbgrrk9qgglfarttqopb82.apps.googleusercontent.com"
	});
	function handleGoogleLogin(event){
		googleAuth.signIn(event)
	};
	function handleFacebookLogin(event){
		
	};
	return (
		<div className="auth-more-container">
			<div className="auth-more-head">
				<span>{title}</span>
			</div>	
		 	<div className="auth-more-body">
			 	<Button onClick={handleFacebookLogin}className="square-btn auth-more-button facebook">
			 		<Icon icon="fab fa-facebook-f"/>
			 		<span className="text">Facebook</span>
			 	</Button>
			 	<Button onClick={handleGoogleLogin}className="square-btn auth-more-button google">
			 		<Icon icon="fab fa-google"/>
			 		<span className="text">Google</span>
			 	</Button>
		 	</div>
		</div>
	)
}