import {useContext,useMemo,useImperativeHandle,useState,forwardRef,memo,useRef,useEffect} from 'react';
import ReactDOM from 'react-dom';
import {MessageBoxContext} from '../components/MessageBox/provider';
import Time from './Time';
function useMessageBox(){
	const [list,handleList] = useContext(MessageBoxContext);
	const handleMessageBox = useMemo(function(){
		return {
			show:function(props){
				props.time = Time.create();
				handleList.add(props)
			}
		}
	},[list])
  	return handleMessageBox;
};
export default useMessageBox;