
import {useReducer,useEffect,useRef,useMemo} from "react";
import {List} from '../tags';
import "./index.css";
import GroupSlideArrow from './arrow/';
import {reducer,initData,AppContext} from './init';
export default function GroupSlideCard({listItem,itemAttr,children,...props}) {
    const groupRef = useRef();
    const [state,dispatch] = useReducer(reducer,initData);
    function setScroll(){
        let tmp = state.scrollLength % state.offsetWidth;
        if(tmp !== 0){
            if(state.scrollMove > 0){
                return state.scrollLength + state.offsetWidth-tmp;
            }else if(state.scrollMove < 0){
                return state.scrollLength - tmp ;
            };
        };
        return state.scrollLength;
    };
    itemAttr = {
        ...itemAttr,
        className:itemAttr.className+" group-slide-card-item"
    };
    const groupAttr = useMemo(function(){
        return{
            ref:groupRef,
            className:"overflow-hidden row group-slide-card",
            onDragStart:function(event){
                    event.preventDefault();
            },onMouseDown:function(event){
                if(!event.target.closest('.button')){
                    groupRef.current.style.cursor = 'grab';
                     dispatch({
                         key:'start_scroll',
                         value:0
                     })
                }
            }
        }
    },[]);
    // useEffect(function(){
    //     function handleResize(event){
    //         const parentRect = groupRef.current.getBoundingClientRect();
    //         dispatch({
    //             key:'init_width',
    //             value:groupRef.current.scrollWidth - parentRect.width
    //         })
    //     }
    //     window.addEventListener('resize',handleResize);
    //     return ()=>(window.removeEventListener('resize',handleResize))
    // })
    useEffect(function(){
        const parentRect = groupRef.current.getBoundingClientRect();
        dispatch({
            key:'init_width',
            value:groupRef.current.scrollWidth - parentRect.width
        })
    },[listItem.length]);
    useEffect(function(){
        const item = groupRef.current.querySelector('.group-slide-card-item');
        if(item !== undefined && item !== null){
            const itemRect = item.getBoundingClientRect();
            dispatch({
                key:'init_offset',
                value:itemRect.width
            })
        }
    },[state.scrollWidth]);
    useEffect(function() {
        function handleStop(event){
            groupRef.current.style.cursor = '';
            dispatch({
                key:'stop_scroll'
            })
            if(state.scrollMove > 0){
                dispatch({
                    key:'set_scroll',
                    value:state.scrollLength-state.offsetWidth
                })
            }else if(state.scrollMove < 0){
                dispatch({
                    key:'set_scroll',
                    value:state.scrollLength+state.offsetWidth
                })
            };
        };
        if(state.scrollMove !== 0){
            if(state.isScroll === true){
                groupRef.current.addEventListener('mouseup',handleStop);
                groupRef.current.addEventListener('mouseleave',handleStop);
            };
        }
        return function(){
            if(groupRef.current){
                groupRef.current.removeEventListener('mouseup',handleStop);
                groupRef.current.removeEventListener('mouseleave',handleStop);
            }
        }
    },[state.isScroll,state.scrollMove])
    useEffect(function(){
        function handleMove(event){
            if(event.movementX !== 0) {
                dispatch({
                    key:'move_scroll',
                    value:event.movementX
                })
                groupRef.current.scrollLeft -= event.movementX;
            };
        };
        if(state.isScroll === true){
            groupRef.current.addEventListener('mousemove',handleMove);
        };    
        return function(){
            if(groupRef.current){
                groupRef.current.removeEventListener('mousemove',handleMove);
            }
        }
    },[state.isScroll]);
    useEffect(function(){
        if(groupRef.current){
            groupRef.current.style.scrollBehavior="smooth";
            groupRef.current.scrollLeft = setScroll();
            groupRef.current.style.scrollBehavior="";
        }
    },[state.scrollLength]);
    return(
        <AppContext.Provider value={[state,dispatch]}>
            <div className="relative">
                <div {...groupAttr}>
                    <List listItem={listItem} itemAttr= {itemAttr} className="group-slide-card-list">
                            {
                                function(_item,_index){
                                    return children(_item)
                                }
                            }
                    </List>
                    <GroupSlideArrow />
                </div>
            </div>
        </AppContext.Provider>
    )
  };
