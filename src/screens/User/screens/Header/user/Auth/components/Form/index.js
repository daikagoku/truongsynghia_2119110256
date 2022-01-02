import {Form} from '../../../../../../../../components/';
import {AuthContext} from '../../init';
import {useReducer} from 'react';
import clsx from 'clsx';
import './index.css';
export default function({children,value,className,...props}){
	return (
	<AuthContext.Provider value={value}>
		<Form className={clsx("auth-form",{[className]:className})} {...props}>
			{children}
		</Form>
	</AuthContext.Provider>
	)
}