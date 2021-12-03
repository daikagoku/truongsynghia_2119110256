import {useGoogleLogin,useGoogleLogout} from 'react-google-login';
export default function(){
	const googleAuth = useGoogleLogin({
	    clientId: "1006741034023-bdjvodaknhgbgrrk9qgglfarttqopb82.apps.googleusercontent.com"
	});
	console.log(googleAuth)
	return (
		<div className="google-loggin">
        </div>
    )
}