import {createContext,useMemo,useState} from 'react';
import useStorage from '../../core/useStorage';
import styles from './index.module.css';
export const ThemeContext = createContext([]);
export default function useThemeModel(){
	const [store,handleStore] = useStorage('theme',"default");
	const state = {
		list:{
			...styles
		},current:styles[store]
	};
	const handle = {
		set:function(key){
			if(styles[key]){
				handleStore.set(key);
			}else{
				handleStore.set("default");
			}
		}
	};
	return [state,handle];
}
