import {useReducer,useEffect,useRef,memo,useMemo} from 'react';
import './index.css';
import DragTranslate from '../../core/DragTranslate';
import {initData,reducer} from './init';
import {List,Item,Div,Button,Icon} from '../tags';
export default memo(function Contact(){
	const buttonRef = useRef();
	const [state,dispatch] = useReducer(reducer,initData);
	let contactAttr = {
		className:"contact"
	};
	if(state.isDrag === true){
		contactAttr.className+=" drag";
	};
	let buttonAttr = {
		ref:buttonRef,
		className:"contact-btn circle-btn",
		onDragStart:function(e){
			e.preventDefault()
		},onMouseDown:function(e){
			dispatch({
				key:'start_drag'
			})
		},onClick:function(e){
			dispatch({
				key:'toggle_click'
			})
		}
	};
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
	function handleStop(){
        dispatch({
			key:'stop_drag'
		})
    };
	useEffect(function(){
            if(state.isDrag){
                document.addEventListener('mouseup',handleStop);   
                document.addEventListener('mouseleave',handleStop);
                document.addEventListener('mousemove',handleTranslate);
            };
            return function(){
                document.removeEventListener('mouseup',handleStop);           
                document.removeEventListener('mouseleave',handleStop);
                document.removeEventListener('mousemove',handleTranslate);
            }
        },[state.isDrag])
	return(
		<div {...contactAttr}>
			<Button {...buttonAttr}>
				<Icon className="far fa-comments"/>
			</Button>
		</div>
	)
});