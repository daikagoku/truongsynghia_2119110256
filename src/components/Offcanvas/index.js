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
export default memo(forwardRef(function Offcanvas({show,prefix,title,position,widthSize,heightSize,children},ref) {
  const [showState,setShowState] = useState(false);
  const thisRef = useRef({});
  const handle = useMemo(function(){
    return{
        show:function(){
          setShowState(true);
        },close:function(){
          setShowState(false);
        }
    }
  },[]);
  handle.toggle=useMemo(function(){
    return function(){
      setShowState(!showState);
    }
  },[showState])
  useImperativeHandle(ref,function(){
    return{
      ...thisRef.current,
      state:showState,
      handle:handle
    }
  },[])
  const contentAttr={
    className:"offcanvas"
  };
  if(prefix){
    contentAttr.className+=" "+prefix+"_offcanvas";
  };
  useEffect(function(){
    if(show){
      handle.show();
    }
  },[show]);
  if(showState){
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