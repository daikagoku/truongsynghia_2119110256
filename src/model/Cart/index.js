import {createContext,useContext,useState,useMemo,useEffect} from 'react';
import useStorage from '../../core/useStorage';
import useApp from '../../core/useApp';
import {AppContext} from '../../AppInit';
import useMessageModel from '../../model/Message/';
import useDialogModel from '../../model/Dialog/';
async function handleAdd(store,newItem,setProgress,setError,setStore,showMes){
	setProgress(true);
	new Promise(function(resolve, reject){
		const _newStore = [...store];
		const _index = _newStore.findIndex(function(item){
			if(item){
				return item.productId === newItem.productId && item.versionId === newItem.versionId;
			}
		});
		if(_index === -1){
			let id = 1;
			if(_newStore.length > 0 ){
				id = _newStore[0].id++;
			}
			_newStore.push({
				id:id,
				...newItem
			})
		}else{
			_newStore[_index].quantity+=newItem.quantity;
		};
		resolve(_newStore);
	})
		.then(function(results){	
			setTimeout(function(){
				setProgress(false);	
				setStore(results);	
				showMes({
					type:"success",
					text:"Thêm thành công sản phẩm vào giỏ hàng"
				})	
			},500)
		})
		.catch(function(error){
			setTimeout(function(){
				setProgress(false);	
				setError(error);
				showMes({
					type:"error",
					text:error
				})		
			},500)
		})
}
async function handleDelete(store,carId,setProgress,setError,setStore){
	setProgress(true);
	new Promise(function(resolve, reject){
		let _newStore = store.filter(function(item){
						return item.id != carId;
					})
					resolve(_newStore);
		})
			.then(function(results){
				setTimeout(function(){
					setProgress(false);	
					setStore(results);		
				},500)
			})
			.catch(function(error){
				setTimeout(function(){
					setProgress(false);	
					setError(error);		
				},500)
			})
}
export function useCartProvider(){
	const [data,setData] = useState({});
	const handleCart = useMemo(function(){
		return {
			show:function(){
				setData(function(prevState){
					return {
						...prevState,
						isShow:true
					}
				})
			},close:function(){
				setData(function(prevState){
					return {
						...prevState,
						isShow:false
					}
				})			
			},toggle:function(){
				setData(function({isShow,...prevState}){
					return {
						...prevState,
						isShow:!isShow
					}
				})
			}
		};
	},[data]);
	return [data,handleCart];
}
export default function useCartModel(){
	const dataApp = useContext(AppContext);
	const [data,handle] = dataApp['cart'];
	const [messages,handleMessage] = useMessageModel();
	const [store,handleStore] = useStorage('cart',[]);
	const [onProgress,setProgress] = useState(false);
	const [error,setError] = useState("");
	const handleCart = useMemo(function(){
		return {
			add:function(newItem){
				handleAdd(store,newItem,setProgress,setError,handleStore.set,handleMessage.show);
			},delete:function(carId){
				handleDelete(store,carId,setProgress,setError,handleStore.set,handleMessage.show);
			},update:function(carId,quantity){
				const _newStore = [...store];
				_newStore[carId].quantity=quantity;
				handleStore.set(_newStore);
			}
		};
	},[store]);
	return [{
		error,
		onProgress,
		data:store,
		...data
	},{
		...handleCart,
		...handle
	}];
}
