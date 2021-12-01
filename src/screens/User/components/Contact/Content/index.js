import './index.css';
import {List,Button,Icon} from '../../../components/index';
import {ContentContext,reducer,initData} from './init';
import {ContactContext} from '../init';
import {useReducer,useContext,useRef,useEffect,useMemo} from 'react';
import ContactComment from './Comment/';
import ContactInput from './Input/';
export default function ContactContent({title}) {
	const contentRef = useRef();
	const [stateContact,dispatchContact] = useContext(ContactContext);
	const [stateContent,dispatchContent] = useReducer(reducer,initData);
	const x = useMemo(function(){
		if(contentRef.current){
			let currentRect = contentRef.current.getBoundingClientRect();
            let x       = stateContact.positionX - currentRect.width/2;
            if(x + currentRect.width > document.documentElement.clientWidth){
            	x = document.documentElement.clientWidth - currentRect.width;
            }else if(x < 0){
            	x = 0;
            };
            return x;
		}else{
			return stateContact.positionX;
		}
	},[stateContact.positionX]);
	const y = useMemo(function(){
		if(contentRef.current){
			let currentRect = contentRef.current.getBoundingClientRect();
            let y       = stateContact.positionY - currentRect.height/2;
            if(y + currentRect.height > document.documentElement.clientHeight){
            	y = document.documentElement.clientHeight - currentRect.height;
            }else if(y < 0){
            	y = 0;
            };
            return y;
		}else{
			return stateContact.positionY;
		}
	},[stateContact.positionY]);
	function handleClick(){
		dispatchContact({
			key:"stop_click"
		})
	}
	let show = "";
	if(stateContact.isClick){
		show = "show"
	}
	return(
	<ContentContext.Provider value={[stateContent,dispatchContent]}>
		<div ref={contentRef} className={"contact-content "+show}style={{"--left":x,"--top":y}}>
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