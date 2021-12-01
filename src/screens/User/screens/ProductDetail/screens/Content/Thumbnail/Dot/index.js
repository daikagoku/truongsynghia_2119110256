import {useRef,useContext,useMemo} from 'react';
import clsx from 'clsx';
import {ProductThumbnailContext} from '../index';
import {Thumbnail,Image,Button} from '../../../../../../../../components/';
import './index.css';
export default function({data,index}){
	const [slide,listItem] = useContext(ProductThumbnailContext);
	const thisRef = useRef();
	const itemAttr= {
			onDragStart:function(event){
				event.preventDefault()
			},onClick:function(event){
				slide.slideTo(index)
			}
	}
	return (
		<Button className={clsx("square-btn",{active:index===slide?.state.activeIndex})}>
			<Thumbnail ref={thisRef} {...itemAttr} prefix="product-detail-thumbnail" thumbnailClass="inset-t-10">
				<Image className="product-img img-contain"src={data.src} role="presentation" />
			</Thumbnail>
		</Button>
	)
}
