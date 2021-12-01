import './index.css';
import {useReducer,memo} from 'react';
import ContactButton from './Button';
import ContactContent from './Content';
import {ContactContext,reducer,initData} from './init';
export default memo(function Contact(){
	const [state,dispatch] = useReducer(reducer,initData);
	let contactAttr = {
		className:"contact"
	};
	if(state.isDrag === true){
		contactAttr.className+=" drag";
	};
	return (
		<ContactContext.Provider value={[state,dispatch]}>
			<div {...contactAttr}>
				<ContactButton />
				<ContactContent />
			</div>
		</ContactContext.Provider>
	)
})