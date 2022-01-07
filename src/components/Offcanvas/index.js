import {Button,Icon} from '../index';
import {
        useState,
        useMemo,
        useImperativeHandle,
        useRef,
        forwardRef,
        useEffect,
        memo} from 'react';
import './index.css';
export default memo(forwardRef(function Offcanvas({id,prefix,onShow,onClose,onToggle,title,position,widthSize,heightSize,children},ref) {
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
  useEffect(function(){
    if(onShow && typeof(onShow) === 'function' && isShow){
      onShow({
        value:isShow
      })
    };
    if(onClose && typeof(onClose) === 'function' && !isShow){
      onClose({
        value:isShow
      })
    };
    if(onToggle && typeof(onToggle) === 'function'){
      onToggle({
        value:isShow
      })
    };
  },[isShow])
  handle.toggle=useMemo(function(){
    return function(){
      setShow(!isShow);
    }
  },[isShow])
  useImperativeHandle(ref,function(){
    return{
      ...thisRef.current,
      isShow:isShow,
      ...handle
    }
  },[])
  const contentAttr={
    id:id,
    className:"offcanvas"
  };
  if(prefix){
    contentAttr.className+=" "+prefix+"_offcanvas";
  };
  if(isShow){
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
          {children}
        </div>
      </div>
    </div>
  )
}))