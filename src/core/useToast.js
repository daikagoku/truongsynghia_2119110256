import {useContext,useMemo,useImperativeHandle,useState,forwardRef,memo,useRef,useEffect} from 'react';
import ReactDOM from 'react-dom';
import {ToastContext} from '../component/Toast/provider';
function useToast(){
	const [list,handleList] = useContext(ToastContext);
	const handleToast = useMemo(function(){
		return {
			show:function(props){
				handleList.add(props)
			}
		}
	},[list])
  	return handleToast;
};
export default useToast;