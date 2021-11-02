
import {useState,useEffect,useRef} from "react";
import {Div,List,Item,Button,Icon} from '../../tags/Tags';
import Fetch from '../../core/Fetch';
import DragToScroll from '../../core/DragToScroll';
import ScrollToView from '../../core/ScrollToView';
import GroupSlideArrow from './GroupSlideArrow';
export default function GroupCard({listItem,itemAttr,children,...props}) {
    const groupRef = useRef();
    function handleClickArrow(event){
        const _item = groupRef.current.querySelector('.group-slide-item').getBoundingClientRect();
        groupRef.current.style.scrollBehavior='smooth';
        if(event.this.classList.contains('next')){
            setScroll(_item.width,_item.width,groupRef.current);
        }else if(event.this.classList.contains('back')){
            setScroll(-_item.width,_item.width,groupRef.current);
        };
        groupRef.current.style.scrollBehavior='';
    };
    function setScroll(scroll,offsetWidth,element){
        let newScroll = element.scrollLeft + scroll;
        let tmp =newScroll % offsetWidth;
        if(scroll > 0){
            element.scrollLeft=newScroll+offsetWidth-tmp;
        }else if(scroll < 0){
            element.scrollLeft=newScroll-tmp ;
        };
        console.log(tmp,newScroll,element.getBoundingClientRect())
    };
    const _itemAttr = {...itemAttr};
    _itemAttr.className+=" group-slide-item";
    const groupAttr = {
            className:"overflow-hidden group-slide",
            ...DragToScroll({
            ref:groupRef,
            onMouseUp:function(event,location){
                const _this = groupAttr.ref.current;
                const _item = _this.querySelector('.group-slide-item').getBoundingClientRect();
                const _newScrollX=location.x.new-location.x.old;
                setScroll(_newScrollX,_item.width,_this);
            }
        })
    };
    if(listItem.length !== 0 ){
        return (
    	<div className="relative">
           	<Div {...groupAttr}>
	        	<List listItem={listItem}className="p-0 mx-0 my-2 card-group flex-nowrap">
	        	    {
	        	    	function(_item,_index){
	              	        return(
		        	    	    <Item key={_index}{..._itemAttr}>
		        	             	{children(_item)}
		        	            </Item>
	        	    		)
	        	    	}
	        	    }
	        	</List>
         	</Div>
                <GroupSlideArrow 
                    onClick={handleClickArrow}
                />
    	</div>
        );
    }else{
        return <></>
    }
  };
