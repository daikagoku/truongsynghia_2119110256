import {useContext,useRef,useEffect} from 'react';
import {List,Item} from '../../../../../../components/';
import {CommentContext} from './init';
import {ContentContext} from '../init';
import ContactCommentAvatar from './Avatar';
import ContactCommentContent from './Content';
import "./index.css";
export default function(){
	const [content,handle] = useContext(ContentContext);
	const thisRef = useRef();
	useEffect(function(){
		if(thisRef.current){
			const _item = thisRef.current.lastChild;
			if(_item){
				_item.scrollIntoView();
			}
		}		
	})
	return(
	<List ref={thisRef}listItem = {content.list}>
		{
			function(item,index){
				let itemClass = "flex-row-reverse";
				return(
					<CommentContext.Provider value={[item]}>
						<Item className={"contact-comment row "+itemClass}>
							<div className="col col-2"><ContactCommentAvatar /></div>
							<div className="col col-10"><ContactCommentContent/></div>
						</Item>
					</CommentContext.Provider>
				)
			}
		}
	</List>
	)
}