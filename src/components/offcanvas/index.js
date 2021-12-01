import {Button,Icon} from '../index';
import {
        useReducer,
        createContext,
        useContext,
        useImperativeHandle,
        useRef,
        forwardRef,
        memo} from 'react';
import './index.css';
import {initData,reducer} from './init';
export const OffcanvasContext = createContext([]);
export default memo(forwardRef(function Offcanvas({prefix,title,position,children},ref) {
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
      <Button onClick={handleClick} className="offcanvas-overlay"></Button>
      <div className={"offcanvas-view "+position}>
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