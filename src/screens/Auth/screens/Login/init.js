import {createContext,useContext,useRef,useReducer} from 'react'
export const LoginContext = createContext();
export const initData = {
	Username:"",
	Password:"",
	Save:false,
	validity:false
}
