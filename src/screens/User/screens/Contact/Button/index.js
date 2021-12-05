import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {useContext,useEffect,useRef,memo,useMemo} from 'react';
import {ContactContext} from '../init';
import {Button,Icon} from '../../../../../components/';
import './index.css';
export default memo(function ContactButton(){
	const buttonRef = useRef();
	const [stateContact,dispatchContact] = useContext(ContactContext);
	let buttonAttr = {
		ref:buttonRef,
		className:"contact-btn circle-btn",
		onDragStart:function(e){
			e.preventDefault()
		},onMouseDown:function(e){
			dispatchContact({
				key:'start_mouse'
			})
		}
	};
	function handleToggleClick(){
		document.removeEventListener('mousemove',handleStartDrag);
		dispatchContact({
			key:'toggle_show'
		})
	}
	function handleStartDrag(){
		document.removeEventListener('mousemove',handleStartDrag);
		if(buttonRef.current){
            buttonRef.current.removeEventListener('mouseup',handleToggleClick);
        };
        buttonRef.current.style.cursor="grab";
        dispatchContact({
			key:'start_drag'
		})
	}
	useEffect(function(){
        if(stateContact.onMouse){
            if(buttonRef.current){
            	buttonRef.current.addEventListener('mouseup',handleToggleClick);
            }
            document.addEventListener('mousemove',handleStartDrag);
        };
        return function(){
        	if(buttonRef.current){
            	buttonRef.current.removeEventListener('mouseup',handleToggleClick);
        	}
        	document.removeEventListener('mousemove',handleStartDrag);
        }
    },[stateContact.onMouse]);
	const handleTranslate =useMemo(function(){
        return function(event){
        	let currentRect =buttonRef.current.getBoundingClientRect();
            let x           =event.x - currentRect.width/2;
            if(x < 0) x = 0;
            else if(x > document.documentElement.clientWidth - currentRect.width){
                x       =  document.documentElement.clientWidth - currentRect.width;
            };
            let y       = event.y - currentRect.height/2;
            if(y < 0) y = 0;
            else if(y > document.documentElement.clientHeight - currentRect.height){
                y       =  document.documentElement.clientHeight - currentRect.height;
            };
            buttonRef.current.style.left = x+"px";
            buttonRef.current.style.top  = y+"px";
        };
    },[]);
	const handleStopDrag = useMemo(function(){
		return function() {
			let currentRect =buttonRef.current.getBoundingClientRect();
	        buttonRef.current.style.cursor="";
	        dispatchContact({
				key:'stop_drag',
				value:{
					x:currentRect.left + currentRect.width/2,
					y:currentRect.top + currentRect.height/2
				}
			})
		}
	},[]);
	useEffect(function(){
        if(stateContact.onDrag){
            document.addEventListener('mouseup',handleStopDrag);   
            document.addEventListener('mouseleave',handleStopDrag);
            document.addEventListener('mousemove',handleTranslate);
        };
        return function(){
            document.removeEventListener('mouseup',handleStopDrag);           
            document.removeEventListener('mouseleave',handleStopDrag);
            document.removeEventListener('mousemove',handleTranslate);
        }
    },[stateContact.onDrag]);
	return(
			<Button {...buttonAttr}>
					<AliceCarousel 
						infinite
						autoPlay
						animationDuration={500}
						autoPlayInterval={2000}
						disableDotsControls
						disableDotsControls
						disableButtonsControls
					>
						<Icon className="far fa-comments"/>
						<Icon className="fas fa-phone-alt"/>
						<Icon className="fas fa-paper-plane"/>
						<Icon className="far fa-comments"/>
					</AliceCarousel>
			</Button>
	)
});