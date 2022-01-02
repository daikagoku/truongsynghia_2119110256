import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {useContext,useRef,useState,useEffect,useMemo,memo} from 'react';
import {ProductThumbnailContext} from '../init';
import {Thumbnail,Image} from '../../../../../../../components/';
import './index.css';
import {BackButton,NextButton} from '../components/ItemButtons/';
import {BackDotButton,NextDotButton} from '../components/DotButtons/';

import SlideItem from '../components/Item/';
import SlideDot from '../components/Dot/';

export default memo(function ProductThumbnail({listItem,...props}){
	const [index,setIndex] = useState();
	const thisRef = useRef();
	const dotRef = useRef();
	useEffect(function(){
		if(thisRef.current){
			setIndex(thisRef.current.state.activeIndex);
		}
	},[thisRef.current]);
	useEffect(function(){
		if(thisRef.current){
			thisRef.current.slideTo(index);
		}
		if(dotRef.current){
			dotRef.current.slideTo(index);
		}
	},[index]);
	function handleSlideChanged(event){
		setIndex(event.item);
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
	<ProductThumbnailContext.Provider value={{
		slide:thisRef.current,
		dots:dotRef.current,
		listItem:listItem
	}}>
		<div id="product-detail-thumbnail" className="overflow-hidden relative">
			<AliceCarousel 
				ref = {thisRef}
				activeIndex ={index}
				infinite
				animationDuration={1000}
				mouseTracking
				items = {slides}
				disableDotsControls
				disableButtonsControls
				onSlideChanged={handleSlideChanged}
			/>	
			<BackButton />
			<NextButton />
		</div>
		<div id="product-detail-thumbnail-dots" className="overflow-hidden relative">
			<AliceCarousel 
				ref = {dotRef}
				activeIndex ={index}
				animationDuration={1000}
				disableDotsControls
				disableButtonsControls
				onSlideChanged={handleSlideChanged}
				mouseTracking
				items = {dots}
				responsive = {
					{
						0:{items:3},
						400:{items:4},
						800:{items:5},
						1200:{items:6}
					}
				}
			/>
			<BackDotButton />
			<NextDotButton />
		</div>
	</ProductThumbnailContext.Provider>
	)
});