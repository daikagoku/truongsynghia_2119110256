import {createContext,useState,useMemo} from 'react';
import useStorage from '../../core/useStorage';
import {initData,reducer} from './init';
export const CartContext = createContext([]);
async function handleAdd(store,newItem,setProgress,setStore){
	setProgress(true);
	console.log("[start] add to cart ",newItem);
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
		})
		.finally(function(){
			setProgress(false);
			console.log("[finally] add to cart ",newItem);
		})
}
async function handleDelete(store,carIds,setProgress,setStore){
	setProgress(true);
	console.log("[start] delete from cart ",carIds);
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
		.finally(function(){
			setProgress(false);
			console.log("[finally] delete from cart ",carIds);
		})
}
export default function useCartModel(){
	const [store,handleStore] = useStorage('cart_product',[]);
	const [onProgress,setProgress] = useState(false);
	const handle = {
		add:function(newItem){
			handleAdd(store,newItem,setProgress,handleStore.set);
		},
		delete:function(carIds){
			handleDelete(store,carIds,setProgress,handleStore.set);
		},update:function(carId,quantity){
			const _newStore = [...store];
			_newStore[carId].quantity=quantity;
			handleStore.set(_newStore);
		}
	};
	return [{
		data:store,
		onProgress:onProgress
	},handle];
}
