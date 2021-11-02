import {useRef} from "react";
export default function DragToScroll({ref,onMouseUp}){
        let parent;
        const location      ={};
        const oldScroll     ={};
        let isScroll;
        function handleStopMouse(event){
            if(isScroll === true){
                parent.style.scrollBehavior='smooth';
                onMouseUp(event,{
                    x:{
                        old:oldScroll.x,
                        new:parent.scrollLeft
                    },
                    y:{
                        old:oldScroll.y,
                        new:parent.scrollTop
                    }
                });
                parent.style.cursor   ="";
                parent.style.scrollBehavior="";
                isScroll              = false;
            } 
        };
        return{
            ref:ref,
            onDragStart:function(event){
                event.preventDefault();    
            },
            onMouseDown:function(event){ 
                parent              = ref.current;
                parent.style.cursor ="grab";
                oldScroll.x         =parent.scrollLeft;
                location.x          =event.pageX - parent.offsetLeft;
                oldScroll.y         =parent.scrollTop;
                location.y          =event.pageY - parent.offsetTop;   
                isScroll            =true;
            },
            onMouseUp:function(event){ 
                handleStopMouse(event)           
            },
            onMouseLeave:function(event){
                handleStopMouse(event)             
            },
            onMouseMove:function(event){  
                if(isScroll === true){
                    if(parent.scrollWidth !== parent.offsetWidth){
                        parent.scrollLeft +=location.x - event.pageX + parent.offsetLeft;
                        location.x = event.pageX - parent.offsetLeft;
                    };
                    if(parent.scrollHeight !== parent.offsetHeight){
                        parent.scrollTop +=location.y - event.pageY + parent.offsetTop;
                        location.y = event.pageY - parent.offsetTop;
                    };
                }
            }
        }
    }