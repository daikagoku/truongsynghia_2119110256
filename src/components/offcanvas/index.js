import {Button,Icon} from '../index';
import {
        useReducer,
        useImperativeHandle,
        useRef,
        forwardRef,
        memo} from 'react';
import './index.css';
import {initData,reducer} from './init';
export default memo(forwardRef(function Offcanvas({show,prefix,title,position,widthSize,heightSize,children},ref) {
  const [state,dispatch] = useReducer(reducer,initData);
  const thisRef = useRef({});
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
  };
  if(state.open){
    contentAttr.className+=" show";
  };

  const viewAttr={
    className:"offcanvas-view"
  };
  if(position){
    viewAttr.className+=" "+position;
  }
  if(widthSize){
    viewAttr.className+=" "+widthSize;
  }
  if(heightSize){
    viewAttr.className+=" "+heightSize;
  }
  function handleClick(){
    handle.close();
  };
  return (
    <div ref={thisRef} {...contentAttr}>
      <Button onClick={handleClick} className="offcanvas-overlay"></Button>
      <div {...viewAttr}>
        <div className="offcanvas-head">
          <div className="offcanvas-title">
            <span className="">{title}</span>
          </div>
          <Button 
            className="offcanvas-close circle-btn"
            onClick={handleClick}
          >
            <Icon icon="fas fa-times"/>
          </Button>
        </div>
        <div className="offcanvas-body">
          {state.open === true && children}
        </div>
      </div>
    </div>
  )
}))