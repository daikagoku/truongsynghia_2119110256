import {useRef,useContext,useMemo} from 'react';
import clsx from 'clsx';
import {ProductThumbnailContext} from '../../init';
import {Thumbnail,Image,Button} from '../../../../../../../../components/';
import './index.css';
export default function({data,index}){
	const {slide,dots,listItem} = useContext(ProductThumbnailContext);
	const thisRef = useRef();
	const itemAttr= {
			onDragStart:function(event){
				event.preventDefault();
			},onClick:function(event){
				slide.slideTo(index);
				dots.slideTo(index);
			}
	};
	let isActive = slide?.state.activeIndex === index;
	return (
		<Button {...itemAttr}  data-index={index}className={clsx("square-btn",{active:isActive})}>
			<Thumbnail prefix="product-detail-thumbnail" thumbnailClass="inset-t-10">
				<Image className="product-img img-contain"src={data.url} role="presentation" />
			</Thumbnail>
		</Button>
	)
}
