import {useContext} from 'react';
import Widget from '../../../../widget/';
import {Button} from '../../../../tags/';
import {ThemeContext} from '../../../../../model/Theme/';
import './index.css';
export default function({title,theme}){
	const [handleTheme] = useContext(ThemeContext);
	function handleClick(){
		handleTheme({
			key:'set_theme',
			value:theme
		})
	}
	return(
		<Widget title={title} className={theme} prefix="custom-theme-card">
			<div className="custom-theme-card inset-t-5">
				<div className="custom-theme-card-content">
					<div className="col col-4">
						<div className="custom-theme-card-content-view">
							*******
						</div>
					</div>
					<div className="col col-8">
						<div className="custom-theme-card-content-menu">
							*******
						</div>
						<div className="custom-theme-card-content-view">
							*******
						</div>
					</div>	
				</div>
			</div>
			<div className="custom-theme-card-buttons">
				<Button onClick={handleClick}className="custom-theme-card-button apply">Áp dụng</Button>
			</div>	
		</Widget>
	)
}