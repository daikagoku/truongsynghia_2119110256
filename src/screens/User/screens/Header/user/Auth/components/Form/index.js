import {Form} from '../../../../../../../../components/';
import {createContext,useReducer} from 'react';
import clsx from 'clsx';
import './index.css';

export const FormContact = createContext({});
export default function({children,initData,reducer,className,...props}){
	const [state,dispatch] = useReducer(reducer,initData);
	console.log([state,dispatch])
	return (
	<FormContact.Provider value={[state,dispatch]}>
		<Form className={clsx("auth-form",{[className]:className})} {...props}>
			{children}
		</Form>
	</FormContact.Provider>
	)
}