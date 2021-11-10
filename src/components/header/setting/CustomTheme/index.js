import './index.css';
import CustomThemeCard from './Item/';
export default function CustomTheme(){
	return(
		<div className="custom-theme">
			<div className="custom-theme-head">
				<span className="custom-theme-title">Giao diện:</span>
			</div>
			<div className="custom-theme-body">
				<div className="col col-4 custom-theme-item">
					<CustomThemeCard title="DarkMode"theme="dark"/>
				</div>
				<div className="col col-4 custom-theme-item">
					<CustomThemeCard title="LightMode"theme="light"/>
				</div>
				<div className="col col-4 custom-theme-item">
					<CustomThemeCard title="BlueMode"theme="blue"/>
				</div>
			</div>
		</div>
	)
}