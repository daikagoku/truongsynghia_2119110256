import {useState,useEffect,useRef,useMemo} from 'react';
export default function DragTranslate({onDragStart,onMouseDown,onMouseUp,onMouseLeave,onMouseMove}){
        const [isDrag,setIsDrag] = useState(false);     
        const currentRef=useRef();
        const handleTranslate =useMemo(function(){
            return function(event){
                let currentRect =currentRef.current.getBoundingClientRect();
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
                currentRef.current.style.left = x+"px";
                currentRef.current.style.top  = y+"px";
            };
        },[]);
        function handleStop(){
                setIsDrag(false);
        };
        useEffect(function(){
            if(isDrag){
                document.addEventListener('mouseup',handleStop);   
                document.addEventListener('mouseleave',handleStop);
                document.addEventListener('mousemove',handleTranslate);
            };
            return function(){
                document.removeEventListener('mouseup',handleStop);           
                document.removeEventListener('mouseleave',handleStop);
                document.removeEventListener('mousemove',handleTranslate);
            }
        },[isDrag])
        return{
            ref:currentRef,
            onDragStart:function(event){
                event.preventDefault();   
            },
            onMouseDown:function(event){
                setIsDrag(true);
            },onMouseUp:function(event){
                if(isDrag){
                    setIsDrag(false);
                };
            }
    }
}