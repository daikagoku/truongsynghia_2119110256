import {useContext,useMemo} from "react";
import clsx from 'clsx';
import {SlideContext} from '../index';
import {List,Item,Button,Icon} from '../../../../../../../../../components/';
import styles from './index.module.css';
export  function BackButton(){
	const [slide,listItem] = useContext(SlideContext);
	const buttonAttr = {
		className:clsx("circle-btn",styles.button,styles.back)	
	}
	buttonAttr.onClick= useMemo(function(){
			return function(){
				slide.slidePrev();
			}
	})
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
		className:clsx("circle-btn",styles.button,styles.next)	
	}
	buttonAttr.onClick= useMemo(function(){
			return function(){
				slide.slideNext();
			}
	})
	return(
		<Button 
		    {...buttonAttr}
		>
		    <Icon className="fas fa-chevron-right"/>
		</Button>
	)
};

