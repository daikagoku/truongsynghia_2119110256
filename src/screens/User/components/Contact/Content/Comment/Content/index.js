import './index.css';
import {useContext} from 'react';
import {CommentContext} from '../init';
import ContactCommentOption from './Option/';
export default function(){
	const [item] = useContext(CommentContext);
	console.log(item);
	return(
		<div className="contact-comment-content">
			<p className="text">{item.text}</p>
			<ContactCommentOption />
		</div>
	)
}