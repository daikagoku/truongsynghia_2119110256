import './index.css';
import {Button,Icon} from '../index';
import {
  useEffect,
  useContext,
  createContext,
  useReducer,
  forwardRef,
  useRef,
  memo,
  useImperativeHandle} from 'react';
import {initData,reducer} from './init';
export {initData,reducer};
export default memo(forwardRef(function Modal({prefix,show,title,widthSize,heightSize,children},ref) {
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
    className:"modal"
  };
  if(prefix){
    contentAttr.className+=" "+prefix+"_modal";
  }
  const viewAttr={
    className:"modal-view"
  };
  if(widthSize!== undefined){
    viewAttr.className+=" "+widthSize;
  };
  if(heightSize!== undefined){
    viewAttr.className+=" "+heightSize;
  };
  useEffect(function(){
    if(show){
      handle.open();
    }
  },[show])
  if(state.open){
    contentAttr.className+=" show";
  };
  function handleClick(){
    handle.close();
  };
  return (
    <div ref={thisRef} {...contentAttr}>
      <Button onClick={handleClick} className="modal-overlay"></Button>
      <div {...viewAttr}>
        <div className="modal-head">
          <div className="modal-title">
            <span className="">{title}</span>
          </div>
          <Button 
            className="modal-close circle-btn"
            onClick={handleClick}
          >
            <Icon icon="fas fa-times"/>
          </Button>
        </div>
        <div className="modal-body">
          {state.open === true && children}
        </div>
      </div>
    </div>
  )
}))