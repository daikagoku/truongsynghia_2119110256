import {createContext,useState,useMemo} from 'react';
import useStorage from '../../core/useStorage';
import useApp from '../../core/useApp';
import useMessageModel from '../../model/Message/';
import useDialogModel from '../../model/Dialog/';

async function handleAdd(store,newItem,setProgress,setError,setStore,message){
	setProgress(true);
	new Promise(function(resolve, reject){
		const _newStore = [...store];
				const _index = _newStore.findIndex(function(item){
					if(item){
						return item.productId === newItem.productId && item.versionId === newItem.versionId;
					}
				});
				if(_index === -1){
					_newStore.push({
						...newItem
					})
				}else{
					_newStore[_index].quantity+=newItem.quantity;
				};
		resolve(_newStore);
	})
		.then(function(results){
			setStore(results);
			message.show({type:"success",text:"Thêm thành công vào giỏ hàng"})
		})
		.catch(function(error){
			setError(error);
			message.show({type:"error",text:"Thêm không thành công vào giỏ hàng"})
		})
		.finally(function(){
			setTimeout(function(){
				setProgress(false);			
			},300)
		})
}
async function handleDelete(store,carIds,setProgress,setError,setStore,dialog){
	setProgress(true);
	new Promise(function(resolve, reject){
			const _newStore = [...store];
					if(Array.isArray(carIds)){
						carIds.forEach(function(carId){
							_newStore.splice(carId,1);
						})
					}else{
						_newStore.splice(carIds,1);
					}
					resolve(_newStore);
		})
			.then(function(results){
				setStore(results);
			})
			.catch(function(error){
				setError(error);
			})
			.finally(function(){
				setTimeout(function(){
					setProgress(false);			
				},300)
			})
}
export default function useCartModel(){
	const [store,handleStore] = useStorage('cart_product',[]);
	const [dataApp,handleApp] = useApp("cart",{})
	const [onProgress,setProgress] = useState(false);
	const [error,setError] = useState("");
	const [messages,handleMessage] = useMessageModel();
	const [dialogs,handleDialog] = useDialogModel();
	const handleCart = useMemo(function(){
		return {
			add:function(newItem){
				handleAdd(store,newItem,setProgress,setError,handleStore.set,handleMessage);
			},delete:function(carIds){
				handleDelete(store,carIds,setProgress,setError,handleStore.set,handleDialog);
			},update:function(carId,quantity){
				const _newStore = [...store];
				_newStore[carId].quantity=quantity;
				handleStore.set(_newStore);
			}
		};
	})
	const handleCartModal = useMemo(function(){
		return {
			show:function(){
				handleApp.set({
					...dataApp,
					isShow:true
				})
			},close:function(){
				handleApp.set({
					...dataApp,
					isShow:false
				})			
			},toggle:function(){
				handleApp.set({
					...dataApp,
					isShow:dataApp.isShow ? false : true
				})
			}
		};
	},[dataApp]);
	return [{
		data:store,
		error:error,
		onProgress:onProgress,
		...dataApp
	},{
		...handleCart,
		...handleCartModal
	}];
}
