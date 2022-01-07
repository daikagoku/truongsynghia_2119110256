import {useContext,useMemo,useImperativeHandle,useState,forwardRef,memo,useRef,useEffect} from 'react';
import ReactDOM from 'react-dom';
import Time from '../../core/Time';
import useApp from '../../core/useApp';
function useToastModel(){
	const [data,handle] = useApp("toast",[])
	const handleMes = useMemo(function(){
		const newMes = [...data];
		return {
			show:function(props){
				props.time = Time.create();
				newMes.push(props);
				handle.set(newMes);
			},remove:function(index){
				newMes.splice(index,1);
				handle.set(newMes);
			}
		}
	},[data])
  	return [data,handleMes];
};
export default useToastModel;