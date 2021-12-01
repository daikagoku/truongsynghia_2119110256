import {Button,Icon} from '../../../../../../../../components/'
import clsx from 'clsx';
import './index.css';
export default function({text}) {
	return (
		<div className="auth-submit-container">
		 	<Button type="button" className={clsx("circle-btn auth-submit")}>{text}</Button>
		</div>
	)
}