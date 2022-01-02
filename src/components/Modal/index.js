import './index.css';
import {Button,Icon} from '../index';
import {
  useEffect,
  useState,
  useMemo,
  forwardRef,
  useRef,
  memo,
  useImperativeHandle} from 'react';
export default memo(forwardRef(function Modal({prefix,show,title,widthSize,heightSize,children},ref) {
  const [isShow,setShow] = useState(false);
  const thisRef = useRef({});
  const handle = useMemo(function(){
    return{
        show:function(){
          setShow(true);
        },close:function(){
          setShow(false);
        }
    }
  },[]);
  handle.toggle=useMemo(function(){
    return function(){
      setShow(!isShow);
    }
  },[isShow])
  useImperativeHandle(ref,function(){
    return{
      ...thisRef.current,
      ...handle,
      isShow:isShow
    }
  },[])
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
      handle.show();
    }
  },[show]);
  if(isShow){
    contentAttr.className+=" show";
  };
  function handleClick(event){
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
          {children}
        </div>
      </div>
    </div>
  )
}))