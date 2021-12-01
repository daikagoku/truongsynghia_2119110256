import {useContext,useState} from "react";
import clsx from 'clsx';
import {SlideContext} from '../init';
import {List,Button} from '../../../../../../../components/';
import './index.css';
export default function({...props}){
	const [slide,listItem] = useContext(SlideContext);
	return(
		<List className="slide-dots" listItem={listItem} itemAttr={{className:""}}>
			{
				function(item,index){
					let active = false;
					if(slide && index === slide.state.activeIndex){
						active = true;
					};
					return(
						<Button
							onClick={()=>(slide.slideTo(index))}
							className={clsx("slide-dot-button circle-btn",{active:active})}>
						</Button>
					)
				}
			}
		</List>
	)
}