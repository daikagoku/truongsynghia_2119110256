import {useContext,useMemo,useImperativeHandle,useState,forwardRef,memo,useRef,useEffect} from 'react';
import ReactDOM from 'react-dom';
import Time from '../../core/Time';
import {AppContext} from '../../AppInit';
export function useToastProvider(){
	const [data,setData] = useState([]);
	const handleToast = useMemo(function(){
		return {
			show:function(props){
				setData(function([...prevState]){
					let id = 1;
					if(prevState.length > 0 ){
						id = prevState[0].id++;
					}
					props.id = id;
					props.time = Time.create();
					prevState.push(props);
					return prevState;
				})
			},remove:function(id){
				setData(function([...prevState]){
					return prevState.filter(function(item){
						return item.id != id;
					});
				})
			}
		}
	},[data])
	return [data,handleToast];
}
function useToastModel(){
	const dataApp = useContext(AppContext);
	const [data,handle] = dataApp['toast'];
	return [data,handle];
};
export default useToastModel;