import {Icon} from '../../tags/';
import './index.css';
export default function PostView({view,...props}){
	if(view === undefined){
		view = 0;
	};
	return(
		<div className={"post-view"}>
			<Icon className="post-icon fas fa-eye"/>
		 	<span className="post-view-text">{view}</span>
		</div>
	)
};