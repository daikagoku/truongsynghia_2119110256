import {useImperativeHandle,forwardRef,memo,useRef} from 'react';
import {
        useState,
        useMemo,
        useImperativeHandle,
        useRef,
        forwardRef,
        useEffect,
        memo} from 'react';
import clsx from 'clsx';
import styles from './index.module.css';
function Dropdown({show,prefix,title,position,children},ref){
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
	return(
		<div ref={thisRef}>
			{children}
		</div>
	)
}
export default memo(forwardRef(Dropdown));