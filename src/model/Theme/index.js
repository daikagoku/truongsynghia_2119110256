import {createContext,useMemo,useState} from 'react';
import useStorage from '../../core/useStorage';
export const ThemeContext = createContext([]);
export default function useThemeModel(){
	const styles = {
		default:1,
		dark:1,
		light:1,
		blue:1
	}
	const [store,handleStore] = useStorage('theme',"default");
	function checkTheme(key){
		if(styles[key] !== 1){
			return 'default';
		};
		return key;
	};
	function handle(action){
		switch(action.key){
			case 'set_theme':
				handleStore({
					key:"set_value",
					value:checkTheme(action.value)
				})
				break;
		}
	};
	return [store,handle];
}
