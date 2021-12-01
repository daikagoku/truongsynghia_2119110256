import {useContext,useMemo} from "react";
import clsx from 'clsx';
import {ProductThumbnailContext} from '../index';
import {List,Item,Button,Icon} from '../../../../../../../../components/';
import styles from "./index.module.css";
export  function BackButton(){
	const [slide] = useContext(ProductThumbnailContext);
	const buttonAttr = {
			className:clsx(styles.button,"square-btn",styles.back)	
		}
	if(slide){
		buttonAttr.onClick=function(){
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
	const [slide] = useContext(ProductThumbnailContext);
	const buttonAttr = {
			className:clsx(styles.button,"square-btn",styles.next)	
	};
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

