import {Button,Icon} from '../../../../../../../../components/'
import clsx from 'clsx';
import './index.css';
export default function({title}) {
	return (
		<div className="auth-more-container">
			<div className="auth-more-head">
				<span>{title}</span>
			</div>	
		 	<div className="auth-more-body">
			 	<Button to="login-facebook"className="square-btn auth-more-button facebook">
			 		<Icon icon="fab fa-facebook-f"/>
			 		<span className="text">Facebook</span>
			 	</Button>
			 	<Button to="login-google"className="square-btn auth-more-button google">
			 		<Icon icon="fab fa-google"/>
			 		<span className="text">Google</span>
			 	</Button>
		 	</div>
		</div>
	)
}