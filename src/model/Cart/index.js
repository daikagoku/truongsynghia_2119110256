import {createContext,useState,useMemo} from 'react';
import useStorage from '../../core/useStorage';
import useMessageBox from '../../core/useMessageBox';
import {initData,reducer} from './init';
export const CartContext = createContext([]);
async function handleAdd(store,newItem,setProgress,setError,setStore,messageBox){
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
			messageBox.show({type:"success",text:"Thêm thành công"})
		})
		.catch(function(error){
			setError(error);
			messageBox.show({type:"error",text:"Thêm không thành công"})
		})
		.finally(function(){
			setTimeout(function(){
				setProgress(false);			
			},500)
		})
}
async function handleDelete(store,carIds,setProgress,setError,setStore,messageBox){
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
			messageBox.show({type:"success",text:"Xóa thành công"})
		})
		.catch(function(error){
			setError(error);
			messageBox.show({type:"error",text:"Xóa không thành công"})
		})
		.finally(function(){
			setTimeout(function(){
				setProgress(false);			
			},500)
		})
}
export default function useCartModel(){
	const [store,handleStore] = useStorage('cart_product',[]);
	const [onProgress,setProgress] = useState(false);
	const [error,setError] = useState("");
	const messageBox = useMessageBox();

	const handle = {
		add:function(newItem){
			handleAdd(store,newItem,setProgress,setError,handleStore.set,messageBox);
		},
		delete:function(carIds){
			handleDelete(store,carIds,setProgress,setError,handleStore.set,messageBox);
		},update:function(carId,quantity){
			const _newStore = [...store];
			_newStore[carId].quantity=quantity;
			handleStore.set(_newStore);
		}
	};
	return [{
		data:store,
		error:error,
		onProgress:onProgress
	},handle];
}
