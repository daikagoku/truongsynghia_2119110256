import './index.css';
import {useState} from "react";
import clsx from 'clsx'
import {List,Button,Icon} from '../../../../../components';
export default function CommentEmoji({...props}){
	const listEmoji = [
		"fas fa-thumbs-up",
		"fas fa-heart",
		"far fa-smile-beam",
		"far fa-smile-wink",
		"far fa-sad-tear",
		"far fa-angry"
	];
	const [emoji,setEmoji] = useState(0);
	const [hover,setHover] = useState(false);
	const totalEmoji = 0;
	const buttonAttr = {
		onMouseMove : function(event){
			setHover(true);
		},
		onMouseLeave:function(event){
			setHover(false);
		}
	}
	return(
		<Button {...buttonAttr} className={clsx("comment-control comment-emoji",{active:hover})}>
			<Icon className={"comment-control-icon "+listEmoji[emoji]}/>
		 	<span className="comment-control-text">{totalEmoji}</span>
		 	<div className={clsx("comment-emoji-drop",{show:hover})}>
			 	<List className="comment-emoji-list" listItem = {listEmoji} itemAttr = {{className:"d-flex"}}>
			 		{function(item,index){
			 			return(
			 				<Button 
			 					className="comment-emoji-button"
			 					onClick={()=>(setEmoji(index))}
			 				>
			 					<Icon icon={item}/>
			 				</Button>
			 			)
			 		}}
			 	</List>
		 	</div>
		</Button>
	)
};