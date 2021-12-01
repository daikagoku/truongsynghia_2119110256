import {useContext} from "react";
import {SlideContext} from '../index';
import {List,Item,Button,Icon} from '../../../../../../../../../components/';
import "./index.css";
export  function BackButton(){
	const [slide,listItem] = useContext(SlideContext);
	const buttonAttr = {
		className:"slide-button circle-btn back"	
	}
	if(slide){
		buttonAttr.onClick = function(){
			slide.slidePrev();
		}
	}
	return(
		<Button 
		    {...buttonAttr}
		>
		    <Icon className="fas fa-chevron-left"/>
		</Button>
	)
};
export  function NextButton(){
	const [slide] = useContext(SlideContext);
	const buttonAttr = {
		className:"slide-button circle-btn next"
	}
	if(slide){
		buttonAttr.onClick=function(){
			slide.slideNext();
		}
	}
	return(
		<Button 
		    {...buttonAttr}
		>
		    <Icon className="fas fa-chevron-right"/>
		</Button>
	)
};

