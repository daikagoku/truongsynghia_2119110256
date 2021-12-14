import './index.css';
import {Form,Input,Button,Icon} from '../../../../../../components/';
import useReponsive from '../../../../../../core/useReponsive';
import {ContentContext} from '../init';
import {useContext,useEffect,useRef} from 'react';
export default function() {
	const inputRef = useRef();
	const [reponsive] = useReponsive();
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
		multiple :1,
		value    :state.value,
		onChange :function(event){
			event.target.style.height = event.target.scrollHeight + "px";
			dispatch({
				key:"set_value",
				value:event.target.value
			});
		}
	};
	return(
		<Form {...formAttr}className="contact-content-input-form">
			<Input {...inputAttr} className="contact-content-input"/>
			<Button type="submit" className="contact-content-submit">
				<Icon icon="fas fa-paper-plane"/>
			</Button>	
		</Form>
	)
}