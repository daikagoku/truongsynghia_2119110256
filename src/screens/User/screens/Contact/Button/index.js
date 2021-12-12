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
		},onTouchStart:function(e){
			dispatchContact({
				key:'start_mouse'
			})
		}
	};
	function handleToggleClick(){
		document.removeEventListener('mousemove',handleStartDrag);
		document.removeEventListener('touchend',handleStartDrag);
		dispatchContact({
			key:'toggle_show'
		})
	}
	function handleStartDrag(e){
		document.removeEventListener('mousemove',handleStartDrag);
		document.removeEventListener('touchmove',handleStartDrag);
		if(buttonRef.current){
        	buttonRef.current.removeEventListener('mouseup',handleToggleClick);
        	buttonRef.current.removeEventListener('touchend',handleToggleClick);
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
            	buttonRef.current.addEventListener('touchend',handleToggleClick);
            }
            document.addEventListener('mousemove',handleStartDrag);
            document.addEventListener('touchmove',handleStartDrag);
        };
        return function(){
        	if(buttonRef.current){
            	buttonRef.current.removeEventListener('mouseup',handleToggleClick);
            	buttonRef.current.removeEventListener('touchend',handleToggleClick);
        	}
        	document.removeEventListener('mousemove',handleStartDrag);
        	document.removeEventListener('touchmove',handleStartDrag);
        }
    },[stateContact.onMouse]);
    const handleTouchTranslate =useMemo(function(){
        return function(event){
            setTranslate(event.changedTouches[0].clientX,event.changedTouches[0].clientY)
        };
    },[]);
	const handleMouseTranslate =useMemo(function(){
        return function(event){
            setTranslate(event.x,event.y)
        };
    },[]);
    function setTranslate(x,y){
    	let currentRect =buttonRef.current.getBoundingClientRect();
            x = document.documentElement.clientWidth - currentRect.width/2 - x;
            if(x < 0) x = 0;
            else if(x > document.documentElement.clientWidth - currentRect.width){
            	x = document.documentElement.clientWidth - currentRect.width;
            }
            y = document.documentElement.clientHeight - currentRect.height/2 - y;
            if(y < 0) y = 0;
            else if(y > document.documentElement.clientHeight - currentRect.height){
            	y = document.documentElement.clientHeight - currentRect.height;
            }
            buttonRef.current.style.right 	= x+"px";
            buttonRef.current.style.bottom  = y+"px";
    };
	const handleStopDrag = useMemo(function(){
		return function(event) {
			console.log("drag stop",event.type)
			let currentRect =buttonRef.current.getBoundingClientRect();
	        buttonRef.current.style.cursor="";
	        dispatchContact({
				key:'stop_drag',
				value:{
					x: document.documentElement.clientWidth - currentRect.width/2 - currentRect.left,
					y: document.documentElement.clientHeight - currentRect.height/2 - currentRect.top
				}
			})
		}
	},[]);
	useEffect(function(){
        if(stateContact.onDrag){
            document.addEventListener('mouseup',handleStopDrag);   
            document.addEventListener('touchend',handleStopDrag);

            document.addEventListener('mouseleave',handleStopDrag);
			document.addEventListener('touchcancel',handleStopDrag);

            document.addEventListener('mousemove',handleMouseTranslate);
            document.addEventListener('touchmove',handleTouchTranslate);
        };
        return function(){
            document.removeEventListener('mouseup',handleStopDrag); 
            document.removeEventListener('touchend',handleStopDrag); 
            document.removeEventListener('mouseleave',handleStopDrag);
            document.removeEventListener('touchcancel',handleStopDrag);

            document.removeEventListener('mousemove',handleMouseTranslate);
            document.removeEventListener('touchmove',handleTouchTranslate);
        }
    },[stateContact.onDrag]);
	return(
			<Button {...buttonAttr}>
					<AliceCarousel 
						infinite
						autoPlay
						animationDuration={500}
						autoPlayInterval={2000}
						touchTracking={false}
						mouseTracking={false}
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