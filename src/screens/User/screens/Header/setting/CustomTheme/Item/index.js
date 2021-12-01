import {useContext,memo} from 'react';
import clsx from 'clsx';
import useThemeModel from '../../../../../../../model/Theme/';
import {Button,Widget} from '../../../../../../../components/';
import './index.css';
export default memo(function({title,theme}){
	const [themeState,handleThemeState] = useThemeModel();
	function handleClick(){
		handleThemeState.set(theme)
	}
	return(
		<Widget title={title} className={clsx(themeState.list[theme])} prefix="custom-theme-card">
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
				<Button onClick={handleClick}className="custom-theme-card-button apply square-btn">Áp dụng</Button>
			</div>	
		</Widget>
	)
})