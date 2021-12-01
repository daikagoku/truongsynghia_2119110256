

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {createContext,useContext,useRef,useState,useEffect,useMemo,memo} from 'react';
import {Thumbnail,Image} from '../../../../../../../components/';
import {ProductContext,ProductDetailContext} from '../../../init';
import './index.css';
import {BackButton,NextButton} from './Buttons/';
import SlideItem from './Item/';
import SlideDot from './Dot/';
export const ProductThumbnailContext = createContext();
export default memo(function ProductThumbnail({props}){
	const [index,setIndex] = useState();
	const thisRef = useRef();
	const dotRef = useRef();
	useEffect(function(){
		if(thisRef.current){
			setIndex(thisRef.current.state.activeIndex);
		}
	},[thisRef.current]);
	function handleSlideChanged(event){
		setIndex(event.item);
	};
	const data = useContext(ProductContext) ?? {};
    const listItem = [];
	if(Array.isArray(data.versions)){
		let version=data.versions.find(function(_version,_index){
			return _version.id===data.version;
		});
		listItem.push({
			src:version.image,
			title:data.title
		});
	};
	if(Array.isArray(data.albums)){
		data.albums.forEach(function(album){
			listItem.push({
				src:album.image
			});
		})
	};
	const slides = useMemo(function(){
		return listItem.map(function(item,index){
			return (<SlideItem data={item} index = {index} />)
		});
	},[listItem]);
	const dots = useMemo(function(){
		return listItem.map(function(item,index){
			return (<SlideDot data={item} index = {index} />)
		});
	},[listItem]);
	return(
	<ProductThumbnailContext.Provider value={[thisRef.current,listItem]}>
		<div className="slide" id="product-detail-thumbnail">
			<AliceCarousel 
				ref = {thisRef}
				activeIndex ={index}
				infinite
				animationDuration={1000}
				disableDotsControls
				disableButtonsControls
				mouseTracking
				onSlideChanged={handleSlideChanged}
				items = {slides}
			>
				
			</AliceCarousel>
			<BackButton />
			<NextButton />
		</div>
		<div className="slide" id="product-detail-thumbnail-dots">
			<AliceCarousel 
				ref = {dotRef}
				infinite
				activeIndex ={index}
				animationDuration={1000}
				disableDotsControls
				disableButtonsControls
				mouseTracking
				items = {dots}
				responsive = {
					{
						0:{items:2},
						600:{items:3},
						800:{items:4},
						1200:{items:5},
						1400:{items:6}
					}
				}
			>			
			</AliceCarousel>
		</div>
	</ProductThumbnailContext.Provider>
	)
});