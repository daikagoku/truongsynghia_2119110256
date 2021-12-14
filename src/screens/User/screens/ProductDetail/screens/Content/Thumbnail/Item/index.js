import {useRef,useContext,useMemo} from 'react';
import {ProductThumbnailContext} from '../index';
import {Thumbnail,Image} from '../../../../../../../../components/';
import './index.css';
export default function({data,index}){
	const {slide,listItem} = useContext(ProductThumbnailContext);
	const thisRef = useRef();
	const itemAttr= useMemo(function(){
		return {
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
	},[thisRef.current])
	return (
		<Thumbnail ref={thisRef} {...itemAttr} prefix="product-detail-thumbnail" thumbnailClass="inset-t-10">
			<Image className="product-img img-contain"src={data.src} role="presentation" />
		</Thumbnail>
	)
}
