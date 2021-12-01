import {Thumbnail,Image,Item} from '../../../../../../../components/';
import {useContext,useRef} from "react";
import {SlideContext} from '../index';
import './index.css';
export default function SlideItem({data,index}){
	const thisRef = useRef();
	const itemAttr={
		onDragStart:function(event){
			event.preventDefault()
		},onMouseDown:function(event){
			thisRef.current.style.cursor="grab"
		},onMouseUp:function(event){
			thisRef.current.style.cursor=""
		},onMouseLeave:function(event){
			thisRef.current.style.cursor=""
		}
	}
	return(
		<Thumbnail ref={thisRef} {...itemAttr} prefix="slide" thumbnailClass="inset-t-4">
			<Image className="img-cover"src={data.src} role="presentation" />
		</Thumbnail>
	)
};