import {useState,useRef,memo,useMemo} from 'react';
import './Contact.css';
import DragTranslate from '../../core/DragTranslate';
import {List,Item,Div,Button,Icon} from '../../tags/Tags';
export default memo(function Contact(){
	const contactAttr = useMemo(function(){
		let contact;
		function getCursorPos(e) {
		    let x = e.pageX - window.pageXOffset;
		    let y = e.pageY - window.pageYOffset;
		    return {x : x, y : y};
		}
		return{
				...DragTranslate({
				onMouseDown:function(event){
					contact = event.target.closest('.contact-btn');
				},
				onMouseMove:function(event){
					const cussorPos = getCursorPos(event);
					contact.style.left 	+= cussorPos.x - (contact.offsetWidth / 2) + "px";
    				contact.style.top 	+= cussorPos.y - (contact.offsetHeight / 2) + "px";
    				console.log(cussorPos)
				}
			})
		}
	},[]);
	return(
		<Div zIndex="999"className="contact fixed top-0 end-0 start-0 bottom-0">
				<Button zIndex="1000"color="#ff0"{...contactAttr}className="contact-btn circle-btn hs-3x ws-3x hs-0em ws-0em">
					<Icon className="fas fa-home"/>
				</Button>
		</Div>
	)
});