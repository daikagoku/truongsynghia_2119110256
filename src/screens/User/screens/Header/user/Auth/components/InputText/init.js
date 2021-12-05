export const initData = {
	value:"",
	validity:undefined
}
export function reducer(prevState,action){
	switch(action.key){
		case 'set_value':
			return{
				...prevState,
				value:action.value
			}
		case 'set_validity':
			return{
				...prevState,
				validity:action.value
			}
	}
}