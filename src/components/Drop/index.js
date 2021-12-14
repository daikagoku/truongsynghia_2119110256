import {Button,Icon} from '../index';
import {
        useReducer,
        useImperativeHandle,
        useRef,
        forwardRef,
        memo} from 'react';
import './index.css';
import {initData,reducer} from './init';
export default memo(forwardRef(function Offcanvas({show,prefix,title,position,children},ref) {
  const [state,dispatch] = useReducer(reducer,initData);
  const thisRef = useRef();
  const handle = {
        open:function(){
          dispatch({
            key:"set_open",
            value:true
          })
        },close:function(){
          dispatch({
            key:"set_open",
            value:false
          })
        },toggle:function(){
          dispatch({
            key:"set_open",
            value:!state.open
          })
        }
      }
  useImperativeHandle(ref,function(){
    return{
      ...thisRef.current,
      state:state,
      handle:handle
    }
  })
  const contentAttr={
    className:"offcanvas"
  };
  if(prefix){
    contentAttr.className+=" "+prefix+"_offcanvas";
  }
  if(state.open){
    contentAttr.className+=" show";
  };
  function handleClick(){
    dispatch({
      key:'set_open',
      value:false
    })
  };
  return (
    <div ref={thisRef} {...contentAttr}>
      
    </div>
  )
}))