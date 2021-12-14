import './index.css';
import clsx from 'clsx';
import {Button,Icon} from '../../../../../components/';
import useReponsive from '../../../../../core/useReponsive';
import {ContentContext,reducer,initData} from './init';
import {ContactContext} from '../init';
import {useReducer,useContext,useRef,useEffect,useMemo} from 'react';
import ContactComment from './Comment/';
import ContactInput from './Input/';
export default function ContactContent({title}) {
	const contentRef = useRef();
	const [reponsive] = useReponsive();
	const [stateContact,dispatchContact] = useContext(ContactContext);
	const [stateContent,dispatchContent] = useReducer(reducer,initData);
	useEffect(function(){
		if(contentRef.current){
			const bodyWidth = document.querySelector("#App").offsetWidth;
			let currentRect = contentRef.current.getBoundingClientRect();
            let x       = stateContact.positionX - currentRect.width/2;
            if(x + currentRect.width > bodyWidth){
            	x = bodyWidth - currentRect.width;
            }else if(x < 0){
            	x = 0;
            };
            contentRef.current.style.right=x+"px";
		}
	},[stateContact.positionX,reponsive.state.width]);
	useEffect(function(){
		if(contentRef.current){
			const bodyHeight = document.querySelector("#App").offsetHeight;
			let currentRect = contentRef.current.getBoundingClientRect();
            let y       = stateContact.positionY - currentRect.height/2;
            if(y + currentRect.height > bodyHeight){
            	y = bodyHeight - currentRect.height;
            }else if(y < 0){
            	y = 0;
            };
            contentRef.current.style.bottom=y+"px";
		}
	},[stateContact.positionY,reponsive.state.height]);
	function handleClick(){
		dispatchContact({
			key:"stop_show"
		})
	};
	return(
	<ContentContext.Provider value={[stateContent,dispatchContent]}>
		<div ref={contentRef} className={clsx("contact-content",{show:stateContact.isShow})}>
			<div className="contact-content-head">
	          <div className="contact-content-title">
	            <span className="">Hổ trợ trực tuyến</span>
	          </div>
	          <Button 
	            className="contact-content-close square-btn"
	          	onClick = {handleClick}
	          >
	            <Icon icon="fas fa-times"/>
	          </Button>
	        </div>
	        <div className="contact-content-body">
	        	<ContactComment />
	        </div>
	        <div className="contact-content-foot">
	        	<ContactInput />
	        </div>
        </div>
    </ContentContext.Provider>
	)
}