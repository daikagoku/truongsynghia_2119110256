export default function DragTranslate({onDragStart,onMouseDown,onMouseUp,onMouseLeave,onMouseMove}){
        let isDrag;
        return{
            onDragStart:function(event){
                event.preventDefault(); 
                event.stopPropagation();   
            },
            onMouseDown:function(event){    
				isDrag            =true;
				if(onMouseDown !== undefined && typeof(onMouseDown)==='function'){
					onMouseDown(event);
				};
            },
            onMouseUp:function(event){ 
                if(isDrag === true){
					if(onMouseUp !== undefined && typeof(onMouseUp)==='function'){
						onMouseUp(event);
					};
					isDrag = false;
                };      
            },
            onMouseLeave:function(event){
                if(isDrag === true){
                	if(onMouseLeave !== undefined && typeof(onMouseLeave)==='function'){
                		onMouseLeave(event);
                	};
                	isDrag = false;
                };      
            },
            onMouseMove:function(event){  
                if(isDrag === true){
                	if(onMouseMove!== undefined && typeof(onMouseMove)==='function'){
                		onMouseMove(event);
                	};
                }
            }
        }
    }