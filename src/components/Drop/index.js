import {Button,Icon} from '../index';
import {
        useState,
        useImperativeHandle,
        useRef,
        forwardRef,
        useEffect,
        useMemo,
        memo} from 'react';
import './index.css';
export default memo(forwardRef(function Drop({show,prefix,title,position,children},ref) {
  const [isShow,setShow] = useState(false);
  const thisRef = useRef();
  const handle = {
        show:function(){
          setShow(true)
        },close:function(){
          setShow(false)
        }
      }
  handle.toggle=useMemo(function(){
    return function(){
      setShow(!isShow);
    }
  },[isShow]);
  useEffect(function(){
    if(show){
      handle.show();
    }
  },[show]);
  useImperativeHandle(ref,function(){
    return{
      ...thisRef.current,
      ...handle,
      isShow:isShow
    }
  })
  useEffect(function(){
    if(show){
      handle.show();
    }
  },[show]);
  const containerAttr={
    className:"drop "+position
  };

  if(prefix){
    containerAttr.className+=" "+prefix+"_drop";
  }
  if(isShow){
    containerAttr.className+=" show";
  };

  const contentAttr={
    className:"drop-content"
  };

  useEffect(function(){
    if(isShow){
      
    }
  },[isShow])

  return (
    <div ref={thisRef} {...containerAttr}>
      <div {...contentAttr}>
      {
        children
      }
      </div>
    </div>
  )
}))