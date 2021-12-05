import './index.css';
import {Form,Input,Button,Icon} from '../../../../../../components/';
import {ContentContext} from '../init';
import {useContext,useRef} from 'react';
export default function() {
	const inputRef = useRef();
	const [state,dispatch] = useContext(ContentContext);
	const formAttr={
		onSubmit:function(event){
			if(state.value !== ""){
				dispatch({
					key:"add_value"
				})
				dispatch({
		            key:'set_value',
		            value:""
		        });
			}
		}
	}
	const inputAttr={
		ref      :inputRef,
		multiple :state.line,
		value    :state.value,
		onInput	 :function(event){
			console.dir(event.target)
			dispatch({
				key:"set_value",
				value:event.target.value
			});
		}
	}
	return(
		<Form {...formAttr}className="contact-content-input-form">
			<Input {...inputAttr} className="contact-content-input"/>
			<Button type="submit" className="contact-content-submit">
				<Icon icon="fas fa-paper-plane"/>
			</Button>	
		</Form>
	)
}