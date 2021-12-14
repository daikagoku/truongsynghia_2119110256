import {Icon} from '../../../../../components';
import {useContext} from 'react';
import {PostContext} from '../index';
import './index.css';
export default function PostView({view,...props}){
	const data = useContext(PostContext);
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