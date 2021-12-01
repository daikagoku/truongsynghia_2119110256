import './index.css';
import {Icon} from '../../../../../components';
export default function PostComment({comment,...props}){
	if(comment === undefined) comment = 0;
	return(
		<div className="post-comment">
			<Icon className="post-icon far fa-comment-dots"/>
		 	<span className="post-comment-text">{comment}</span>
		</div>
	)
};