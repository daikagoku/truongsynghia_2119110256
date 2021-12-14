import {useContext,useMemo} from "react";
import clsx from 'clsx';
import {ProductThumbnailContext} from '../index';
import {List,Item,Button,Icon} from '../../../../../../../../components/';
import styles from "./index.module.css";
export  function BackButton({isDisabled,...props}){
	const {slide,dots} = useContext(ProductThumbnailContext);
	const buttonAttr = {
			className:clsx(styles.button,{disabled:isDisabled},"square-btn",styles.back),
			onClick:function(event){
				dots.slidePrev();
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
export function NextButton({isDisabled,...props}){
	const {slide,dots} = useContext(ProductThumbnailContext);
	const buttonAttr = {
			className:clsx(styles.button,{disabled:isDisabled},"square-btn",styles.next),
			onClick:function(event){
				dots.slideNext();
				slide.slideNext();
			}	
	};
	return(
		<Button 
		    {...buttonAttr}
		>
		    <Icon className="fas fa-chevron-right"/>
		</Button>
	)
};

