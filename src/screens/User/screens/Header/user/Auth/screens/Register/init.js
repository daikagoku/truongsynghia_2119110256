import {createContext,useContext,useRef,useReducer};
export const LoginContext = createContext();
export const initData = {
	Username:"",
	Password:"",
	Save:false,
	validity:false
}
export function reducer(prevState,action){
	switch(action.key){
		case "set_username":
			return{
				...prevState,
				Username:action.value
			}
		case "set_password":
			return{
				...prevState,
				Password:action.value
			}
		case "set_save":
			return{
				...prevState,
				Save:action.value
			}
	}
}
export default function Validate({children}){
	const [state,dispatch] = useReducer(reducer,initData);
	return(
		<LoginContext.Provider value={[state,dispatch]}>
			{children}
		</LoginContext.Provider>
	)
}